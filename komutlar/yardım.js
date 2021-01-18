const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» Gods Place BOT Komut Sistemleri')
.setTimestamp()
.addField('» gp!moderasyon', 'Moderasyon menüsünü açar')
.addField('» gp!guard', 'Guard Menüsünü açar')
.addField('» gp!eğlence', 'Eğlence Menüsünü açar')
.addField('» gp!yardımkayıt', 'Kayıt menüsünü açar')
.setFooter('© 2020 Gods Place Bot', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};