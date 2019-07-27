'use strict';

function parallax(element, distance, speed ) {                             // parallax function that takes 3 parameters: element, distance, and 
    const item = document.querySelector(element);                          // the selected element is stored as "item".
    item.style.transform = `translateY(${distance * speed}px)`;            // when the parallax function is called, the item style will transform with "translateY" 
}                                                                          // ... and "distance * speed" allows us to customize the parallax speed and distance.

function handleScroll() {                                                  // when handleScroll is run...
    $(document).on('scroll', function() {                                  // Within the document, when the user scolls the page, run the following:
        parallax('header', window.scrollY, 0.7);                            // ... which calls the parallax function with three arguments passed to parallax (i.e. 'header' = element, window.scollY (i.e. the amount scrolled on the window) = distance, 1 = speed)
        parallax('.kiwi', window.scrollY, 0.2);                                 
        parallax('.apple', window.scrollY, 0.4);                                 
        parallax('.mango', window.scrollY, 0.6);  
    });
}
 
function setUpEventListeners() {                                            // run the event listener handleScroll.
    handleScroll();
}

function initialize() {                                                     // When the app is initialized, run setUpEventListeners.
    setUpEventListeners();
}

$(initialize);                                                              // intialize the app to run on start.
