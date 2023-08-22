import { words, messages } from './massages/index'
import Logger from './Logger'
import Game from './Game'

const LANG = process.env.LANG !== 'rus' && process.env.LANG !== 'eng'
  ? 'rus'
  : process.env.LANG

const logger =  new Logger(messages[LANG]) 
const game = new Game(words[LANG], logger)
game.start()
