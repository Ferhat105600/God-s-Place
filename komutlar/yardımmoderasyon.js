const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» Gods Place BOT Moderasyon Menüsü')
.setTimestamp()
.addField('» gp!ban', 'Etiketlediğiniz kişiyi banlar.')
.addField('» gp!kick', 'Etiketlediğiniz Kişiyi Sunucudan Atar')
.addField('» gp!oylama','Oylama Başlatır')
.addField('» gp!rolver','Etiketlediğiniz kişiye istediğiniz rolü verir')
.addField('» gp!sil','Verdiğiniz Sayı Kadar Mesaj Siler')
.addField('» gp!avatar','Avatarınızı Büyük Bir Şekilde Verir')
.addField('» gp!yavaşmod','Kanalda Yavaş Mod Ayarlamaya Yardımcı Olur')
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
  name: 'moderasyon',
  description: 'Tüm komutları gösterir.',
  usage: 'moderasyon'
};