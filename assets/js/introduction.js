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

    else {
        const img = document.createElement('img');
        img.setAttribute('src' , element.dataset.tooltipContent);
        img.classList.add('tooltip__image')

        span.classList.add('tooltip__box--image');
        span.appendChild(img);
    }

    element.textContent = "";
    element.appendChild(a);
    element.appendChild(span);
})