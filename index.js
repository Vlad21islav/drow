const words = ['приветствие', 'забавный', 'красотка', 'победитель', 'интеллект', 'удивительный', 'надёжный', 'эксперимент', 'мелодичный', 'восхитительный', 'растительность', 'демонстрация', 'громадный', 'оригинальный', 'совершённый', 'безопасность', 'инновационный', 'участник', 'эмоциональный', 'многообразие', 'исследование', 'высококачественный', 'образовательный', 'технологический', 'перспективный', 'увлекательный', 'симпатичный', 'настоящий', 'замечательный', 'оригинальность', 'разнообразие', 'креативный', 'эффективность', 'прогрессивный', 'необычный', 'стабильность', 'интересный', 'научный', 'современный', 'фантастический', 'уникальный', 'культурный', 'творческий', 'индивидуальность', 'продуктивность', 'экологический', 'безграничный', 'уверенность', 'просторный', 'гармоничный'];

class Game{
    constructor(words) {
        this.start_btn = document.getElementById('start_btn');
        this.input = document.getElementById('input');
        this.answer_btn = document.getElementById('answer_btn');
        this.exit_btn = document.getElementById('exit_btn');
        this.result = document.getElementById('result');
        this.word = document.getElementById('word');

        this.words = words;
        this.index = 0;

        if (this.start_btn === null) throw new Error('Не найден элемент с id "start_btn"');
        if (this.input === null) throw new Error('Не найден элемент с id "input"');
        if (this.answer_btn === null) throw new Error('Не найден элемент с id "answer_btn"');
        if (this.exit_btn === null) throw new Error('Не найден элемент с id "exit_btn"');
        if (this.result === null) throw new Error('Не найден элемент с id "result"');
        if (this.word === null) throw new Error('Не найден элемент с id "word"');
        
        this.start_btn.addEventListener('click', () => this.start());

        this.answer_btn.addEventListener('click', () => {
            if (this.index > words.length) {
                this.result.innerHTML = `вы выиграли, ваш рекорд ${this.index}`;
            } else if (this.input.value === this.words[this.index]) {
                this.input.value = '';
                this.index++;
                this.word.innerHTML = this.words[this.index];
            } else {
                this.result.innerHTML = `неправильно , ваш рекорд ${this.index}`;
            };
        });

        this.exit_btn.addEventListener('click', () => {
            undefined;
        });
    };

    start() {
        this.word.innerHTML = this.words[this.index];
    };
};

new Game(words);
