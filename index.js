const str = document.getElementById('str');
const inp = document.getElementById('inp');
const language = document.getElementById('language');
const errors = document.getElementById('errors');

if (str === null || inp === null || language === null || errors === null) {
    console.log('нет одного из элементов');
    } else {
        str.innerHTML = language.options[language.selectedIndex].text
        language.addEventListener('input', function() {
            str.innerHTML = language.options[language.selectedIndex].text
        });
    };


