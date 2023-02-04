const cardArray = [
    {
        name: 'DevOps-Logo',
        img: 'images/DevOps.png',
    },
    {
        name: 'Sandshrew',
        img: 'images/sandshrew.png',
    },
    {
        name: 'Psyduck',
        img: 'images/Psyduck.png',
    },
    {
        name: 'Welcome',
        img: 'images/pikachu.png',
    },
    {
        name: 'Gasly',
        img: 'images/gasly.png',
    },
    {
        name: 'Welcome',
        img: 'images/gameboy.png',
    },
    {
        name: 'Pokeball',
        img: 'images/pokeball.png',
    },
    {
        name: 'Sandshrew',
        img: 'images/sandshrew.png',
    },
    {
        name: 'Psyduck',
        img: 'images/Psyduck.png',
    },
    {
        name: 'Welcome',
        img: 'images/pikachu.png',
    },
    {
        name: 'Gasly',
        img: 'images/gasly.png',
    },
    {
        name: 'Welcome',
        img: 'images/gameboy.png',
    },
    {
        name: 'Pokeball',
        img: 'images/pokeball.png',
    },
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')

function createboard () {
    for (let i = 0; i < 10; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/DevOps.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}
createboard() 

function checkMatch() {
    console.log('check for match!')
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    console.log(cardArray)
    cardsChosen.push(cardArray[cardId].name)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
       setTimeout( checkMatch, 500) 
    }        
}