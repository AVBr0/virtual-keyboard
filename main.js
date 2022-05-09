let body = document.querySelector('body');

let optionsPanel = `
<div class="language">Language</div>
<div class="lang_panel">
<div class="circle-lang"></div>
</div>

<div class="theme-text">Theme</div>
<div class="theme">
<div class="circle-theme"></div>
</div>


<div class="change_light_color active">
<div class="colors">
    <input class="colors_input" type="color">
</div>
</div> `;

let keyboardPanelEn = `<div class="keyboard_lights"></div>
<div class="keyboard_keys">
    <div class="row">
        <div class="keys">\`</div>
        <div class="keys" symb="!">1</div>
        <div class="keys" symb="@">2</div>
        <div class="keys" symb="#">3</div>
        <div class="keys" symb="$">4</div>
        <div class="keys" symb="%">5</div>
        <div class="keys" symb="^">6</div>
        <div class="keys" symb="&">7</div>
        <div class="keys" symb="*">8</div>
        <div class="keys" symb="(">9</div>
        <div class="keys" symb=")">0</div>
        <div class="keys" symb="_">-</div>
        <div class="keys" symb="+">=</div>
        <div class="keys backspace_key">Backspace</div>
    </div>

    <div class="row">
        <div class="keys tab_key">Tab</div>
        <div class="keys">Q</div>
        <div class="keys">W</div>
        <div class="keys">E</div>
        <div class="keys">R</div>
        <div class="keys">T</div>
        <div class="keys">Y</div>
        <div class="keys">U</div>
        <div class="keys">I</div>
        <div class="keys">O</div>
        <div class="keys">P</div>
        <div class="keys">{</div>
        <div class="keys">}</div>
        <div class="keys slash-key">\</div>
    </div>

    <div class="row">
        <div class="keys caps_lock_key">Caps Lock</div>
        <div class="keys">A</div>
        <div class="keys">S</div>
        <div class="keys">D</div>
        <div class="keys">F</div>
        <div class="keys">G</div>
        <div class="keys">H</div>
        <div class="keys">J</div>
        <div class="keys">K</div>
        <div class="keys">L</div>
        <div class="keys">;</div>
        <div class="keys">"</div>
        <div class="keys enter_key">Enter</div>
    </div>

    <div class="row">
        <div class="keys shift_key shift_left">Shift</div>
        <div class="keys">Z</div>
        <div class="keys">X</div>
        <div class="keys">C</div>
        <div class="keys">V</div>
        <div class="keys">B</div>
        <div class="keys">N</div>
        <div class="keys">M</div>
        <div class="keys"><</div>
        <div class="keys">></div>
        <div class="keys">/</div>
        <div class="keys">?</div>
        <div class="keys shift_key shift_right">Shift</div>
    </div>

    <div class="row">
        <div class="keys ctrl_key ctrl_left">Ctrl</div>
        <div class="keys win_key">Win</div>
        <div class="keys alt_key alt_left">Alt</div>
        <div class="keys space_key"></div>
        <div class="keys alt_key alt_right">Alt</div>
        <div class="keys">Fn</div>
        <div class="keys ctrl_key ctrl_right">Ctrl</div>
    </div>
</div>`;

