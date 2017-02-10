/* eslint no-console: 'off' */
/* eslint no-unused-vars: 'off'*/

const Botkit = require('botkit');
var controller = Botkit.slackbot({
  debug: true,
})

var bot = controller.spawn({
  token: process.env.token,
  incoming_webhook: {
    url: 'https://hooks.slack.com/services/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'
    }
}).startRTM();


controller.hears(['hello', 'hey', 'what\'s up'], 'direct_message,direct_mention,mention', function(bot,message){
  bot.api.reactions.add({
    timestamp: message.ts,
    channel: message.channel,
    name: 'robot_face',
  }),

  controller.storage.users.get(message.user, function(err, user) {
    if(user && user.name) {
      bot.reply(message, 'What\'s Up, ' + user.name + '? How are you?');
    }
    else{
      bot.reply(message, 'Hello I\'m Lovely! How are you?');
    }

    bot.reply(message,{
      attachment: {
        'text': 'Do you mind if I send you some love in the mornings?',
        'payload':{
            'buttons': [
              {
                'type': 'submit',
                'title': 'Yes'
              },
              {
                'type' : 'submit',
                'title': 'No'
              }
            ]
          }
        }
    })
})
controller.hears(['call me (.*)', 'my name is (.*)'], 'direct_message,direct_mention,mention', function(bot, message){
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
  bot.reply(message, 'As Tony the Tiger would say, that\'s GRRRRREAT (like frosted flakes).')
})

controller.hears(['bad', 'not well', 'sad'], 'direct_message,direct_mention,mention', function(bot, message){
  bot.api.reactions.add({
    timestamp: message.ts,
    channel: message.channel,
    name: 'hushed',
  })
  bot.reply(message, 'Oh no, what\'s wrong? I\'m here if you want to talk about anything.')
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

controller.hears(['Can you help me?', 'help', 'help me!'], 'direct_message,direct_mention, mention', function(bot, message){
  bot.api.reactions.add({
    timestamp: message.ts,
    channel: message.channel,
    name: '+1' && 'ok_hand'
  })
  bot.reply(message, 'Sure! what do you need?')
})

/*
controller.hears([''], 'direct_message,direct_mention,mention', function(bot,message) {
  bot.api.reactions.add({
    timestamp: message.ts,
    channel: message.channel,
    name: ''
  })
  bot.reply(message, '')
})
*/
controller.hears(['What\'s your name', 'Who are you','What\'s your purpose', 'What do you do'],'direct_message,direct_mention,mention', function(bot, message){
  bot.api.reactions.add({
    timestamp: message.ts,
    channel: message.channel,
    name: 'hugging_face',
  })
  bot.reply(message, 'My name is Lovely, and my job is to help you remember to love yourself <3')
})

//Music suggestion functionality

controller.hears(['I need some music', 'Can you send me some music?'], 'direct_message,direct_mention,mention', function(bot, message){
  bot.api.reactions.add({
    timestamp: message.ts,
    channel: message.channel,
    name: 'thinking_face' & 'bulb'
  })
  bot.reply(message, 'You know I got you! What kind of music are you looking for?')
})

//Hip-Hop & Rap

controller.hears(['hip-hop', 'hip hop', 'rap'], 'direct_message,direct_mention,mention', function(bot,message){
  bot.api.reactions.add({
    timestamp: message.ts,
    channel: message.channel,
    name: 'thinking_face' & 'bulb'
  })
  bot.reply(message, 'For sure, check out this playlist: https://www.youtube.com/playlist?list=PLpHBQZMQf9d5g_gvLsQtvENgahwd5vdwX')
})

//Pop & Top 40 & Radio

controller.hears(['pop', 'top 40', 'radio'], 'direct_message,direct_mention,mention', function(bot, message){
  bot.api.reactions.add({
    timestamp: message.ts,
    channel: message.channel,
    name: 'thinking_face' & 'bulb'
  })
  bot.reply(message, 'Ok, let me know what you think of this: https://www.youtube.com/playlist?list=PLpHBQZMQf9d7CB50Q450W6G-vm4fto88k')
})

//Poetry & Slam Poetry

controller.hears(['spoken word', 'poetry', 'slam poetry', 'poems'], 'direct_message,direct_mention,mention', function(bot, message){
  bot.api.reactions.add({
    timestamp: message.ts,
    channel: message.channel,
    name: 'thinking_face' & 'bulb'
  })
  bot.reply(message, 'Yaaaaaas. Maybe this will get you snapping : https://www.youtube.com/playlist?list=PLpHBQZMQf9d7t123LqvNGhXcgr7yGlCJd')
})

//R&B/Soul

controller.hears(['R & B', 'Rhythm and Blues', 'Soul', 'Neo-Soul'], 'direct_message,direct_mention,mention', function(bot, message) {
  bot.api.reactions.add({
    timestamp: message.ts,
    channel: message.channel,
    name: 'thinking_face' & 'bulb'
  })
  bot.reply(message, 'Oooh I see you. Maybe this will help you find your own smooth operator: https://www.youtube.com/playlist?list=PLpHBQZMQf9d5CH-upXX6J9lrzAcx_WSKX')
})
