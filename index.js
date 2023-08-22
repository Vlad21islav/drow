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

if (str === null || inp === null || languages === null || errors === null) {
    console.log('нет одного из элементов');
    } else {
        languages.addEventListener('input', function() {
            str.innerHTML = messages[languages.selectedIndex].FIRST_TIME_IS_UP
        });
    };


