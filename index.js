let theme = localStorage.getItem('theme');
let themeDots = document.getElementsByClassName('theme-dot');
let firstModal = document.getElementById('firstModal');
let firstModalBtn = document.getElementById('firstModalBtn');
let closeFirstBtn = document.getElementsByClassName('closeFirstBtn')[0];

firstModalBtn.addEventListener('click', openFirstModal);
closeFirstBtn.addEventListener('click', closeFirstModal);
window.addEventListener('click', clickOutside);

for (var i = 0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode;
        console.log('Option clicked', mode);
        setTheme(mode);
    });
}

function setTheme(mode){
    if(mode == 'light'){
        document.getElementById('theme-style').href = 'default.css';
    }

    if(mode == 'blue'){
        document.getElementById('theme-style').href = 'style/blue.css';
    }

    if(mode == 'green'){
        document.getElementById('theme-style').href = 'style/green.css';
    }

    if(mode == 'purple'){
        document.getElementById('theme-style').href = 'style/purple.css';
    }

    localStorage.setItem('theme', mode);
}

if (theme == null){
    setTheme('light');
}else{
    setTheme(theme);
}

function openFirstModal(){
    firstModal.style.display = 'block';
}

function closeFirstModal (){
    firstModal.style.display = 'none';
}

function clickOutside(e){
    if (e.target == firstModal){
        firstModal.style.display = 'none';
    }
}