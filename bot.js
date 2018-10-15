const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
      }
});



client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send("**تم ارسال الرابط برسالة خاصة**")

message.author.send(`**مدة الرابط : يـوم
عدد استخدامات الرابط : 100**`)


    }
});



client.on('message' , message => {
  if(message.content.startsWith('-Voice')){
         if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
        message.guild.createChannel('Voice Area', 'category').then(cg => {
        message.guild.createChannel('Relax', 'voice').then(cha => {
        message.guild.createChannel('Coffe', 'voice').then(a7aa => {
        message.guild.createChannel('Cronner', 'voice').then(a7aaa=> {
        message.guild.createChannel('Music', 'voice').then(a7aaaa => {
            cha.setParent(cg)
            a7aa.setParent(cg)
            a7aaa.setParent(cg)
            a7aaaa.setParent(cg)

                           message.reply('**I Make Voice Rooms **')
        });})
           })
})
})

}
          });



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
