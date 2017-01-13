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
    if(user && user.name) {
      bot.reply(message, 'What\'\s Up, ' + user.name + '? How are you?');
    }
    else{
      bot.reply(message, 'Hello I\'\m Lovely! How are you?');
    }
  })
})
controller.hears(['call me (.*)', 'my name is (.*)'], 'direct_message,direct_mention,mention', function(bot, message){
  const name = message.match[1];
  controller.storage.users.get(message.user, function(err, user) {
    if(!user) {
      user = {
        id: message.user,
      }
    }
    user.name = name;
    controller.storage.users.save(user, function(err, id) {
      bot.reply(message, 'Pleased to meet you ' + user.name + '. How\'\s your day been?')
    })
  })
})
