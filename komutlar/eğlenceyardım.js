const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» Gods Place BOT Eğlence Menüsü')
.setTimestamp()
.addField('» gp!ağla','Botu Ağlatmaya Yarar')
.addField('» gp!ilginçbilgi', 'Bot İlginç Bilgiler Verir')
.addField('» gp!renkara','Bota Yazdığınız Renk Kodunun Linkini Ve Fotoğrafını Verir')
.addField('» gp!sorucevap','Bota Sorulan Soruya Cevap Verir')
.addField('» gp!sayıtahmin','Bot Uğurlu Sayını Tahmin Eder')
.addField('» gp!kralol','Kral Ol Komudunu Kullanarak Kral Olabilirsiniz')
.addField('» gp!düello','Arkadaşlarınıza Düello Gönderebilirsiniz')
.addField('» gp!zarat','Bu Kod İle Zar Atabilirsiniz')
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
  name: 'eğlence',
  description: 'Tüm komutları gösterir.',
  usage: 'eğlence'
};