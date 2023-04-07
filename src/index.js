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
