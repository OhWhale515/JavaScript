const cardArray = [
    // {
    //     name: 'DevOps-Logo',
    //     img: 'images/DevOps.png',
    // },
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
    // {
    //     name: 'Welcome',
    //     img: 'images/gameboy.png',
    // },
    // {
    //     name: 'Pokeball',
    //     img: 'images/pokeball.png',
    // },
    {
        name: 'Sandshrew',
        img: 'images/sandshrew.png',
    },
    {
        name: 'Psyduck',
        img: 'images/Psyduck.png',
    },
    {
        name: 'Pikachu',
        img: 'images/pikachu.png',
    },
    {
        name: 'Gasly',
        img: 'images/gasly.png',
    },
    // {
    //     name: 'Welcome',
    //     img: 'images/gameboy.png',
    // },
    // {
    //     name: 'Pokeball',
    //     img: 'images/pokeball.png',
    // },
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const cardsChosen = []
const cardsChosenIds = [] 
const cardsWon = []

function createboard () {
    for (let i = 0; i < 10; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/gameboy.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}
createboard() 

function checkMatch() {
    const cards = document.querySelectorAll('img')
    console.log(cards)
    console.log('check for match!')
    if (cardsChosen[0] == cardsChosen[1]) {
            alert('You found a match!')
            cards[cardsChosenIds[0]].setAttribute('src', 'images/pokeball.png')
            cards[cardsChosenIds[1]].setAttribute('src', 'images/pokeball.png')
            cards[cardsChosenIds[0]].removeEventListener('click', flipCard)
            cards[cardsChosenIds[1]].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
    } 
    cardsChosen = []
    cardsChosenIds = []

}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    console.log(cardArray)
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout( checkMatch, 500) 
    }        
}