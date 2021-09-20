const prefix = process.env.PREFIX || "t!"
const mySecret = process.env['TOKEN']

const Discord = require("discord.js");
const config = require("./config.json");
const bot = new Discord.Client();
const express = require("express");

const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online


//inicio de tudo
bot.on('message', message => {
  if (message.author.bot) return;
  if (message.channel.type == 'channel') return;
  if (!message.content.toLowerCase().startsWith(config.prefix)) return;
  if (message.content.startsWith(`<@!${bot.user.id}>`) || message.content.startsWith(`<@${bot.user.id}>`)) return;

  const args = message.content
    .trim().slice(config.prefix.length)
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    const commandFile = require(`./commands/${command}.js`)//puxando a pasta comands + o comando
    commandFile.run(bot, message, args);
  } catch (err) {
    const embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setDescription(`${message.author}, O comando informado nao existe ou ainda nao foi adcionado, se isso for um erro chame por <@434791887241740288> \nUtilize **.help** para saber meus comandos.`)
    return message.channel.send(embed);
  }
});

bot.on("message", msg => {
  if(msg.content === `<@${bot.user.id}>`)
  msg.channel.send("**Meu prefixo é *t!*`.`") 
})

bot.on("message", msg => {
  if(msg.content === `<@!${bot.user.id}>`)
  msg.channel.send("**Meu prefixo é *t!*`.`") 
});
bot.on("message", async message => {
  if(message.author.bot) return;
  if(!message.guild) return;
  let xpReward;
  if(bot.user.id === "889122205739405312") xpReward = Math.floor(Math.random() * 0) + 0
  if(xpReward == 0) xpReward = 10
  let xp = db.fetch(`xp.${message.author.id}`)
  let level = db.fetch(`level.${message.author.id}`) || "0"
  let level2 = level + 1
  let levels = level2 * 1000

  if(!xp){
      db.add(`xp.${message.author.id}`,xpReward)
  }else if(xp){
      db.add(`xp.${message.author.id}`,xpReward)
  }

  if(xp > levels){
      db.add(`level.${message.author.id}`,1)
  message.author.send(`<@${message.author.id}>, subiu pro nivel **${level2}**`)

  }
})

//status
bot.on('ready', () => {
  console.log('Estou online');
  var tabela = [
    { name: 'ultilize t!help para saber meus comandos (em breve)', type: 'PLAYING' },
    { name: 'ultilize t!help para saber meus comandos (em breve)', type: 'WATCHING' }
  ];

  function setStatus() {
    var altstatus = tabela[Math.floor(Math.random() * tabela.length)]
    bot.user.setActivity(altstatus)
  }
  setStatus("online")
  setInterval(() => setStatus(), 5000)
})


client.login(process.env.TOKEN); //Ligando o Bot caso ele consiga acessar o token