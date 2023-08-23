const str1 = document.getElementById('str1');
const str2 = document.getElementById('str2');
const inp = document.getElementById('inp');
const languages = document.getElementById('language');
const errors = document.getElementById('errors');
const btn = document.getElementById('btn');
const language_word = document.getElementById('language_word');
const language_names = document.getElementById('languages');

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

const words = [
    ['приветствие', 'забавный', 'красотка', 'победитель', 'интеллект', 'удивительный', 'надежный', 'эксперимент', 'мелодичный', 'восхитительный', 'растительность', 'демонстрация', 'громадный', 'оригинальный', 'совершенный', 'безопасность', 'инновационный', 'участник', 'эмоциональный', 'многообразие', 'исследование', 'высококачественный', 'образовательный', 'технологический', 'перспективный', 'увлекательный', 'симпатичный', 'настоящий', 'замечательный', 'оригинальность', 'разнообразие', 'креативный', 'эффективность', 'прогрессивный', 'необычный', 'стабильность', 'интересный', 'научный', 'современный', 'фантастический', 'уникальный', 'культурный', 'творческий', 'индивидуальность', 'продуктивность', 'экологический', 'безграничный', 'уверенность', 'просторный', 'гармоничный'],
    ['greeting', 'funny', 'beauty', 'winner', 'intelligence', 'amazing', 'reliable', 'experiment', 'melodic', 'delightful', 'vegetation', 'demonstration', 'enormous', 'original', 'perfect', 'safety', 'innovative', 'participant', 'emotional', 'diversity', 'research', 'high-quality', 'educational', 'technological', 'promising', 'captivating', 'cute', 'genuine', 'wonderful', 'originality', 'variety', 'creative', 'efficiency', 'progressive', 'unusual', 'stability', 'interesting', 'scientific', 'modern', 'fantastic', 'unique', 'cultural', 'creative', 'individuality', 'productivity', 'ecological', 'boundless', 'confidence', 'spacious', 'harmonious']
];

let shuffled_words = shuffle(words[1])

const messages = [
    {
        LANGUGE: `язык`,
        PLAY: `играть`,
        FIRST_YOU_HAVE_LOST: `Вы проиграли, ваш рекорд $1`,
        YOU_HAVE_LOST: `Вы проиграли, ваш рекорд $1, среднее время записи слова - $2 секунд, общее время - $3 секунд`,
        YOU_WON: `Слова закончились, вы выиграли, ваш рекорд $1, среднее время записи слова - $2 секунд, общее время - $3 секунд`,
        REMEMBER_WORD: `Запомните слово:`,
        ENTER_WORD: `Введите слово правильно:`,
        FIRST_TIME_IS_UP: `время вышло, ваш рекорд $1`,
        TIME_IS_UP: `время вышло, ваш рекорд $1, среднее время записи слова - $2 секунд, общее время - $3 секунд`,
    },
    {
        LANGUGE: `language`,
        PLAY: `play`,
        FIRST_YOU_HAVE_LOST: `You lost, your record is $1`,
        YOU_HAVE_LOST: `You lost, your record is $1, the average time of writing a word is $2 second, total time is $3 seconds`,
        YOU_WON: `The words are over, you have won, your record is $1, the average time of writing a word is $2 seconds, total time is $3 seconds`,
        REMEMBER_WORD: `Remember the word:`,
        ENTER_WORD: `Enter the word correctly:`,
        FIRST_TIME_IS_UP: `time is up, your record is $1`,
        TIME_IS_UP: `time is up, your record is $1, the average time of writing a word is $2 seconds, total time is $3 seconds`,
    },
];

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

function print(str, name) {
    if (name === null) {
        console.log(`нету переменной ${name} или эта переменная не id`);
    } else {
        name.innerHTML = str;
    };
};

class Game {
    constructor(logger, shuffled_words) {
        this.logger = logger;
        this.shuffled_words = shuffled_words;
    }

    start() {
        inp.style.display='none';
        languages.addEventListener('input', () => {
            this.logger = new Logger(messages[languages.selectedIndex]); 
            language_word.innerHTML = messages[languages.selectedIndex].LANGUGE;
            btn.value = messages[languages.selectedIndex].PLAY;
            this.shuffled_words = shuffle(words[languages.selectedIndex])
        });
        btn.addEventListener('click', () => {
            this.remember_word();
        });
    };

    remember_word() {
        print(this.logger.info('REMEMBER_WORD'), str1);
        print(this.shuffled_words[0], str2);
        btn.style.display='none';
        language_names.style.display='none';
        setTimeout(() => {
            this.enter_word();
        }, 2000);
    };

    enter_word() {
        print('', str1);
        print('', str2);
        inp.style.display='';
        inp.placeholder = this.logger.info('ENTER_WORD');
        setTimeout(() => {
            this.end()
        }, 7000);
    };

    end() {
        if (inp.value === this.shuffled_words[0]) {
            print(this.logger.info('YOU_WON'), str1) 
        } else {
            print(this.logger.info('YOU_HAVE_LOST'), str1) 
        };
        inp.style.display='none';
    };
};

if (str1 === null || str2 === null || inp === null || languages === null || errors === null) {
    console.log('нет одного из элементов');
} else {
    let logger =  new Logger(messages[languages.selectedIndex]); 
    new Game(logger, shuffled_words).start();
};
