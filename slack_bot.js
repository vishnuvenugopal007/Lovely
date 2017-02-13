/* eslint no-console: 'off' */
/* eslint no-unused-vars: 'off'*/
const Botkit = require('botkit');
var controller = Botkit.slackbot({
  debug: false,
})

var bot = controller.spawn({
  token: process.env.token,
}).startRTM();


controller.hears(['hello', 'hey', 'what\'s up'], 'direct_message,direct_mention,mention', function(bot,message){
    console.log('HERE: ' + JSON.stringify(message))
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
  console.log('HERE: ' + JSON.stringify(message))
  bot.api.reactions.add({
    timestamp: message.ts,
    channel: message.channel,
    name: 'ok_hand::skin-tone-5',
  })
  bot.reply(message, 'As Tony the Tiger would say, that\'s GRRRRREAT (like frosted flakes). If you ever need a reminder or some advice, just let me know!')
})

controller.hears(['bad', 'not well', 'sad'], 'direct_message,direct_mention,mention', function(bot, message){
  console.log('HERE: ' + JSON.stringify(message))
  bot.api.reactions.add({
    timestamp: message.ts,
    channel: message.channel,
    name: 'hushed',
  })
  bot.reply(message, 'Oh no, what\'s wrong? I\'m here if you want to talk about anything.You can ask me for reminders or advice if you\'re feeling down too.')
})
})

controller.hears(['alright', 'fine', 'ok'], 'direct_message,direct_mention,mention', function(bot,message){
  console.log('HERE: ' + JSON.stringify(message))
  bot.api.reactions.add({
    timestamp: message.ts,
    channel: message.channel,
    name: 'thinking_face',
  })
  bot.reply(message, 'Hmmm...you sure? Is there anything you want to talk about?')
})

controller.hears(['Can you help me?', 'help', 'help me!'], 'direct_message,direct_mention, mention', function(bot, message){
  console.log('HERE: ' + JSON.stringify(message))
  bot.api.reactions.add({
    timestamp: message.ts,
    channel: message.channel,
    name: 'ok_hand::skin-tone-5',
  })
  bot.api.reactions.add({
    timestamp: message.ts,
    channel: message.channel,
    name: 'thumbsup::skin-tone-5',
  })

  bot.reply(message, 'Sure! What do you need?')
})

//Who are you?

controller.hears(['What\'s your name', 'Who are you','What\'s your purpose', 'What do you do'],'direct_message,direct_mention,mention', function(bot, message){
    console.log('HERE: ' + JSON.stringify(message))
  bot.api.reactions.add({
    timestamp: message.ts,
    channel: message.channel,
    name: 'hugging_face',
  })
  bot.reply(message, 'My name is Lovely, and my job is to help you remember to love yourself :heart:')
  setTimeout(function() {
    bot.reply(message, 'I can also send you some :fire: music.')
  }, 2000)
  setTimeout(function() {
    bot.reply(message, 'Lastly, if you need a lovely reminder or some advice, just let me know by saying `I need a reminder` or `I need some advice`')
  }, 3000)
})

//Reminder & Advice functionality

const reminders = [
  'You are loved and you are love. :heart:',
  '< https://www.youtube.com/watch?v=0j8frgmdvgc | This> exists, so things can\'t be that bad...',
  'How many different things had to happen for you to be here right now? Seems like a lot more than just happy coincidences :)',
  'Watch <https://www.youtube.com/watch?v=y6Sxv-sUYtM | this video> and let me know if you need anything else :)',
  'Check <https://www.youtube.com/watch?v=09R8_2nJtjg | this> out ;)',
  'You are dope AF. No one else knows you like you do, so if they can\'t see the wave, it\'s their own loss.',
  'Get up and < https://www.youtube.com/watch?v=C_9HNEyLa4U | groove> for a minute. It might help your mood ;)',
  'You are loved and you are love. No one can take that away from you, no matter what they say or do. Find your way through by looking inside you, I promise it gets better if you focus on working through all the pain that these lames put inside you.'
]

//const randomReminder = reminders[Math.floor(Math.random() * reminders.length)]

const advice = [
  'Will this matter six months from now?',
  'There\'s a lot that can break your focus, but ask yourself: what would Beyonce do?',
  'Stituations are rarely as extreme and absolute as they seem. Perhaps this is more grey than black and white?',
  'Stay low and build. Let your success be your revenge.',
  'Is there another way to look at the situation?',
  'Are you being fair and compassionate with yourself, the way a close friend would be?',
  'How would a third party see your current situation? Would they be critical or kind? Caring or harsh?',
]

//const randomAdvice = advice[Math.floor(Math.random() * advice.length)]

controller.hears([ 'I need a reminder', 'Remind me of my worth'], 'direct_message,direct_mention,mention', (bot,message) => {
  console.log('HERE: ' +JSON.stringify(message))
  bot.api.reactions.add({
    timestamp: message.ts,
    channel: message.channel,
    name: 'heartpulse'
  })

  const randomReminder = reminders[Math.floor(Math.random() * reminders.length)]

  bot.reply(message, randomReminder)
})

