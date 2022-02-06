# JavaScript - DOM manipulation

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Solutions](#solutions)
    - [Solution to the first problem](#solution-to-the-first-problem)
    - [Solution to the second problem](#solution-to-the-second-problem)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I Learned](#what-i-learned)
- [Author](#author)
- [Special thanks](#special-thanks)


## Overview

### The challenge

This project was created to prove my skills in JavaScript DOM manipulation.
The task consisted in creating new elements in the DOM tree, adding appropriate classes, attributes or contents to the selected elements, and searching for the appropriate places where we would make modifications. In this task I couldn't change content in HTML and CSS files. My job was to solve two problems using JavaScript:

1. Generating links with a tooltip after hovering the cursor over an element(text and image).
2. Generating a table of contents based on an array of objects.

### Solutions

#### Solution to the first problem

Having the following structure, we need to modify the element with the .tooltip class in such a way that it generates the correct structure compliant with CSS:

````html
<span
    class="tooltip"
    data-url="https://pl.wikipedia.org/wiki/J%C4%99zyk_skryptowy"
    data-tooltip-type="text"
    data-tooltip-content="Język skryptowy (ang. script language) – język programowania obsługujący skrypty[1]. Często służący do kontrolowania określonej aplikacji."
>
    skryptowy
</span>
````

The solution I chose was to create two children, i.e. `<a>` and `<span>`, with the appropriate attributes and content for a .tooltip element, and then add them to .tooltip. note that we have different types of tooltips. It can be a text or a picture tooltip.


Example of a solution for a text type tooltip:
````js
const tooltipList = document.querySelectorAll('.tooltip')

tooltipList.forEach( function(element) {

    const a = document.createElement('a')
    a.setAttribute('href' , element.dataset.url);
    a.textContent = element.textContent;

    const span = document.createElement('span')
    span.classList.add('tooltip__box')

    if(element.dataset.tooltipType === 'text') {
        span.classList.add('tooltip__box--text');
        span.textContent = element.dataset.tooltipContent;
    }

    element.textContent = "";
    element.appendChild(a);
    element.appendChild(span);
})
````

#### Solution to the second problem

The assumption was that this table can be modified and our solution must be flexible enough so that changing the contents of the table does not cause problems with generating the table of contents.


This array contains objects with relevant data:
````js
    id: 1,
    parentId: null,
    text: 'Zastosowanie',
    link: '#Zastosowanie',
````

where:

* **id** – unique identifier of each item
* **parentId** – parent id or null; this element determines whether our object is a child (has parentId set) or a parent (then parentId is null)
* **text** – text content for the element `<a>`
* **link** – the content for the href attribute in `<a>`

The table of contents should look like this:

![](./assets/img/example2.png)

 The solution I chose was that in the first step, I only generate items that are at the first level of nesting. I decided to use a for loop and an if condition inside iteration for this. I check if parentId is null. If so, I create the appropriate content and add the id of the item to dataset.id - to know later what the id of that item is.

 ````js
const section = document.querySelector('.article__list');

const ul = document.createElement('ul');

for(let i=0; i<list.length; i++) {

    if( list[i].parentId === null ) {

        const li = document.createElement('li');
        li.dataset.id = list[i].id;

        const a = document.createElement('a')
        a.setAttribute('href' , list[i].link)
        a.textContent = list[i].text

        li.appendChild(a);
        ul.appendChild(li);
    }
}
section.appendChild(ul);
 ````

In the second step, I use the generated items and reuse the loop to refer to each item separately. Inside this loop I get the element id, then in the list table I look for all objects that have a parent id equal to the given id.

````js

const liList = document.querySelectorAll('li');

liList.forEach( function(element) {

    const id = Number(element.dataset.id);

    const children = list.filter( function (element) {
        return element.parentId === id
    });

    for(let i=0; i<children.length; i++) {

            const ul = document.createElement('ul');
            const li = document.createElement('li');
            const a = document.createElement('a');

            a.setAttribute('href' , children[i].link);
            a.textContent = children[i].text;

            li.appendChild(a);
            ul.appendChild(li);
            element.appendChild(ul);
    }
})
````

### Links:

- Code: [See my code]()
- Live: [Check it out]()

## My Process

### Built with

- HTML
- CSS
- JavaScript


### What I learned

Working with this project allowed me to acquire knowledge in the field of: searching for elements, operations on elements, managing elements and navigating the DOM.

## Author

- Github - [Kajetan Kisielewski](https://github.com/KajetanKisielewski)
- LinkedIn - [Kajetan Kisielewski](https://www.linkedin.com/in/kajetan-kisielewski-157b60208/)

## Special thanks

Thanks to my [Mentor - devmentor.pl](https://devmentor.pl/) - for providing me with this task and for code review.



