let visible = null;
const links = document.querySelectorAll(".menu-item a");
let back = document.querySelectorAll('.back');

links.forEach(element =>{
    element.addEventListener('click', ()=>{
        let details = element.nextElementSibling;
        if (visible && visible!== details)
        {
            visible.style.display = 'none';
        }

        if (details.style.display === 'block')
        {
            details.style.display = 'none';
            visible = null;
            
        }
        else{
            details.style.display = 'block';
            visible = details;
        }

        back.forEach(backButton =>{
            backButton.addEventListener('click', ()=>{
                details.style.display = "none";
            });
        });
    });
});

let menuSection = document.querySelector('.menu-heading');
let menuButton = document.querySelector('#menu-button');

menuButton.addEventListener('click', ()=>{
    menuSection.scrollIntoView({
        behavior: 'smooth'
    });
});

let specialButton = document.querySelector('#special-button');
let specialSection = document.querySelector('.today-special');

specialButton.addEventListener('click', ()=>{
    specialSection.scrollIntoView({
        behavior: 'smooth'
    })
});

let viewMenuButton = document.querySelector('#view-menu-button');
viewMenuButton.addEventListener('click', ()=>{
    menuSection.scrollIntoView({
        behavior: 'smooth'
    });
});

let topButton = document.querySelector('#top');
let header = document.querySelector('.header');
topButton.addEventListener('click', ()=>{
    header.scrollIntoView({
        behavior: 'smooth'
    });
});