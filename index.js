class Game{
    constructor() {
        this.start_btn = document.getElementById('start_btn');
        this.input = document.getElementById('input');
        this.answer_btn = document.getElementById('answer_btn');
        this.exit_btn = document.getElementById('exit_btn');
        this.result = document.getElementById('result');
        this.words = document.getElementById('words');

        if (this.start_btn === null) throw new Error('Не найден элемент с id "start_btn"')
        if (this.input === null) throw new Error('Не найден элемент с id "input"')
        if (this.answer_btn === null) throw new Error('Не найден элемент с id "answer_btn"')
        if (this.exit_btn === null) throw new Error('Не найден элемент с id "exit_btn"')
        if (this.result === null) throw new Error('Не найден элемент с id "result"')
        if (this.words === null) throw new Error('Не найден элемент с id "words"')
        
        this.start_btn.addEventListener('click', () => {
            undefined
        });
    };
};