let keyboardPanelRu = `<div class="keyboard_lights"></div>
<div class="keyboard_keys">
    <div class="row">
        <div class="keys">\`</div>
        <div class="keys" symb="!">1</div>
        <div class="keys" symb="&quot;">2</div>
        <div class="keys" symb="№">3</div>
        <div class="keys" symb=";">4</div>
        <div class="keys" symb="%">5</div>
        <div class="keys" symb="^">6</div>
        <div class="keys" symb=":">7</div>
        <div class="keys" symb="?">8</div>
        <div class="keys" symb="(">9</div>
        <div class="keys" symb=")">0</div>
        <div class="keys" symb="_">-</div>
        <div class="keys" symb="+">=</div>
        <div class="keys backspace_key">Backspace</div>
    </div>

    <div class="row">
        <div class="keys tab_key">Tab</div>
        <div class="keys">Й</div>
        <div class="keys">Ц</div>
        <div class="keys">У</div>
        <div class="keys">К</div>
        <div class="keys">Е</div>
        <div class="keys">Н</div>
        <div class="keys">Г</div>
        <div class="keys">Ш</div>
        <div class="keys">Щ</div>
        <div class="keys">З</div>
        <div class="keys">Х</div>
        <div class="keys">Ъ</div>
        <div class="keys slash-key">&sol;</div>
    </div>

    <div class="row">
        <div class="keys caps_lock_key">Caps Lock</div>
        <div class="keys">Ф</div>
        <div class="keys">Ы</div>
        <div class="keys">В</div>
        <div class="keys">А</div>
        <div class="keys">П</div>
        <div class="keys">Р</div>
        <div class="keys">О</div>
        <div class="keys">Л</div>
        <div class="keys">Д</div>
        <div class="keys">Ж</div>
        <div class="keys">Э</div>
        <div class="keys enter_key">Enter</div>
    </div>

    <div class="row">
        <div class="keys shift_key shift_left">Shift</div>
        <div class="keys">Я</div>
        <div class="keys">Ч</div>
        <div class="keys">С</div>
        <div class="keys">М</div>
        <div class="keys">И</div>
        <div class="keys">Т</div>
        <div class="keys">Ь</div>
        <div class="keys">Б</div>
        <div class="keys">Ю</div>
        <div class="keys">.</div>
        <div class="keys">,</div>
        <div class="keys shift_key shift_right">Shift</div>
    </div>

    <div class="row">
        <div class="keys ctrl_key ctrl_left">Ctrl</div>
        <div class="keys win_key">Win</div>
        <div class="keys alt_key alt_left">Alt</div>
        <div class="keys space_key"></div>
        <div class="keys alt_key alt_right">Alt</div>
        <div class="keys">Fn</div>
        <div class="keys ctrl_key ctrl_right">Ctrl</div>
    </div>
</div>`;

let container = document.createElement('div');
container.className = 'container';
container.innerHTML = `<input class="text" type="text">`;

let keyboardEn = document.createElement('div');
keyboardEn.className = 'keyboard_wrapper en';
keyboardEn.innerHTML = keyboardPanelEn;


let keyboardRu = document.createElement('div');
keyboardRu.className = 'keyboard_wrapper ru disabled';
keyboardRu.innerHTML = keyboardPanelRu;


let init = function() {
    body.appendChild(container)
    container.insertAdjacentHTML("afterbegin", optionsPanel)
    container.append(keyboardEn)
    container.append(keyboardRu)
}

init();


let keys = document.querySelectorAll('.keys');
let spaceKey = document.querySelector('.space_key');
let shift_left = document.querySelector('.shift_left');
let shift_right = document.querySelector('.shift_right');
let caps_lock_key = document.querySelector('.caps_lock_key');
let circle_theme = document.querySelector('.circle-theme');
let circle_lang = document.querySelector('.circle-lang');
let theme = document.querySelector('.theme');
let text_input = document.querySelector('.text');
let change_color = document.querySelector('.change_light_color');
let colors_input = document.querySelector('.colors_input');
let keyboard_lights = document.querySelector('.keyboard_lights');
let keyboard_wrapper = document.querySelector('.keyboard_wrapper');
let keyboard_wrapper_en = document.querySelector('.keyboard_wrapper.en');
let keyboard_wrapper_ru = document.querySelector('.keyboard_wrapper.ru');
let container_en = document.querySelector('.container_en');
let container_ru = document.querySelector('.container_ru');
let lang_panel = document.querySelector('.lang_panel');
let lang_text = document.querySelector('.language');
let theme_text = document.querySelector('.theme-text');

