const words = ['приветствие', 'забавный', 'красотка', 'победитель', 'интеллект', 'удивительный', 'надёжный', 'эксперимент', 'мелодичный', 'восхитительный', 'растительность', 'демонстрация', 'громадный', 'оригинальный', 'совершённый', 'безопасность', 'инновационный', 'участник', 'эмоциональный', 'многообразие', 'исследование', 'высококачественный', 'образовательный', 'технологический', 'перспективный', 'увлекательный', 'симпатичный', 'настоящий', 'замечательный', 'оригинальность', 'разнообразие', 'креативный', 'эффективность', 'прогрессивный', 'необычный', 'стабильность', 'интересный', 'научный', 'современный', 'фантастический', 'уникальный', 'культурный', 'творческий', 'индивидуальность', 'продуктивность', 'экологический', 'безграничный', 'уверенность', 'просторный', 'гармоничный'];

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

        if (this.start_btn === null) throw new Error('Не найден элемент с id "start_btn"');
        if (this.input === null) throw new Error('Не найден элемент с id "input"');
        if (this.answer_btn === null) throw new Error('Не найден элемент с id "answer_btn"');
        if (this.exit_btn === null) throw new Error('Не найден элемент с id "exit_btn"');
        if (this.result === null) throw new Error('Не найден элемент с id "result"');
        if (this.word === null) throw new Error('Не найден элемент с id "word"');
        if (this.retry_btn === null) throw new Error('Не найден элемент с id "retry_btn"');
        
        this.start_btn.addEventListener('click', () => this.print_word());

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
            this.print_word()
        });
    };

    print_word() {
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
        this.timer = setTimeout(() => {
            this.checkWord()
        }, 5000);
    }

    checkWord() {
        if (this.input.value !== this.words[this.index]) {
            this.result.innerHTML = `неправильно, ваш рекорд ${this.index}`;
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
            this.result.innerHTML = `вы выиграли, ваш рекорд ${this.index + 1}`;
            this.retry_btn.classList.remove('hidden')
            this.index = 0
            this.words = this.shuffle(words)
        } else {
            this.input.value = '';
            this.index++;
            this.word.innerHTML = this.words[this.index];
            this.print_word();
        };
    }

    showGameOver() {
        this.result.innerHTML = `неправильно, ваш рекорд ${this.index}`;
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
};

new Game(words);
