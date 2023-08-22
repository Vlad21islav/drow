'use strict';
const readline = require('node:readline');

class Game {
  constructor(words, logger) {
    this.logger = logger
    this.words = this.shuffleWords(words);
    this.overTime = 0;
    this.index = 0;
    this.timeoutId;
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: '──> '
    });
  };

  start() {
    this.rl.on('line', (line) => {
      clearTimeout(this.timeoutId);
      if (this.index < this.words.length - 1) {
        if (line === this.words[this.index]) {
          this.overTime += Date.now() - this.startTime;
          this.index++;
          this.next();
        } else {
          console.clear()
          if (this.index === 0) {
            this.logger.info('FIRST_YOU_HAVE_LOST', this.getTotalResult());
          } else {
            this.logger.info('YOU_HAVE_LOST', this.resultMessageParams());
          };
          process.exit(0);
        };
      } else {
        console.clear();
        this.index++;
        this.logger.info('YOU_WON', this.resultMessageParams());
        process.exit(0);
      };
    });
    this.next();
  };

  next() {
    console.clear();
    this.logger.info('REMEMBER_WORD')
    console.log(this.words[this.index].split('').reverse().join(''));
    setTimeout(() => {
      console.clear();
      this.logger.info('ENTER_WORD')
      this.rl.prompt();
      this.startTime = Date.now() 
      this.timeoutId = setTimeout(() => {
        console.clear();
        if (this.index === 0) {
          this.logger.info('FIRST_TIME_IS_UP', this.getTotalResult()); 
        } else {
          this.logger.info('TIME_IS_UP', this.resultMessageParams());
        };
        process.exit(0);
      }, 5000);
    }, 3000);
  };

  shuffleWords(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    };
    return array;
  };

  getAverageTime() {
    return Math.floor(this.overTime / this.index / 1000 * 100) / 100;
  };

  getTotalTime() {
    return Math.floor(this.overTime / 1000 * 100) / 100;
  };

  getTotalResult() {
    return [this.index]
  };

  resultMessageParams() {
    return [this.index, this.getAverageTime(), this.getTotalTime()]
  };
};

module.exports = Game;
