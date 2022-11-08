//DOMElems
let startScreen = document.querySelector('#startScreen');
let game = document.querySelector('#game');
let startBtn = document.querySelector('#start');
let helpBtn = document.querySelector('#help');
let flag = document.getElementById('flag');

//App variables
let flags = [
    {
        flag: '/img/flag/afghanistan.png',
        name: 'Afghanistan'
    },
    {
        flag: '/img/flag/albania.png',
        name: 'Albania'
    },
    {
        flag: '/img/flag/algeria.png',
        name: 'Algeria'
    },
    {
        flag: '/img/flag/andorra.png',
        name: 'Afghanistan'
    },
    {
        flag: '/img/flag/angola.png',
        name: 'Afghanistan'
    },
    {
        flag: '/img/flag/antigua-and-bardbudas.png',
        name: 'Afghanistan'
    },
    {
        flag: '/img/flag/argentina.png',
        name: 'Afghanistan'
    },
    {
        flag: '/img/flag/armenia.png',
        name: 'Afghanistan'
    },
    {
        flag: '/img/flag/australia.png',
        name: 'Afghanistan'
    },
    {
        flag: '/img/flag/austria.png',
        name: 'Afghanistan'
    },
    {
        flag: '/img/flag/azerbaijan.png',
        name: 'Afghanistan'
    },
    {
        flag: '/img/flag/bahamas.png',
        name: 'Afghanistan'
    },
    {
        flag: '/img/flag/bahrain.png',
        name: 'Afghanistan'
    },
    {
        flag: '/img/flag/bangladesh.png',
        name: 'Afghanistan'
    },
    {
        flag: '/img/flag/barbados.png',
        name: 'Afghanistan'
    },
    {
        flag: '/img/flag/bazil.png',
        name: 'Afghanistan'
    },
    {
        flag: '/img/flag/belarus.png',
        name: 'Afghanistan'
    },
    {
        flag: '/img/flag/belgium.png',
        name: 'Afghanistan'
    },
    {
        flag: '/img/flag/belize.png',
        name: 'Afghanistan'
    },
    {
        flag: '/img/flag/benin.png',
        name: 'Afghanistan'
    },
    {
        flag: '/img/flag/bhutan.png',
        name: 'Afghanistan'
    },
    {
        flag: '/img/flag/bolivia.png',
        name: 'Afghanistan'
    },
    {
        flag: '/img/flag/bosnia-and-herzegovina.png',
        name: 'Afghanistan'
    },
    {
        flag: '/img/flag/botswana.png',
        name: 'Afghanistan'
    },
    {
        flag: '/img/flag/brunei.png',
        name: 'Afghanistan'
    },
    {
        flag: '/img/flag/bulgaria.png',
        name: 'Afghanistan'
    },
    {
        flag: '/img/flag/burundi.png',
        name: 'Afghanistan'
    },
    {
        flag: '/img/flag/Cabo-verde.png',
        name: 'Afghanistan'
    },
    {
        flag: '/img/flag/cambodia.png',
        name: 'Afghanistan'
    },
    {
        flag: '/img/flag/cameroon.png',
        name: 'Afghanistan'
    }//30
];

let countries = [
    "afganistan",

];

startBtn.focus();


//Event Listener
document.addEventListener('keydown', e => {
    if (e.key.includes('Arrow')) {
        e.preventDefault();
    }
    if (e.key == 'ArrowDown') {
        nav(1, '.' + document.activeElement.className);
    }
    if (e.key == 'ArrowUp') {
        nav(-1, '.' + document.activeElement.className);
    }
});

startBtn.addEventListener('click', () => {
    start();
});
helpBtn.addEventListener('click', () => {
    help();
});

//Functions
function start() {
    document.querySelector("meta[name='theme-color']").setAttribute("content", "rgb(200,200,200)");
    startScreen.style.display = 'none';
    game.style.display = 'block';
    document.querySelector('.answer-select-button').focus();
    random = parseInt(Math.random() * 31);
    console.log(flags[random].flag)
    document.getElementById('flag').src = flags[random].flag;
}

function help() {
    //nothing
}

function nav(move, elems) {
    const currentIndex = document.activeElement.tabIndex;
    const next = currentIndex + move;
    const items = document.querySelectorAll(elems);
    const targetElement = items[next];
    if (move === 1 && currentIndex == items.length - 1) return items[0].focus();
    if (move === -1 && currentIndex == 0) return items[items.length - 1].focus();
    targetElement.focus();
}