PageLoaded()
function PageLoaded()
{
    let loader = document.getElementById('loader');
    let content = document.getElementById('content')
    loader.style.display = 'none'
    content.style.display = "block"

    document.querySelector('.overviewContainer').style.height = window.innerHeight + 'px';

    var slidesContainer = document.querySelector('.swiperProjectsClient .swiper-wrapper')
    clientProjects.forEach(project=>{
        let projectName = PageLang == 'en' ? project['Name'] : project['NameFa']
        let projectdesc = PageLang == 'en' ? project['desc'] : project['descFa']
        let projectImage = project['img'];
        let projectURL = project['url']

        var builtWithCodes = '<div class="ProjectBuiltWith">';
        project['builtWith'].forEach(lang=>{
            builtWithCodes = builtWithCodes + `<div class="PBW PBW-${lang}">${lang}</div>`
        })
        let GitHubCodes = project['github'] ? `                                                
        <div class="GitHubContainer">
            <a href="https://github.com/Kasra071/Numbers_Conversion" class="GitHubLink">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                <span>Github</span>
            </a>
        </div>` : '';
        builtWithCodes = builtWithCodes + GitHubCodes
        builtWithCodes = builtWithCodes + '</div>'

        let DivElement = document.createElement('div');
        DivElement.className = "swiper-slide";
        DivElement.innerHTML = `
            <div class="Project">

            <div class="ProjectDetails">
                <h3>${projectName}</h3>
            </div>

            <div class="ProjectIMG">
                <a href="${projectURL}" target="_blank"><img src="../${projectImage}" alt="${projectName} image" /></a>
            </div>

            <div class="ProjectDetails">
                <p>${projectdesc}</p>
            </div>

            ${builtWithCodes}


            </div>
        `

        slidesContainer.appendChild(DivElement)
    })

    var slidesContainer2 = document.querySelector('.swiperProjectsPersonal .swiper-wrapper')
    PersonalProjects.forEach(project=>{
        let projectName = PageLang == 'en' ? project['Name'] : project['NameFa']
        let projectdesc = PageLang == 'en' ? project['desc'] : project['descFa']
        let projectImage = project['img'];
        let projectURL = project['url']

        var builtWithCodes = '<div class="ProjectBuiltWith">';
        project['builtWith'].forEach(lang=>{
            builtWithCodes = builtWithCodes + `<div class="PBW PBW-${lang}">${lang}</div>`
        })
        let GitHubCodes = project['github'] ? `                                                
        <div class="GitHubContainer">
            <a href="https://github.com/Kasra071/Numbers_Conversion" class="GitHubLink">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                <span>Github</span>
            </a>
        </div>` : '';
        builtWithCodes = builtWithCodes + GitHubCodes
        builtWithCodes = builtWithCodes + '</div>'

        let DivElement = document.createElement('div');
        DivElement.className = "swiper-slide";
        DivElement.innerHTML = `
            <div class="Project">

            <div class="ProjectDetails">
                <h3>${projectName}</h3>
            </div>

            <div class="ProjectIMG">
                <a href="${projectURL}" target="_blank"><img src="../${projectImage}" alt="${projectName} image" /></a>
            </div>

            <div class="ProjectDetails">
                <p>${projectdesc}</p>
            </div>

            ${builtWithCodes}


            </div>
        `

        console.log(DivElement)
        slidesContainer2.appendChild(DivElement)
    })
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
var currentTopOffset = 0;
var animCount = 0;
function ChangeTabServices(element){
    let highlighter = document.querySelector('.tab-highlighter')
    let StyleTag = document.getElementById('HighlightMoverAnimation')
    let tab = element.getAttribute('tab-data')
    let LeftCount;
    let topCount;
    if(window.innerWidth < 1000)
    {
        switch(tab){
            case 'FED':
                LeftCount = 0
                topCount = 0;
                break;
            case 'SPD':
                LeftCount = 50
                topCount = 0;
                break;
            case 'WRD':
                LeftCount = 0
                topCount = 50;
                break;
            case 'RD':
                LeftCount = 50
                topCount = 50;
                break;
        }
    
        if(PageLang == 'en'){
            StyleTag.innerHTML = `
                @keyframes Movehighlighter-${animCount} {
                    0%{left: ${currentLeftOffset}%;top:${currentTopOffset}%}
                    100%{left: ${LeftCount}%;top:${topCount}%}
                }
            `
        }else{
            StyleTag.innerHTML = `
                @keyframes Movehighlighter-${animCount} {
                    0%{right: ${currentLeftOffset}%;top:${currentTopOffset}%}
                    100%{right: ${LeftCount}%;top:${topCount}%}
                }
            `
        }
    
        currentLeftOffset = LeftCount
        currentTopOffset = topCount
        highlighter.style.animation = "none";
        highlighter.style.animation = `Movehighlighter-${animCount} 0.2s ease-in-out forwards`
        document.querySelectorAll('.ServiceShower').forEach(elem =>{
            elem.style.display = 'none'
        })
        document.getElementById(tab).style.display = 'block'
        animCount++;
    }
    else
    {
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
    
        if(PageLang == 'en'){
            StyleTag.innerHTML = `
                @keyframes Movehighlighter-${animCount} {
                    0%{left: ${currentLeftOffset}%;}
                    100%{left: ${LeftCount}%;}
                }
            `
        }else{
            StyleTag.innerHTML = `
                @keyframes Movehighlighter-${animCount} {
                    0%{right: ${currentLeftOffset}%;}
                    100%{right: ${LeftCount}%;}
                }
            `
        }
    
        currentLeftOffset = LeftCount
        highlighter.style.animation = "none";
        highlighter.style.animation = `Movehighlighter-${animCount} 0.2s ease-in-out forwards`
        document.querySelectorAll('.ServiceShower').forEach(elem =>{
            elem.style.display = 'none'
        })
        document.getElementById(tab).style.display = 'block'
        animCount++;
    }
    

}

var projectsSwiper = new Swiper('.swiperProjectsClient',{
    direction: 'horizontal',
    loop: true,
    speed:350,

    autoplay: {
        delay: 6000,
        disableOnInteraction:true,
    },
    freeMode: {
        enabled: true,
        sticky: true,
      },
  
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      pagination: {
        el: '.swiper-pagination',
        clickable:true,
      },
})

var projectsSwiperPersonal = new Swiper('.swiperProjectsPersonal',{
    direction: 'horizontal',
    loop: true,
    speed:350,

    autoplay: {
        delay: 6000,
        disableOnInteraction:true,
    },
    freeMode: {
        enabled: true,
        sticky: true,
      },
  
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      pagination: {
        el: '.swiper-pagination',
        clickable:true,
      },
})

function OpenSideMenuMobile(){
    document.querySelector('.SideMenuContainer').classList.toggle('showingSideMenu')
}