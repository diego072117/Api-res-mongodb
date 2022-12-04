/*=============== Show Menu =============== */

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')
    
/*===== Menu Show =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
    })
}
/*===== Hide Show =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== Remove Menu Mobile =============== */

const navLink = document.querySelectorAll('.nav__link');

function linkAction(){

    const navMenu = document.getElementById('nav-menu');
    // when we click on each link, we remove the show-menu class
    navMenu.classList.remove('show-menu')

}

navLink.forEach((n) => n.addEventListener('click', linkAction))

/*=============== Active Link =============== */

const navlink = document.querySelectorAll('.nav__link');

function activeLink(){

    navlink.forEach((a)=> a.classList.remove('active-link'));
    this.classList.add('active-link')
}

navlink.forEach((a)=> a.addEventListener('click', activeLink))





