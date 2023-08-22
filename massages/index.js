words = {
    rus: ['приветствие', 'забавный', 'красотка', 'победитель', 'интеллект', 'удивительный', 'надежный', 'эксперимент', 'мелодичный', 'восхитительный', 'растительность', 'демонстрация', 'громадный', 'оригинальный', 'совершенный', 'безопасность', 'инновационный', 'участник', 'эмоциональный', 'многообразие', 'исследование', 'высококачественный', 'образовательный', 'технологический', 'перспективный', 'увлекательный', 'симпатичный', 'настоящий', 'замечательный', 'оригинальность', 'разнообразие', 'креативный', 'эффективность', 'прогрессивный', 'необычный', 'стабильность', 'интересный', 'научный', 'современный', 'фантастический', 'уникальный', 'культурный', 'творческий', 'индивидуальность', 'продуктивность', 'экологический', 'безграничный', 'уверенность', 'просторный', 'гармоничный'],
    eng: ['greeting ', 'funny ', 'beauty ', 'winner ', 'intelligence ', 'amazing ', 'reliable ', 'experiment ', 'melodic ', 'delightful ', 'vegetation ', 'demonstration ', 'enormous ', 'original ', 'perfect ', 'safety ', 'innovative ', 'participant ', 'emotional ', 'diversity ', 'research ', 'high-quality ', 'educational ', 'technological ', 'promising ', 'captivating ', 'cute ', 'genuine ', 'wonderful ', 'originality ', 'variety ', 'creative ', 'efficiency ', 'progressive ', 'unusual ', 'stability ', 'interesting ', 'scientific ', 'modern ', 'fantastic ', 'unique ', 'cultural ', 'creative ', 'individuality ', 'productivity ', 'ecological ', 'boundless ', 'confidence ', 'spacious ', 'harmonious']
};

messages = {
    rus: {
        FIRST_YOU_HAVE_LOST: `Вы проиграли, ваш рекорд $1`,
        YOU_HAVE_LOST: `Вы проиграли, ваш рекорд $1, среднее время записи слова - $2 секунд, общее время - $3 секунд`,
        YOU_WON: `Слова закончились, вы выиграли, ваш рекорд $1, среднее время записи слова - $2 секунд, общее время - $3 секунд`,
        REMEMBER_WORD: `Запомните слово:`,
        ENTER_WORD: `Введите слово правильно:`,
        FIRST_TIME_IS_UP: `время вышло, ваш рекорд $1`,
        TIME_IS_UP: `время вышло, ваш рекорд $1, среднее время записи слова - $2 секунд, общее время - $3 секунд`,
    },
    eng: {
        FIRST_YOU_HAVE_LOST: `You lost, your record is $1`,
        YOU_HAVE_LOST: `You lost, your record is $1, the average time of writing a word is $2 second, total time is $3 seconds`,
        YOU_WON: `The words are over, you have won, your record is $1, the average time of writing a word is $2 seconds, total time is $3 seconds`,
        REMEMBER_WORD: `Remember the word:`,
        ENTER_WORD: `Enter the word correctly:`,
        FIRST_TIME_IS_UP: `time is up, your record is $1`,
        TIME_IS_UP: `time is up, your record is $1, the average time of writing a word is $2 seconds, total time is $3 seconds`,
    },
}

module.exports = {words, messages};
