/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
/******************************************************************************************************/

//create a variable that selects navbar (that is in the html file)
const navbar=document.querySelector("#navbar__list");
// a list that holds all the sections
const sections=document.querySelectorAll('section');


// build the navigation bar by copying section attributes to our new new list elements
var i;
function buildNav(){
for (i of sections){
    let section=document.createElement('li');
    section.className=i.className
    section.className = 'menu__link'; // from the css
    section.dataset.nav = i.id;
    section.innerText = i.dataset.nav;
    navbar.appendChild(section);
}
}
// is the section in the viwport?
var selection;
function getActiveSection(){
    for (i of sections){
        var bounding = i.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
        const verticalInView = (bounding.top <= windowHeight) && ((bounding.top + bounding.height) >= 0);
        const horizontalInView = (bounding.left <= windowWidth) && ((bounding.left + bounding.width) >= 0);
        // if (
        //     bounding.top >= 0 &&
        //     bounding.left >= 0 &&
        //     bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        //     bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        // )
        //
        //previous code depended that the section is 100% in view but that doesn't work on smaller screens, 
        //checking if any part of section is in viewport instead.
        if (verticalInView && horizontalInView){
            selection=i;
         }
    }
    return selection;
}
// add the class active to section when being viewed

function setToActive () {
    window.addEventListener('scroll', function (event) {
        let section = getActiveSection();
        section.classList.add('your-active-class');
        // set other sections as inactive
        for ( i of sections) {
            if (i.id != section.id & i.classList.contains('your-active-class')) {
                i.classList.remove('your-active-class');
            }
        }
        // set the header style to list element
        const active = document.querySelector('li[data-nav="' + section.id + '"]'); // get the corresponding list element
        active.classList.add('active__link'); // added to the css
        // remove from other list elements
        const elements = document.querySelectorAll('.menu__link');
        for ( i of elements) {
            if (i.dataset.nav != active.dataset.nav & i.classList.contains('active__link')) {
                i.classList.remove('active__link');
            }
        }
    })
}

// navigates to section when clicked in the navbar
function scrollToClick() {
    navbar.addEventListener('click', function (event) {
        const clicked = document.querySelector('#' + event.target.dataset.nav) // get desired id
        clicked.scrollIntoView();
    })
}


buildNav();
scrollToClick();
setToActive();