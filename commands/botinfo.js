const Discord = require("discord.js");
 
exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setDescription(`Olá ${message.author}, Abaixo está uma listinha sobre mim:`)
    .setTimestamp()
    .setFooter(`Comando feito por: ${message.author.username}`)
    .addFields(
        {
            name: 'Meu nome e minha #',
            value: `${client.user.tag}`,
            inline: true
        },
        {
            name: '<:sapinhoak45:805762598372376597> Servidores:',
            value: `Estou em **${client.guilds.cache.size}** servidores.`,
            inline: true
        },
        {
            name: '<:uiui:805762602873520128> Canais:',
            value: `Tenho **${client.channels.cache.size}** canais de texto.`,
            inline: true
        },
        {
            name: '<:users:805762597193515018> Usuários:',
            value: `Cuido de **${client.users.cache.size}** usuários.`,
            inline: true
        },
        {
            name: '<:MegaThonk:805762596547330059> Meu ping:',
            value: `**${Math.round(client.ws.ping)}** ms`,
            inline: true
        },
        {
            name: '<:blazeputasso:805762602318692363> Meus criadores:',
            value: 'imortal_comando#3905',
            inline: true
        },
        {
            name: '<:alarm:805762591111643198> Meu servidor:',
            value: 'https://discord.gg/',
            inline: true
        },
    )
    message.channel.send(embed);
}