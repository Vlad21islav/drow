const str1 = document.getElementById('str1');
const str2 = document.getElementById('str2');
const inp = document.getElementById('inp');
const languages = document.getElementById('language');
const errors = document.getElementById('errors');
const btn = document.getElementById('btn');
const language_word = document.getElementById('language_word');
const language_names = document.getElementById('languages');
const won = document.getElementById('won');
const btn_inp = document.getElementById('btn_inp');

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
};

const words = [
    ['приветствие', 'забавный', 'красотка', 'победитель', 'интеллект', 'удивительный', 'надёжный', 'эксперимент', 'мелодичный', 'восхитительный', 'растительность', 'демонстрация', 'громадный', 'оригинальный', 'совершённый', 'безопасность', 'инновационный', 'участник', 'эмоциональный', 'многообразие', 'исследование', 'высококачественный', 'образовательный', 'технологический', 'перспективный', 'увлекательный', 'симпатичный', 'настоящий', 'замечательный', 'оригинальность', 'разнообразие', 'креативный', 'эффективность', 'прогрессивный', 'необычный', 'стабильность', 'интересный', 'научный', 'современный', 'фантастический', 'уникальный', 'культурный', 'творческий', 'индивидуальность', 'продуктивность', 'экологический', 'безграничный', 'уверенность', 'просторный', 'гармоничный'],
    ['greeting', 'funny', 'beauty', 'winner', 'intelligence', 'amazing', 'reliable', 'experiment', 'melodic', 'delightful', 'vegetation', 'demonstration', 'enormous', 'original', 'perfect', 'safety', 'innovative', 'participant', 'emotional', 'diversity', 'research', 'high-quality', 'educational', 'technological', 'promising', 'captivating', 'cute', 'genuine', 'wonderful', 'originality', 'variety', 'creative', 'efficiency', 'progressive', 'unusual', 'stability', 'interesting', 'scientific', 'modern', 'fantastic', 'unique', 'cultural', 'creative', 'individuality', 'productivity', 'ecological', 'boundless', 'confidence', 'spacious', 'harmonious']
];

let shuffled_words = shuffle(words[1])

const messages = [
    {
        ANSWER: `ответить`,
        LANGUGE: `язык`,
        PLAY: `играть`,
        FIRST_YOU_HAVE_LOST: `Вы проиграли, ваш рекорд $1`,
        YOU_HAVE_LOST: `Вы проиграли, ваш рекорд $1, среднее время записи слова - $2 секунд, общее время - $3 секунд`,
        YOU_WON: `Слова закончились, вы выиграли, ваш рекорд $1, среднее время записи слова - $2 секунд, общее время - $3 секунд`,
        REMEMBER_WORD: `Запомните слово:`,
        ENTER_WORD: `Введите слово правильно:`
    },
    {
        ANSWER: `answer`,
        LANGUGE: `language`,
        PLAY: `play`,
        FIRST_YOU_HAVE_LOST: `You lost, your record is $1`,
        YOU_HAVE_LOST: `You lost, your record is $1, the average time of writing a word is $2 second, total time is $3 seconds`,
        YOU_WON: `The words are over, you have won, your record is $1, the average time of writing a word is $2 seconds, total time is $3 seconds`,
        REMEMBER_WORD: `Remember the word:`,
        ENTER_WORD: `Enter the word correctly:`
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
        this.count = 0;
        this.overTime = 0;
        this.startTime = 0;
    }

    start() {
        inp.style.display='none';
        btn_inp.style.display='none';
        languages.addEventListener('input', () => {
            this.logger = new Logger(messages[languages.selectedIndex]); 
            language_word.innerHTML = messages[languages.selectedIndex].LANGUGE;
            btn.value = messages[languages.selectedIndex].PLAY;
            this.shuffled_words = shuffle(words[languages.selectedIndex]);
        });
        btn.addEventListener('click', () => {
            btn.style.display='none';
            language_names.style.display='none';
            this.remember_word();
        });
    };

    remember_word() {
        inp.value = ''
        print(this.logger.info('REMEMBER_WORD'), str1);
        print(this.shuffled_words[this.count].split('').reverse().join(''), str2);
        setTimeout(() => {
            this.enter_word();
        }, 5000);
    };

    enter_word() {
        btn_inp.style.display='';
        btn_inp.value = messages[languages.selectedIndex].ANSWER;
        print('', str1);
        print('', str2);
        inp.style.display='';
        inp.placeholder = this.logger.info('ENTER_WORD');
        btn_inp.addEventListener('click', () => {
            this.enter_word();
        });
        inp.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                this.enter_word();
            };
        });
        setTimeout(() => {
            this.end();
        }, 7000);
    };

    end() {
        btn_inp.style.display='none';
        if (this.count > shuffled_words.length) {
            print(this.logger.info('YOU_WON'), won);
        } else if (inp.value === this.shuffled_words[this.count]) {
            this.count++;
            this.remember_word();
        } else {
            if (this.count === 0) {
                print(this.logger.info('FIRST_YOU_HAVE_LOST', [this.count]), errors);
            } else {
                print(this.logger.info('YOU_HAVE_LOST', [this.count, this.getAverageTime(), this.getTotalTime()]), errors);
            };
        };
        inp.style.display='none';
    };

    getAverageTime() {
        return Math.floor(this.overTime / this.count / 1000 * 100) / 100;
    };

    getTotalTime() {
        return Math.floor(this.overTime / 1000 * 100) / 100;
    };
};

if (str1 === null || str2 === null || inp === null || languages === null || errors === null) {
    console.log('нет одного из элементов');
} else {
    let logger =  new Logger(messages[languages.selectedIndex]); 
    new Game(logger, shuffled_words).start();
};
