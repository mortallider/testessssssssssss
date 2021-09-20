const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    let user = message.author.username
  if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.reply(
      "🚨 | Você não tem permissão para limpar mensagens, sorry."
    );
    
  const deleteCount = parseInt(args[0], 10);
  if (!deleteCount || deleteCount < 1 || deleteCount > 99)
    return message.reply(
        "🚨 | forneça um número de até **99 mensagens** a serem excluídas."
      );

  const fetched = await message.channel.messages.fetch({
    limit: deleteCount + 1
  });
  message.channel.bulkDelete(fetched); {
      let embed = new Discord.MessageEmbed()
      .setDescription(`**♻️ O chat foi Limpo.**`)
      .setColor('BLUE')
      .setTitle('`CLEAR`')
      .setThumbnail('https://imgur.com/Qxc4Lcr.gif')
      .setFooter(`• Faxineiro: ${message.author.username}`, message.author.displayAvatarURL({format: "png"}));
      await message.channel.send(embed); 
  }
};