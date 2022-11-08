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
        name: 'andorra'
    },
    {
        flag: '/img/flag/angola.png',
        name: 'angola'
    },
    {
        flag: '/img/flag/antigua-and-bardbudas.png',
        name: 'antigua and bardbudas'
    },
    {
        flag: '/img/flag/argentina.png',
        name: 'argentina'
    },
    {
        flag: '/img/flag/armenia.png',
        name: 'armenia'
    },
    {
        flag: '/img/flag/australia.png',
        name: 'australia'
    },
    {
        flag: '/img/flag/austria.png',
        name: 'austria'
    },
    {
        flag: '/img/flag/azerbaijan.png',
        name: 'azerbaijan'
    },
    {
        flag: '/img/flag/bahamas.png',
        name: 'bahamas'
    },
    {
        flag: '/img/flag/bahrain.png',
        name: 'bahrain'
    },
    {
        flag: '/img/flag/bangladesh.png',
        name: 'bangladesh'
    },
    {
        flag: '/img/flag/barbados.png',
        name: 'barbados'
    },
    {
        flag: '/img/flag/bazil.png',
        name: 'bazil'
    },
    {
        flag: '/img/flag/belarus.png',
        name: 'belarus'
    },
    {
        flag: '/img/flag/belgium.png',
        name: 'belgium'
    },
    {
        flag: '/img/flag/belize.png',
        name: 'belize'
    },
    {
        flag: '/img/flag/benin.png',
        name: 'benin'
    },
    {
        flag: '/img/flag/bhutan.png',
        name: 'bhutan'
    },
    {
        flag: '/img/flag/bolivia.png',
        name: 'bolivia'
    },
    {
        flag: '/img/flag/bosnia-and-herzegovina.png',
        name: 'bosnia and herzegovina'
    },
    {
        flag: '/img/flag/botswana.png',
        name: 'botswana'
    },
    {
        flag: '/img/flag/brunei.png',
        name: 'brunei'
    },
    {
        flag: '/img/flag/bulgaria.png',
        name: 'bulgaria'
    },
    {
        flag: '/img/flag/burundi.png',
        name: 'burundi'
    },
    {
        flag: '/img/flag/Cabo-verde.png',
        name: 'cabo verde'
    },
    {
        flag: '/img/flag/cambodia.png',
        name: 'cambodia'
    },
    {
        flag: '/img/flag/cameroon.png',
        name: 'cameroon'
    }//30
];

startBtn.focus();


//Event Listener
//Key Events
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
    if (game.style.display == 'block') {
        if (e.key == 'Backspace') {
            e.preventDefault();
            let quit = confirm("Are you sure to quit this session?\nYour progress won't be saved!");
            if(quit) {
                game.style.display = 'none';
                startScreen.style.display = 'block';
            }
        }
    }
});


//Button Events
startBtn.addEventListener('click', () => {
    start();
});
helpBtn.addEventListener('click', () => {
    help();
});

//Functions
function start() {
    startScreen.style.display = 'none';
    game.style.display = 'block';
    document.querySelector('.answer-select-button').focus();
    random = parseInt(Math.random() * 31);
    document.getElementById('flag').src = flags[random].flag;
    let answer = parseInt(Math.random() * 4);
    document.querySelectorAll('.answer-select-button')[answer].innerText = flags[random].name.charAt(0).toUpperCase() + flags[random].name.slice(1);;
    let given = [
        document.querySelectorAll('.answer-select-button')[answer]
    ];
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



//SOFTKEY FOR PC THING
function softkey(e) {
    const { target, key, bubbles, cancelable, repeat, type } = e;
    if (!/Left|Right/.test(key) || !key.startsWith("Arrow") || !e.ctrlKey) return;
    e.stopImmediatePropagation();
    e.stopPropagation();
    e.preventDefault();
    target.dispatchEvent(new KeyboardEvent(type, { key: "Soft" + key.slice(5), bubbles, cancelable, repeat }));
}

document.addEventListener("keyup", softkey, true);
document.addEventListener("keydown", softkey, true);