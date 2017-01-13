/*eslint no-console: 'off'*/
/* eslint no-unused-vars: 'off'*/
if (!process.env.token) {
  console.log('Error: Specify token in environment');
  process.exit();
}

var Botkit = require('botkit');

var controller = Botkit.slackbot({
  debug: true,
})

var bot = controller.spawn({
  token: process.env.token
}).startRTM();

controller.hears(['hello', 'hi'], 'direct_message,direct_mention,mention', function(bot,message){
  controller.storage.users.get(message.user, function(err, user) {
    bot.reply(message, 'Hello I\'\m Lovely! How are you?');
    }
  )
})
