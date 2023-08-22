const str = document.getElementById('str');
const inp = document.getElementById('inp');
const languages = document.getElementById('language');
const errors = document.getElementById('errors');

const messages = [
    {
        FIRST_YOU_HAVE_LOST: `Вы проиграли, ваш рекорд $1`,
        YOU_HAVE_LOST: `Вы проиграли, ваш рекорд $1, среднее время записи слова - $2 секунд, общее время - $3 секунд`,
        YOU_WON: `Слова закончились, вы выиграли, ваш рекорд $1, среднее время записи слова - $2 секунд, общее время - $3 секунд`,
        REMEMBER_WORD: `Запомните слово:`,
        ENTER_WORD: `Введите слово правильно:`,
        FIRST_TIME_IS_UP: `время вышло, ваш рекорд $1`,
        TIME_IS_UP: `время вышло, ваш рекорд $1, среднее время записи слова - $2 секунд, общее время - $3 секунд`,
    },
    {
        FIRST_YOU_HAVE_LOST: `You lost, your record is $1`,
        YOU_HAVE_LOST: `You lost, your record is $1, the average time of writing a word is $2 second, total time is $3 seconds`,
        YOU_WON: `The words are over, you have won, your record is $1, the average time of writing a word is $2 seconds, total time is $3 seconds`,
        REMEMBER_WORD: `Remember the word:`,
        ENTER_WORD: `Enter the word correctly:`,
        FIRST_TIME_IS_UP: `time is up, your record is $1`,
        TIME_IS_UP: `time is up, your record is $1, the average time of writing a word is $2 seconds, total time is $3 seconds`,
    },
]

class Logger {
    constructor(massages) {
      this.massages = massages
    };
  
    info(str, value) {
      let massage = this.get(str)
      if (massage === undefined) return str
  
      if (value === undefined) return massage
  
      value.forEach((value, index) => {
        massage = massage.replace(('$' + (index + 1)), value)
      });
  
      return massage;
    };
  
    get(str) {
      return this.massages[str]
    }
};

if (str === null || inp === null || languages === null || errors === null) {
    console.log('нет одного из элементов');
    } else {
        let logger =  new Logger(messages[languages.selectedIndex]) 
        str.innerHTML = logger.info('YOU_HAVE_LOST', [3, 4, 5])
        languages.addEventListener('input', function() {
            logger = new Logger(messages[languages.selectedIndex]) 
            str.innerHTML = logger.info('YOU_HAVE_LOST', [3, 4, 5])
        });
    };

