const words = ['greeting', 'funny', 'beauty', 'winner', 'intelligence', 'amazing', 'reliable', 'experiment', 'melodic', 'delightful', 'vegetation', 'demonstration', 'enormous', 'original', 'perfect', 'safety', 'innovative', 'participant', 'emotional', 'diversity', 'research', 'high-quality', 'educational', 'technological', 'promising', 'captivating', 'cute', 'genuine', 'wonderful', 'originality', 'variety', 'creative', 'efficiency', 'progressive', 'unusual', 'stability', 'interesting', 'scientific', 'modern', 'fantastic', 'unique', 'cultural', 'creative', 'individuality', 'productivity', 'ecological', 'boundless', 'confidence', 'spacious', 'harmonious'];

class Game{
    constructor(words) {
        this.start_btn = document.getElementById('start_btn');
        this.input = document.getElementById('input');
        this.answer_btn = document.getElementById('answer_btn');
        this.exit_btn = document.getElementById('exit_btn');
        this.result = document.getElementById('result');
        this.word = document.getElementById('word');
        this.retry_btn = document.getElementById('retry_btn');

        this.words = this.shuffle(words);
        this.index = 0;
        this.overTime = 0;

        if (this.start_btn === null) throw new Error('Не найден элемент с id "start_btn"');
        if (this.input === null) throw new Error('Не найден элемент с id "input"');
        if (this.answer_btn === null) throw new Error('Не найден элемент с id "answer_btn"');
        if (this.exit_btn === null) throw new Error('Не найден элемент с id "exit_btn"');
        if (this.result === null) throw new Error('Не найден элемент с id "result"');
        if (this.word === null) throw new Error('Не найден элемент с id "word"');
        if (this.retry_btn === null) throw new Error('Не найден элемент с id "retry_btn"');
        
        this.start_btn.addEventListener('click', () => this.printWord());

        this.answer_btn.addEventListener('click', () => {
            clearTimeout(this.timer)
            this.checkWord()
        });

        this.exit_btn.addEventListener('click', () => {
            this.start_btn.classList.remove('hidden')
            this.result.innerHTML = '';
            this.retry_btn.classList.add('hidden')
            this.start_btn.classList.remove('hidden')
            this.input.classList.add('hidden')
            this.answer_btn.classList.add('hidden')
            this.exit_btn.classList.add('hidden')
            this.word.innerHTML = '';
            this.input.value = ''
            clearTimeout(this.timer)
            this.index = 0
            this.words = this.shuffle(words)
        });

        this.retry_btn.addEventListener('click', () => {
            this.word.innerHTML = '';
            this.input.value = ''
            this.index = 0
            this.words = this.shuffle(words)
            this.printWord()
        });
    };

    printWord() {
        this.result.innerHTML = '';
        this.retry_btn.classList.add('hidden')
        this.start_btn.classList.add('hidden')
        this.input.classList.add('hidden')
        this.answer_btn.classList.add('hidden')
        this.exit_btn.classList.add('hidden')
        this.word.innerHTML = this.words[this.index].split('').reverse().join('');
        setTimeout(() => {
            this.showForm();
        }, 2000);
    }

    showForm() {
        this.word.innerHTML = ''
        this.input.classList.remove('hidden')
        this.answer_btn.classList.remove('hidden')
        this.exit_btn.classList.remove('hidden')
        this.startTime = Date.now() 
        this.timer = setTimeout(() => {
            this.checkWord()
        }, 5000);
    }

    checkWord() {
        if (this.input.value !== this.words[this.index]) {
            if (this.index > 0) {
                this.result.innerHTML = `неправильно, ваш рекорд ${this.index}, среднее время ${this.getAverageTime()}, общее время ${this.getTotalTime()}`;
            } else {
                this.result.innerHTML = `неправильно, ваш рекорд ${this.index}`;
            }
            this.word.innerHTML = '';
            this.input.classList.add('hidden')
            this.answer_btn.classList.add('hidden')
            this.exit_btn.classList.add('hidden')
            this.retry_btn.classList.remove('hidden')
            this.index = 0
            this.words = this.shuffle(words)
            return;
        };
        
        if (this.index === words.length -1) {
            this.input.classList.add('hidden')
            this.answer_btn.classList.add('hidden')
            this.exit_btn.classList.add('hidden')
            if (this.index > 0) {
                this.result.innerHTML = `вы выиграли, ваш рекорд ${this.index}, среднее время ${this.getAverageTime()}, общее время ${this.getTotalTime()}`;
            } else {
                this.result.innerHTML = `вы выиграли, ваш рекорд ${this.index}`;
            }
            this.retry_btn.classList.remove('hidden')
            this.index = 0
            this.words = this.shuffle(words)
        } else {
            this.input.value = '';
            this.index++;
            this.word.innerHTML = this.words[this.index];
            this.overTime += Date.now() - this.startTime;
            this.printWord();
        };
    }

    showGameOver() {
        if (this.index > 0) {
            this.result.innerHTML = `неправильно, ваш рекорд ${this.index}, среднее время ${this.getAverageTime()}, общее время ${this.getTotalTime()}`;
        } else {
            this.result.innerHTML = `неправильно, ваш рекорд ${this.index}`;
        }
        this.word.innerHTML = '';
        this.index = 0
        
        this.retry_btn.classList.remove('hidden')
        this.input.classList.add('hidden')
        this.answer_btn.classList.add('hidden')
        this.exit_btn.classList.add('hidden')
        return;
    }

    shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    };

    getAverageTime() {
        return Math.floor(this.overTime / this.index / 1000 * 100) / 100;
    };
    
    getTotalTime() {
        return Math.floor(this.overTime / 1000 * 100) / 100;
    };
};

new Game(words);
