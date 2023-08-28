const words = ['приветствие', 'забавный', 'красотка', 'победитель', 'интеллект', 'удивительный', 'надёжный', 'эксперимент', 'мелодичный', 'восхитительный', 'растительность', 'демонстрация', 'громадный', 'оригинальный', 'совершённый', 'безопасность', 'инновационный', 'участник', 'эмоциональный', 'многообразие', 'исследование', 'высококачественный', 'образовательный', 'технологический', 'перспективный', 'увлекательный', 'симпатичный', 'настоящий', 'замечательный', 'оригинальность', 'разнообразие', 'креативный', 'эффективность', 'прогрессивный', 'необычный', 'стабильность', 'интересный', 'научный', 'современный', 'фантастический', 'уникальный', 'культурный', 'творческий', 'индивидуальность', 'продуктивность', 'экологический', 'безграничный', 'уверенность', 'просторный', 'гармоничный'];

class Game{
    constructor(words) {
        this.start_btn = document.getElementById('start_btn');
        this.input = document.getElementById('input');
        this.answer_btn = document.getElementById('answer_btn');
        this.exit_btn = document.getElementById('exit_btn');
        this.result = document.getElementById('result');
        this.word = document.getElementById('words');

        this.words = words;

        if (this.start_btn === null) throw new Error('Не найден элемент с id "start_btn"');
        if (this.input === null) throw new Error('Не найден элемент с id "input"');
        if (this.answer_btn === null) throw new Error('Не найден элемент с id "answer_btn"');
        if (this.exit_btn === null) throw new Error('Не найден элемент с id "exit_btn"');
        if (this.result === null) throw new Error('Не найден элемент с id "result"');
        if (this.words === null) throw new Error('Не найден элемент с id "words"');
        
        this.start_btn.addEventListener('click', this.start);

        this.exit_btn.addEventListener('click', () => {
            undefined;
        });
    };

    start() {
        this.word.innerHTML = this.words[0];

        this.answer_btn.addEventListener('click', () => {
            if (this.input.value === this.words[0]) {
                this.result.innerHTML = 'правильно'
            } else {
                this.result.innerHTML = 'неправильно'
            };
        });
    };
};

new Game(words);
