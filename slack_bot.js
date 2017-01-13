/*eslint no-console: 'off'*/
/* eslint no-unused-vars: 'off'*/
if (!process.env.token) {
  console.log('Error: Specify token in environment');
  process.exit();
}

var Botkit = require('botkit');

var controller = Botkit.slackbot({
  debug: true,
});

var bot = controller.spawn({
  token: process.env.token
}).startRTM();
