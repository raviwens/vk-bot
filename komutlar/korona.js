const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const korona = new Discord.RichEmbed()
      .setColor("#0080FF")
      .setAuthor("∼ Saudade Mudita ∼" , "https://cdn.discordapp.com/attachments/694990915617554482/694992053943402668/m_obBlVh.png")
      .setDescription(`⌘ Korona ⌘

**Korona Nedir?** 
Koronavirüs hastalığı **(COVID-19)** yeni bir virüsten kaynaklanan bulaşıcı bir hastalıktır.
Hastalık **kuru öksürük**, **ateş** ve daha ciddi vakalarda **nefes** almada zorluk gibi semptomlarla birlikte solunum yolu sorununa **(grip gibi)** yol açar.

**Önlemi Nedir?**
Ellerinizi sık sık yıkayarak, yüzünüze dokunmaktan kaçınarak ve kendisini iyi hissetmeyen kişilerle yakın temasta **(1 metre)** bulunmayarak kendinizi koruyabilirsiniz.

**Önemli Not:** Corona virüsü tüm dünyada yayılmaya başladı ve her ne kadar istemesek de ölümlere sebep olabiliyor. Bu sebeple hastanelere acil değilse gidilmesi durduruldu.
**#EVDEKAL**

Sorusu Olanlar İçin Sağlıkcı Arkadaşımızı Buraya Etiketliyorum. Soru Sormak İsteyenler Sağlıkçı Arkadaşımıza Özelden Yazabilirler.`)
      .setTimestamp()
      .setFooter(`${message.author.username} Tarafından İstendi`)
    
    
    const hesap = new Discord.RichEmbed()
      .setColor("#0080FF")
      .setDescription(`⌘ <@669598135999528971> ⌘`)
       message.channel.send(korona)
       message.channel.send(hesap)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'korona',
  description: 'Korona Hakkında Bilgi Verir.',
  usage: 'korona'
};