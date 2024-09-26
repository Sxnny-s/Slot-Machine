

const reels = [
    ['🍒', '🍋', '🍊'],
    ['🔔', '💰', '🍒'],
    ['🍋', '🍊', '🔔'],
];

const slotDisplay = () => {
    

    for(let o = 0; o < 3 ;o++){
        rowDisplay = ""
        for(let i = 0; i < 3; i++){
            rowDisplay += reels[o][i] + " "
        }
        console.log(rowDisplay)
    }
}

slotDisplay()

// RNG generator for slotRandom 

const RNG = () => {
    return Math.floor(Math.random() * (2 - 0) + 0)
 }


// Spin machine / randomize 

const slotRandom = () => {

   
    for(let o = 0; o < 3 ;o++){
        rowDisplay = ""
        for(let i = 0; i < 3; i++){

            const outer = RNG()
            const inner = RNG()

            rowDisplay += reels[outer][inner] + " "
        }
        console.log(rowDisplay)
    }
}
slotRandom()


