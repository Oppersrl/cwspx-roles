const Nuggies = require("nuggies");
const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
    const options = new Nuggies.dropdownroles().addrole({
        label: 'English',
        role: '1007648120877883544',
        emoji: '1007651140596412528'
    }).addrole({
        label: 'Portuguese',
        role: '71007648398331084881',
        emoji: '1007651704164069437'
    }).addrole({
        label: 'Spanish',
        role: '1007648287001682041',
        emoji: '1007651925451354222'
    }).addrole({
        label: 'Other',
        role: '1007649491505119262',
        emoji: '1007652009081589811'
    });

    Nuggies.dropdownroles.create({
        message: message,
        role: options, /*dropdownroles constructor*/ 
        content: new Discord.MessageEmbed().setTitle('Click to get role').setDescription(':)').setColor("BLUE"),
        channelID: message.channel.id
    });
}

module.exports.config = {
    name: "dd",
    aliases: []
}