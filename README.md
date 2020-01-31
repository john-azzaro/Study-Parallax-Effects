# Parallax Effects Study
See it Live: https://john-azzaro.github.io/Study-Parallax-Effects/

<br>

## What is Parallax Effects Study?
Parallax is an effect where background content such as text, images, shapes, etc. move at a different speeds than the foreground content in relation to the user scrolling up ro down a page.  This particular study includes an exploration wherein images and a text section move at different speeds in a parallax effect as the user scrolls up and sown the screen.

<br>

## What are the key takeaways from the Parallax Effects Study?

<br>
<dl> 

### Use a functional utility to facilitate the effect with multiple elements.
As a rounded solution to handling the parallax effect for 4 different elements on the study, it's best to create a **parallax** utility that handles the element, distance, and speed of the effect for the the different elements. With this utility, for each selected "item," you can transform with custom speed and distance settings.
```JavaScript
function parallax(element, distance, speed ) {     
    const item = document.querySelector(element);     
    item.style.transform = `translateY(${distance * speed}px)`;   
}  
```
<br>

### When handling scroll with the utility function, tweaking is very easy.
I used jQuery in this example to explore how simple this could be and it really worked out well. On the document scroll, simply call the parallax utility and pass in the element, the distance, and the speed. Again, makes it worlds easier to tweak for the right effect. 
```JavaScript
function handleScroll() {                      
    $(document).on('scroll', function() {              
        parallax('header', window.scrollY, 0.7);            
        parallax('.kiwi', window.scrollY, 0.2);                                 
        parallax('.apple', window.scrollY, 0.4);                                 
        parallax('.mango', window.scrollY, 0.6);  
    });
}
```




</dd>
</dl>
<br>

## Does the Parallax Effects Study feature commentary?
Yes! I use extensive Commentary (mostly in the form of my thought process) so that the new and curious can follow the logic in the program and get an idea of my reasoning behind each and every line of code.  In addition to my line-by-line commantary, I also provide a Process text file that gives a good outline of my design and implementation process. 

<br>

## What are the key features of the Parallax Effects Study?
Since this study is ongoing, basic functionalities are covered first and more advanced features are added or will be added in the future.  For a complete list of current and future changes, see below:


| **Features:**                            | **Feature Notes:**                             |
| ---------------------------------------- | ----------------------------------------------|
| elements moving along y-axis                              |  basic format for parallax effect                                                |



<br>

## Screenshots

![parallax1](https://user-images.githubusercontent.com/37447586/61750643-c24d0480-ad5a-11e9-86f0-6638d13ffac9.png)
![parallax2](https://user-images.githubusercontent.com/37447586/61750644-c24d0480-ad5a-11e9-90a0-46c45d66911a.png)
![parallax3](https://user-images.githubusercontent.com/37447586/61750645-c24d0480-ad5a-11e9-85f3-f8bcd146fc65.png)
