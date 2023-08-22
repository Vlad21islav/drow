const {words, messages} = require('./massages/index')
const Logger = require('./Logger')
const Game = require('./Game')

const LANG = process.env.LANG !== 'rus' && process.env.LANG !== 'eng'
  ? 'rus'
  : process.env.LANG

const logger =  new Logger(messages[LANG]) 
const game = new Game(words[LANG], logger)
game.start()
