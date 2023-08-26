class Game{
    constructor() {
        this.start_btn = document.getElementById('start_btn');
        this.input = document.getElementById('input');
        this.answer_btn = document.getElementById('answer_btn');
        this.exit_btn = document.getElementById('exit_btn');
        this.result = document.getElementById('result');
    }

    bugs() {
        if (this.start_btn === null || this.input === null || this.answer_btn === null || this.exit_btn === null || this.result === null) {
            console.log('нету одной из переменных')
        } else {
            
        }
    }
}