controller.hears([ 'I need some advice' ], 'direct_message,direct_mention,mention', (bot,message) => {
  bot.api.reactions.add({
    timestamp: message.ts,
    channel: message.channel,
    name: 'thinking_face'
  })
    setTimeout(function () {
      bot.api.reactions.add({
        timestamp: message.ts,
        channel: message.channel,
        name: 'bulb'
    }), 2000})

  const randomAdvice = advice[Math.floor(Math.random() * advice.length)]

  setTimeout(function() {
    bot.reply(message, randomAdvice)
  }, 3000)
})

//Music suggestion functionality

controller.hears(['I need some music', 'Can you send me some music?'], 'direct_message,direct_mention,mention', function(bot, message){
    console.log('HERE: ' + JSON.stringify(message))
  bot.api.reactions.add({
    timestamp: message.ts,
    channel: message.channel,
    name: 'ok_hand::skin-tone-5',
  })
  bot.api.reactions.add({
    timestamp: message.ts,
    channel: message.channel,
    name: 'thinking_face'
  })
  bot.reply(message, 'You know I got you! What kind of music are you looking for?')

})

//Hip-Hop & Rap

controller.hears(['hip-hop', 'hip hop', 'rap'], 'direct_message,direct_mention,mention', function(bot,message){
  console.log('HERE: ' + JSON.stringify(message))
  bot.api.reactions.add({
    timestamp: message.ts,
    channel: message.channel,
    name: 'thinking_face'
    })
  setTimeout( function() {
    bot.api.reactions.add({
    timestamp: message.ts,
    channel: message.channel,
    name: 'bulb'
  })}, 1000);
  setTimeout(function() {
    bot.reply(message, 'I got just the thing, check out this playlist: <https://www.youtube.com/playlist?list=PLpHBQZMQf9d5g_gvLsQtvENgahwd5vdwX | Lovely Hip hop>')
  }, 3000)
})

//Pop & Top 40 & Radio

controller.hears(['pop', 'top 40', 'radio'], 'direct_message,direct_mention,mention', function(bot, message){
  console.log('HERE: ' + JSON.stringify(message))
  bot.api.reactions.add({
    timestamp: message.ts,
    channel: message.channel,
    name: 'thinking_face'
    })
  setTimeout( function() {
    bot.api.reactions.add({
    timestamp: message.ts,
    channel: message.channel,
    name: 'bulb'
  })}, 1000);

  setTimeout(function() {
    bot.reply(message, 'Ok, let me know what you think of this: <https://www.youtube.com/playlist?list=PLpHBQZMQf9d7CB50Q450W6G-vm4fto88k | Lovely Pop>')
  }, 3000)
})


//Poetry & Slam Poetry

controller.hears(['spoken word', 'poetry', 'slam poetry', 'poems'], 'direct_message,direct_mention,mention', function(bot, message){
  console.log('HERE: ' + JSON.stringify(message))
  bot.api.reactions.add({
    timestamp: message.ts,
    channel: message.channel,
    name: 'thinking_face'
    })
  setTimeout( function() {
    bot.api.reactions.add({
    timestamp: message.ts,
    channel: message.channel,
    name: 'bulb'
  })}, 1000);

  setTimeout(function() {
    bot.reply(message, 'Yaaaaaas. Maybe this will get you snapping : <https://www.youtube.com/playlist?list=PLpHBQZMQf9d7t123LqvNGhXcgr7yGlCJd | Lovely Spoken Word>')
  }, 3000)
})

//R&B/Soul

controller.hears(['R & B', 'Rhythm and Blues', 'Soul', 'Neo-Soul'], 'direct_message,direct_mention,mention', function(bot, message) {
  console.log('HERE: ' + JSON.stringify(message))
  bot.api.reactions.add({
    timestamp: message.ts,
    channel: message.channel,
    name: 'thinking_face'
    })
  setTimeout( function() {
    bot.api.reactions.add({
    timestamp: message.ts,
    channel: message.channel,
    name: 'bulb'
  })}, 1000);

  setTimeout(function() {
    bot.reply(message, 'Oooh I see you. Maybe this will help you find your own smooth operator: <https://www.youtube.com/playlist?list=PLpHBQZMQf9d5CH-upXX6J9lrzAcx_WSKX | Lovely R&B/Soul>')
  }, 3000)
})
//electronic

controller.hears(['EDM', 'Electronic', 'Dance'], 'direct_message,direct_mention,mention', function(bot, message) {
  console.log('HERE: ' +JSON.stringify(message))
  bot.api.reactions.add({
    timestamp: message.ts,
    channel: message.channel,
    name: 'thinking_face'
    })
  setTimeout( function() {
    bot.api.reactions.add({
    timestamp: message.ts,
    channel: message.channel,
    name: 'bulb'
  })}, 1000);

  setTimeout(function() {
  bot.reply(message, 'Get lost in this playlist: <https://www.youtube.com/playlist?list=PLpHBQZMQf9d7p9w5wBjA6Fpn87qpEDB4k | Lovely Electronica>')
  }, 3000)
})
