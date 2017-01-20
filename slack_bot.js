/* eslint no-console: 'off' */
/* eslint no-unused-vars: 'off'*/

const Botkit = require('botkit');
var controller = Botkit.slackbot({
  debug: true,
})

var bot = controller.spawn({
  token: process.env.token
}).startRTM();

controller.hears(['hello', 'hi', 'hey'], 'direct_message,direct_mention,mention', function(bot,message){
  bot.api.reactions.add({
    timestamp: message.ts,
    channel: message.channel,
    name: 'robot_face',
  })

  controller.storage.users.get(message.user, function(err, user) {
    if(user && user.name) {
      bot.reply(message, 'What\'s Up, ' + user.name + '? How are you?');
    }
    else{
      bot.reply(message, 'Hello I\'m Lovely! How are you?');
    }
})
controller.hears(['call me (.*)', 'my name is (.*)', 'I\'m (.*)'], 'direct_message,direct_mention,mention', function(bot, message){
  //Got response null {"ok":true,"channel":"D3PRE3V6E","ts":"1484349146.000035","message":{"type":"message","user":"U3P4C8G2C","text":"Pleased to meet you john. How's your day been?","bot_id":"B3P4C8FL0","ts":"1484349146.000035"}}
  //{"type":"message","channel":"D3PRE3V6E","user":"U31L7F7UH","text":"my name is Vishnu","ts":"1484348847.000030","team":"T330K6MHV","event":"direct_message","match":["my name is Vishnu","Vishnu"]}
  console.log('HERE: ' + JSON.stringify(message))
  const name = message.match[1];
  //Stores name in the second array position of message. match[0] is the whole message. match[1] is the name.
  // The message itself is stored in the first position based on my testing using the console.log statement above.
  controller.storage.users.get(message.user, function(err, user) {
    if(!user) {
      user = {
        id: message.user,
      }
    }
    user.name = name;
    controller.storage.users.save(user, function(err, id) {
      bot.reply(message, 'Pleased to meet you ' + user.name + '. How\'s your day been?')
    })
  })
})

controller.hears(['good', 'great', 'loving life'], 'direct_message,direct_mention,mention', function(bot, message){
  bot.api.reactions.add({
    timestamp: message.ts,
    channel: message.channel,
    name: 'ok_hand',
  })
  bot.reply(message, 'As Tony the Tiger would say, that\'s GRRRRREAT (like frosted flakes)')
})

controller.hears(['bad', 'not well', 'sad'], 'direct_message,direct_mention,mention', function(bot, message){
  bot.api.reactions.add({
    timestamp: message.ts,
    channel: message.channel,
    name: 'hushed',
  })
  bot.reply(message, 'Oh no, what\'s wrong? I\'m here if you want to talk')
})
})

controller.hears(['alright', 'fine', 'ok'], 'direct_message,direct_mention,mention', function(bot,message){
  bot.api.reactions.add({
    timestamp: message.ts,
    channel: message.channel,
    name: 'thinking_face',
  })
  bot.reply(message, 'Hmmm...you sure? Is there anything you want to talk about?')  
})

controller.hears(['What\'s your name', 'Who are you','What\'s your purpose', 'What do you do'],'direct_message,direct_mention,mention', function(bot, message){
  bot.api.reactions.add({
    timestamp: message.ts,
    channel: message.channel,
    name: 'hugging_face',
  })
  bot.reply(message, 'My name is Lovely, and my job is to help you remember to love yourself <3')
})
