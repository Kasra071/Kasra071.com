PageLoaded()
function PageLoaded()
{
    let loader = document.getElementById('loader');
    let content = document.getElementById('content')
    loader.style.display = 'none'
    content.style.display = "block"

    document.querySelector('.overviewContainer').style.height = window.innerHeight + 'px';
}

window.addEventListener('resize',()=>{
    document.querySelector('.overviewContainer').style.height = window.innerHeight + 'px';
})

function SideMenuOnMouseOver(elem){
    elem.querySelector('a').style.animation = ""
    elem.querySelector('a').style.display = "flex"
}


function SideMenuOnMouseLeave(elem){
    elem.querySelector('a').style.animation = "sideAnimHide 0.2s forwards"
    setTimeout(()=>{
        elem.querySelector('a').style.display = "none"
    },200)
}

function ChangeLangMenuShowUp()
{
    document.querySelector('.LanguageSelect div').classList.toggle('ShowingOption')
}

function ChangeLang(lang){
    switch(lang){
        case 'fa':
            location.href = window.location.origin + '/fa/'
            break;
        case 'en':
            location.href = window.location.origin + '/en/'
            break;
    }
}

ChangeTabServices(document.getElementById('Front-end-development'))
var currentLeftOffset = 0;
var animCount = 0;
function ChangeTabServices(element){
    let highlighter = document.querySelector('.tab-highlighter')
    let StyleTag = document.getElementById('HighlightMoverAnimation')
    let tab = element.getAttribute('tab-data')
    let LeftCount;
    switch(tab){
        case 'FED':
            LeftCount = 0
            break;
        case 'SPD':
            LeftCount = 25
            break;
        case 'WRD':
            LeftCount = 50
            break;
        case 'RD':
            LeftCount = 75
            break;
    }

    StyleTag.innerHTML = `
        @keyframes Movehighlighter-${animCount} {
            0%{left: ${currentLeftOffset}%;}
            100%{left: ${LeftCount}%;}
        }
    `
    currentLeftOffset = LeftCount
    highlighter.style.animation = "none";
    highlighter.style.animation = `Movehighlighter-${animCount} 0.2s ease-in-out forwards`
    document.querySelectorAll('.ServiceShower').forEach(elem =>{
        elem.style.display = 'none'
    })
    document.getElementById(tab).style.display = 'block'
    animCount++;

}