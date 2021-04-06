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
//ddeclaring variables to be accsessed quickly..

const bar = document.querySelector('#navbar__list'); // will be used to creat the navigation bar..
const sections = document.querySelectorAll('section')// will be used to activate the section 

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// check if is the section is in view,,
function inView(e){
    let posistion = e.getBoundingClientRect();
    return(posistion.top>=10);
}
//function for setting section to be active and removing the active attribute from the ones that are not currently in view... (it's not accurate 100%)

function isActive(){
    for(section of sections ){
        if (inView(section)&& !section.classList.contains('your-active-class')){
               section.classList.add('your-active-class');
                continue;

            }
           
       else{
            section.classList.remove('your-active-class');
       };
    };
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
//building navigation bar..
//each section we add in the HTML file will be also added to the nav bar automatically ...
function addSections() {
    for (let item of sections) {
        let section = document.createElement('li');
        section.className = 'menu__link';
        section.dataset.nav = item.id;
        section.innerText = item.dataset.nav;
        bar.appendChild(section);
    };
};





// Scroll to anchor ID using scrollTO event
//will scroll into the selected section from the navbar and setting the section to active and the others will remove the active class from them...

document.addEventListener('scroll',isActive);

function scrollToClick() {
    bar.addEventListener('click', function (event) {
        const clicked = document.querySelector('#' + event.target.dataset.nav)
        clicked.scrollIntoView();
    });
};


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
addSections();

// Scroll to section on link click
scrollToClick();

// Set sections as active
isActive();
