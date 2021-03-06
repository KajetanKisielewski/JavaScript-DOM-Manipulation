const list = [
    {
        id: 1,
        parentId: null,
        text: 'Zastosowanie',
        link: '#Zastosowanie',
    },
    {
        id: 44,
        parentId: null,
        text: 'Historia',
        link: '#Historia',
    },
    {
        id: 7,
        parentId: 44,
        text: 'Dialekty',
        link: '#Dialekty',
    },
    {
        id: 31,
        parentId: 44,
        text: 'Java',
        link: '#Java',
    },
    {
        id: 24,
        parentId: null,
        text: 'JavaScript dla WWW',
        link: '#JavaScript_dla_WWW',

    },
    {
        id: 10,
        parentId: 24,
        text: 'Interakcja',
        link: '#Interakcja'
    },
    {
        id: 25,
        parentId: 24,
        text: 'Osadzanie',
        link: '#Osadzanie',
    }
];


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
