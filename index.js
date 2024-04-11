const words = ['greeting', 'funny', 'beauty', 'winner', 'intelligence', 'amazing', 'reliable', 'experiment', 'melodic', 'delightful', 'vegetation', 'demonstration', 'enormous', 'original', 'perfect', 'safety', 'innovative', 'participant', 'emotional', 'diversity', 'research', 'high-quality', 'educational', 'technological', 'promising', 'captivating', 'cute', 'genuine', 'wonderful', 'originality', 'variety', 'creative', 'efficiency', 'progressive', 'unusual', 'stability', 'interesting', 'scientific', 'modern', 'fantastic', 'unique', 'cultural', 'creative', 'individuality', 'productivity', 'ecological', 'boundless', 'confidence', 'spacious', 'harmonious'];

class Game{
    constructor(options) {
        this.start_btn = document.getElementById('start_btn');
        this.input = document.getElementById('input');
        this.exit_btn = document.getElementById('exit_btn');
        this.result = document.getElementById('result');
        this.word = document.getElementById('word');
        this.retry_btn = document.getElementById('retry_btn');
        this.greeting1 = document.getElementById('greeting1');
        this.textarea = document.getElementById('textarea');
        this.greeting2 = document.getElementById('greeting2');
        this.greeting3 = document.getElementById('greeting3');

        this.words = this.shuffle(options.words);
        this.index = 0;
        this.overTime = 0;
        this.showTime = options.showTime;
        this.waitTime = options.waitTime;

        if (this.start_btn === null) throw new Error('Не найден элемент с id "start_btn"');
        if (this.input === null) throw new Error('Не найден элемент с id "input"');
        if (this.exit_btn === null) throw new Error('Не найден элемент с id "exit_btn"');
        if (this.result === null) throw new Error('Не найден элемент с id "result"');
        if (this.word === null) throw new Error('Не найден элемент с id "word"');
        if (this.retry_btn === null) throw new Error('Не найден элемент с id "retry_btn"');
        if (this.greeting1 === null) throw new Error('Не найден элемент с id "greeting1"');
        if (this.textarea === null) throw new Error('Не найден элемент с id "textarea"');
        if (this.greeting2 === null) throw new Error('Не найден элемент с id "greeting2"');
        if (this.greeting3 === null) throw new Error('Не найден элемент с id "greeting3"');
        
        this.start_btn.addEventListener('click', () => this.printWord());

        this.exit_btn.addEventListener('click', () => {
            this.start_btn.classList.remove('hidden');
            this.result.innerHTML = '';
            this.retry_btn.classList.add('hidden');
            this.start_btn.classList.remove('hidden');
            this.input.classList.add('hidden');
            this.exit_btn.classList.add('hidden');
            this.word.innerHTML = '';
            this.input.value = '';
            clearTimeout(this.timer);
            this.index = 0;
            this.words = this.shuffle(words);
            this.overTime = 0;
        });

        this.input.addEventListener('input', () => {
            if (this.input.value === this.words[this.index]) {
                clearTimeout(this.timer);
                if (this.index === words.length -1) {
                    this.input.classList.add('hidden');
                    this.exit_btn.classList.add('hidden');
                    if (this.index > 0) {
                        this.result.innerHTML = `вы выиграли, ваш рекорд ${this.index}, среднее время ${this.getAverageTime()}, общее время ${this.getTotalTime()}`;
                    } else {
                        this.result.innerHTML = `вы выиграли, ваш рекорд ${this.index}`;
                    };
                    this.retry_btn.classList.remove('hidden');
                    this.index = 0;
                    this.words = this.shuffle(words);
                } else {
                    this.input.value = '';
                    this.index++;
                    this.word.innerHTML = this.words[this.index];
                    this.overTime += Date.now() - this.startTime;
                    this.printWord();
                };
            };
        });

        this.retry_btn.addEventListener('click', () => {
            this.word.innerHTML = '';
            this.input.value = '';
            this.index = 0;
            this.words = this.shuffle(words);
            this.overTime = 0;
            this.printWord();
        });
    };

    printWord() {
        if (this.textarea.value !== '') {
            this.words = this.shuffle(this.textarea.value.split(', '))
        };
        this.greeting1.classList.add('hidden')
        this.greeting2.classList.add('hidden')
        this.greeting3.classList.add('hidden')
        this.textarea.classList.add('hidden')
        this.result.innerHTML = '';
        this.retry_btn.classList.add('hidden');
        this.start_btn.classList.add('hidden');
        this.input.classList.add('hidden');
        this.exit_btn.classList.add('hidden');
        this.word.innerHTML = this.words[this.index].split('').reverse().join('');
        setTimeout(() => {
            this.showForm();
        }, this.showTime);
    };

    showForm() {
        this.word.innerHTML = '';
        this.input.classList.remove('hidden');
        this.setFocusToTextBox();
        this.exit_btn.classList.remove('hidden');
        this.startTime = Date.now() ;
        this.timer = setTimeout(() => {
            this.checkWord();
        }, this.waitTime);
    };

    checkWord() {
        if (this.input.value !== this.words[this.index]) {
            if (this.index > 0) {
                this.result.innerHTML = `неправильно, ваш рекорд ${this.index}, среднее время ${this.getAverageTime()}, общее время ${this.getTotalTime()}`;
            } else {
                this.result.innerHTML = `неправильно, ваш рекорд ${this.index}`;
            };
            this.word.innerHTML = '';
            this.input.classList.add('hidden');
            this.exit_btn.classList.add('hidden');
            this.retry_btn.classList.remove('hidden');
            this.index = 0;
            this.words = this.shuffle(words);
            return;
        };
        
        if (this.index === words.length -1) {
            this.input.classList.add('hidden');
            this.exit_btn.classList.add('hidden');
            if (this.index > 0) {
                this.result.innerHTML = `вы выиграли, ваш рекорд ${this.index}, среднее время ${this.getAverageTime()}, общее время ${this.getTotalTime()}`;
            } else {
                this.result.innerHTML = `вы выиграли, ваш рекорд ${this.index}`;
            };
            this.retry_btn.classList.remove('hidden');
            this.index = 0;
            this.words = this.shuffle(words);
        } else {
            this.input.value = '';
            this.index++;
            this.word.innerHTML = this.words[this.index];
            this.overTime += Date.now() - this.startTime;
            this.printWord();
        };
    };

    showGameOver() {
        if (this.index > 0) {
            this.result.innerHTML = `неправильно, ваш рекорд ${this.index}, среднее время ${this.getAverageTime()}, общее время ${this.getTotalTime()}`;
        } else {
            this.result.innerHTML = `неправильно, ваш рекорд ${this.index}`;
        };
        this.word.innerHTML = '';
        this.index = 0;
        
        this.retry_btn.classList.remove('hidden');
        this.input.classList.add('hidden');
        this.exit_btn.classList.add('hidden');
        return;
    };

    shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    };

    getAverageTime() {
        return Math.floor(this.overTime / this.index / 1000 * 100) / 100;
    };
    
    getTotalTime() {
        return Math.floor(this.overTime / 1000 * 100) / 100;
    };

    setFocusToTextBox() {
        this.input.focus();
    };
};

new Game({
    words,
    waitTime: 20 * 1000,
    showTime: 5 * 1000
 });
