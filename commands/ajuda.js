const Discord = require('discord.js');
 
exports.run = async (client, message, argumentos, arg_teste, chat) => {
    const { guild } = message
  const icon = guild.iconURL()
  const comandos = new Discord.MessageEmbed()
  .setColor('BLUE')
  .setThumbnail(icon)
  .setTitle('<:ok:805762601748529173> - Meus Comandos:')
  .setDescription(`Olá ${message.author}, Clique no emoji de acordo com suas funções. \n\n <:pepeDebochado:805762597524602912> <:seta:807219290620821504> **Comandos Gerais.**\n\n <:uiui:805762602873520128> <:seta:807219290620821504> **Comandos Staff.**\n\n <:bob:805762595335438366> <:seta:807219290620821504> **Comandos de Diversão**.`)
  .setTimestamp()
  .setFooter(`Autor do comando: ${message.author.username}`, message.author.displayAvatarURL({Size: 32}))
 
  message.channel.send(comandos).then(msg => {
    msg.react('805762597524602912').then(r => {
      msg.react('805762602873520128').then(r => {
        msg.react('805762595335438366').then(r => {
 
        })
      })
    })
 
    const geralFilter = (reaction, user) => reaction.emoji.name === 'pepeDebochado' && user.id === message.author.id;
      const staffFilter = (reaction, user) => reaction.emoji.name === 'uiui' && user.id === message.author.id;
    const diverFilter = (reaction, user) => reaction.emoji.name === 'bob' && user.id === message.author.id;
 
    const geral = msg.createReactionCollector(geralFilter);
      const staff = msg.createReactionCollector(staffFilter);
    const diver = msg.createReactionCollector(diverFilter);
 
 
    geral.on('collect', r2 => {
      const embed = new Discord.MessageEmbed()
      .setTitle('COMANDOS - GERAIS')
      .setThumbnail(icon)
       .addFields(
        {
          name: '',
          value: ''
        },
        {
        name: '',
        value: ''
        }
      )
      .setColor('GREEN')
      msg.edit(embed);
      })
 
    staff.on('collect', r2 => {
      const embed = new Discord.MessageEmbed()
      .setTitle('COMANDOS - STAFF')
      .setThumbnail(icon)
      .addFields(
        {
          name: '',
          value: ''
        },
        {
        name: '',
        value: ''
        }
      )
      .setColor('PURPLE')
      msg.edit(embed);
    })
 
    diver.on('collect', r2 => {
      const embed = new Discord.MessageEmbed()
      .setTitle('COMANDOS - DIVERSÃO')
      .setThumbnail(icon)
      .addFields(
        {
          name: '',
          value: ''
        },
        {
        name: '',
        value: ''
        }
      )
      .setColor('#1600f7')
      msg.edit(embed);
    })
 
 
 
 
  })
 
 
 
 
 
 
 
 
}