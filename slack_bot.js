/* eslint no-console: 'off' */
/* eslint no-unused-vars: 'off'*/
const db = require('./Database')

const Botkit = require('botkit');
var controller = Botkit.slackbot({
  debug: false,
})

var bot = controller.spawn({
  token: process.env.token,
}).startRTM();

const getRandom = (responses) => {
  const response = responses[Math.floor(Math.random() * responses.length)]
  return response.response
}

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

  const name = message.match[1];

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
<<<<<<< HEAD
  bot.api.reactions.add({
    timestamp: message.ts,
    channel: message.channel,
    name: 'ok_hand',
  })
})

controller.hears(['bad', 'not great', 'sad'], 'direct_message,direct_mention,mention', function(bot, message){
  bot.api.reactions.add({
    timestamp: message.ts,
    channel: message.channel,
    name: 'slightly-frowning-face',
  })
=======
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

controller.hears(['alright', 'fine' ], 'direct_message,direct_mention,mention', function(bot,message){
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

//Recipe functionality

controller.hears([ 'Give me a recipe!', 'Can I get a recipe?', 'What should I cook?', 'Recipe' ], 'direct_message,direct_mention,mention', (bot,message) => {
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


    db.select('recipe as response').from('recipes')
      .then(getRandom)
      .then(function(randomRecipe) {
        setTimeout(function() {
          bot.reply(message, randomRecipe)
        }, 3000)
      })

})

//Food tip functionality

controller.hears([ 'Give me a food tip!', 'Can I get a food tip?', 'Food tip' ], 'direct_message,direct_mention,mention', (bot,message) => {
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

    db.select('tip as response').from('foodtips')
      .then(getRandom)
      .then(function(randomTip) {
        setTimeout(function() {
          bot.reply(message, randomTip)
        }, 3000)
      })
})

//Reminder & Advice functionality

controller.hears([ 'I need a reminder', 'Remind me of my worth'], 'direct_message,direct_mention,mention', (bot,message) => {
  console.log('HERE: ' +JSON.stringify(message))
  bot.api.reactions.add({
    timestamp: message.ts,
    channel: message.channel,
    name: 'heartpulse'
  })

  db.select('reminders as response').from('reminders')
    .then(getRandom)
    .then(function(randomReminder) {
      bot.reply(message, randomReminder)
    })
})

controller.hears([ 'I need some advice', 'I need advice', 'Break me off some knowledge' ], 'direct_message,direct_mention,mention', (bot,message) => {
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

  db.select('advice as response').from('advice')
    .then(getRandom)
    .then(function(randomAdvice) {
      setTimeout(function() {
        bot.reply(message, randomAdvice)
      }, 3000)
    })
})

//Inspiration functionality

controller.hears(['I need some inspiration', 'Inspire me', 'Show me the light'], 'direct_message,direct_mention, mention', function(bot, message){
  bot.api.reactions.add({
    timestamp: message.ts,
    channel: message.channel,
    name:'thinking_face'
  })
  setTimeout(function () {
    bot.api.reactions.add({
      timestamp: message.ts,
      channel: message.channel,
      name: 'bulb'
    }), 2000 })

    db.select('inspiration as response').from('inspiration')
      .then(getRandom)
      .then(function(randomInspiration) {
        setTimeout(function() {
          bot.reply(message, randomInspiration)
        }, 3000)
      })
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
  setTimeout(function() {
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
>>>>>>> 394c28c0403c0c52593862e0070a05ec66d2b482
})

//Summer sounds

controller.hears(['Summer', 'Summer Sounds', 'Summer Music'], 'direct_message,direct_mention,mention', function(bot, message){
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
    })
  }, 1000);

  setTimeout(function() {
    bot.reply(message, 'Get the party started or just vibe out to this one: < https://www.youtube.com/playlist?list=PLpHBQZMQf9d7e74c949da_8NfN8HAchUz | Lovely Future Sounds >')
  }, 3000)
})

//Feel good
controller.hears(['I want to smile', 'Happy Music', 'Summer Music'], 'direct_message,direct_mention,mention', function(bot, message){
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
    })
  }, 1000);

  setTimeout(function() {
    bot.reply(message, 'Enjoy :) < https://www.youtube.com/playlist?list=PLpHBQZMQf9d6aPARZtoepzNeKrfGLhS9K | Lovely Feel Good >')
  }, 3000)
})
