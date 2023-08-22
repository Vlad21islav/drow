const str = document.getElementById('str');
const inp = document.getElementById('inp');
const languages = document.getElementById('language');
const errors = document.getElementById('errors');

if (str === null || inp === null || language === null || errors === null) {
    console.log('нет одного из элементов');
    } else {
        str.innerHTML = languages.options[languages.selectedIndex].text
        languages.addEventListener('input', function() {
            str.innerHTML = languages.options[languages.selectedIndex].text
        });
    };