for(let i=0; i<keys.length; i++) {
    keys[i].setAttribute('keyname', keys[i].innerText);
    keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
    keys[i].onclick = function() {
        if(!(keys[i].classList.contains('backspace_key') ||
            keys[i].classList.contains('tab_key') ||
            keys[i].classList.contains('caps_lock_key') ||
            keys[i].classList.contains('enter_key') ||
            keys[i].classList.contains('shift_left') ||
            keys[i].classList.contains('shift_right') ||
            keys[i].classList.contains('ctrl_left') ||
            keys[i].classList.contains('alt_left') ||
            keys[i].classList.contains('space_key') ||
            keys[i].classList.contains('alt_right') ||
            keys[i].classList.contains('ctrl_right')) && 
            caps_lock_key.classList.contains('active') ||
            shift_left.classList.contains('active') ||
            shift_right.classList.contains('active')) {
            text_input.value += keys[i].getAttribute('keyname');
        } else if (
            !(keys[i].classList.contains('backspace_key') ||
            keys[i].classList.contains('tab_key') ||
            keys[i].classList.contains('caps_lock_key') ||
            keys[i].classList.contains('enter_key') ||
            keys[i].classList.contains('shift_left') ||
            keys[i].classList.contains('shift_right') ||
            keys[i].classList.contains('ctrl_left') ||
            keys[i].classList.contains('alt_left') ||
            keys[i].classList.contains('space_key') ||
            keys[i].classList.contains('alt_right') ||
            keys[i].classList.contains('ctrl_right'))
        ) {
            text_input.value += keys[i].getAttribute('lowerCaseName');
        }

        if (shift_left.classList.contains('active') && keys[i].hasAttribute('symb')) {
            text_input.value = text_input.value.substring(0, text_input.value.length-1)
            text_input.value += keys[i].getAttribute('symb');
        }
        
        if(keys[i].classList.contains('active')) {
            keys[i].classList.remove('active');
        } else {
            keys[i].classList.add('active');
        }

        if(keys[i].classList.contains('backspace_key')) {
            text_input.value = text_input.value.substring(0, text_input.value.length-1)
        }

        if(keys[i].classList.contains('space_key')) {
            text_input.value += '\u00A0';
        }

        if(keys[i].classList.contains('tab_key')) {
            text_input.value += '\u0009';
        }
        
        setTimeout(() => {
            if(!keys[i].classList.contains('caps_lock_key'))
            keys[i].classList.remove('active')
        }, 200)
      };
}



document.addEventListener('keydown', function(e) {
    for(let i=0; i<keys.length; i++) {
        if(e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.add('active');
        }
        if(e.code == 'Space') {
            spaceKey.classList.add('active')
        }
        if(e.code == 'ShiftLeft') {
            shift_right.classList.remove('active')
        }
        if(e.code == 'ShiftRight') {
            shift_left.classList.remove('active')
        }
        if(e.code == 'CapsLock') {
            caps_lock_key.classList.toggle('active')
        }
    }
})

document.addEventListener('keyup', function(e) {
    for(let i=0; i<keys.length; i++) {
        if(e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.remove('active');
            keys[i].classList.add('remove');
        }
        if(e.code == 'Space') {
            spaceKey.classList.remove('active');
            spaceKey.classList.add('remove')
        }
        if(e.code == 'ShiftLeft') {
            shift_right.classList.remove('active')
            shift_right.classList.remove('remove')
        }
        if(e.code == 'ShiftRight') {
            shift_left.classList.remove('active')
            shift_left.classList.remove('remove')
        }
        setTimeout(() => {
            keys[i].classList.remove('remove')
        }, 200)
    }
})


theme.addEventListener('click', function() {
    circle_theme.classList.toggle('active')
    circle_lang.classList.toggle('theme_circle')
    body.classList.toggle('active')
    theme.classList.toggle('active')
    lang_panel.classList.toggle('theme_lang')
    keyboard_wrapper.classList.toggle('active')
    keyboard_wrapper_ru.classList.toggle('active')
    text_input.classList.toggle('active')
    change_color.classList.toggle('active')
    lang_text.classList.toggle('active')
    theme_text.classList.toggle('active')
    for(let i = 0; i< keys.length; i++) {
        keys[i].classList.toggle('keys_night')
    }
})


lang_panel.addEventListener('click', function() {
    if(keyboard_wrapper_ru.classList.contains('disabled')) {
        keyboard_wrapper_ru.classList.remove('disabled');
        keyboard_wrapper_en.classList.add('disabled');
        circle_lang.classList.add('active');
    } else {
        keyboard_wrapper_en.classList.remove('disabled');
        keyboard_wrapper_ru.classList.add('disabled');
        circle_lang.classList.remove('active');
    }
})