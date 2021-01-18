const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» Gods Place BOT Komut Sistemleri')
.setTimestamp()
.addField('» gp!alınacak-rol', 'Kayıt Edilen Kişiden Alınacak Rol')
.addField('» gp!erkekrol', 'Erkek rol Ayarlamak İçin Kullanılır')
.addField('» gp!kayıtçırol', 'Kayıtçının Rolünü Vermek İçin Kullanılır')
.addField('» gp!kız', 'Kız Üyeyi Kaydetmek İçin Kullanılır')
.addField('» gp!erkek ', 'Erkek Üyeyi Kaydetmek İçin Kullanılır')
.addField('» gp!kayıtçı-ver', 'Kayıtçı Rolünü Vermek İçin Kullanılır')
.addField('» gp!kayıtkanal', 'Kayıt Kanalını Ayarlamak İçin Kullanılır')
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
  name: 'yardımkayıt',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};