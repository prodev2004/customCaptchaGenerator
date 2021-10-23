const captcha_text = document.querySelector('.captcha_text');
const redo_btn = document.querySelector('.redo_btn');
const input = document.querySelector('input');
const check_btn = document.querySelector('.check_btn');
const alert = document.querySelector('.alert')

let chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 
            'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
             'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
              1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// I already selected some elements and typed the characters we need so we can save some time

window.addEventListener('load', generateCaptcha);
redo_btn.addEventListener('click', checkCaptcha)

function generateCaptcha () {
    // amateur mistake
    for(let i = 0; i <= 5; i++) {
        let randomChar = chars[Math.floor(Math.random() * chars.length)];
        captcha_text.innerText += randomChar;
    }
}

function checkCaptcha () {
    if (!captcha_text.innerText) {
        generateCaptcha()
    } else {
        captcha_text.innerText = '';
        generateCaptcha()
    }
}
// you can see when we click the redo_btn random chars will get generated

check_btn.addEventListener('click', () => {
    alert.classList.add('show_alert');
    setTimeout(() => {
        alert.classList.remove('show_alert');
        // so the alert will be removed after 2 seconds
    }, 2000)
    if (input.value === captcha_text.innerText) {
        alert.innerText = 'Captcha You Typed Is Correct';
        alert.style.backgroundColor = 'rgba(0, 255, 0, .6)';
    } else {
        alert.innerText = 'Captcha You Typed Is Incorrect';
        alert.style.backgroundColor = 'rgba(255, 0, 0, .6)';
    }

    checkCaptcha();
    input.value = '';
})

// that's all the script
// you can find the code in the github
// github link in the desc
// Also please don't forget to subscribe...😀😀😀