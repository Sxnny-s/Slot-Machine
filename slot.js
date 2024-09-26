// 1. Deposit some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount done
// 4a  display slot machine
// 4b. Spin the slot machine
// 5. check is the player won
// 6. Award winnings / take bet
// 7. play again button

const prompt = require("prompt-sync")();

// step one deposit

const deposit = () => {

    while(true){
        const depositAmount = prompt('Enter a deposit amount: ')
        const numDeposit = parseInt(depositAmount)

        if (isNaN(numDeposit) || numDeposit <= 0) {
            console.log('invalid deposit amount')
         } else {
            return numDeposit;
        }
    }
};

let depositAmount = deposit()


// Step two number of lines to bed on.

const numOfLines = () => {
    console.log('1 = top row')
    console.log('2 = middle row')
    console.log('3 = bottom row')
    const lineNum = prompt('What lines would you like to bet on?: [1,2,3] ')

}

const betLines = numOfLines()


// Min and max bet 

const betAmount = () => {
    console.log('1 = max bet: 50')
    console.log('2 = min bet: 10')

    const minOrMax = prompt('Would you like to place a minimum bet or maximum bet?: [1 or 2] ')
    while(true){
        if (minOrMax == '1'){
            depositAmount -= 50
            console.log(`Current Balance: ${depositAmount}`)
            break

        }else if (minOrMax == '2'){
            depositAmount -= 10
            console.log(`Current Balance: ${depositAmount}`)
            break
        }else{
            console.log('Invalid Option')
            betAmount()
        }
    }
}

const minMax = betAmount()


// display slot machine



const reels = [
    ['🍒', '🍋', '🍊'],
    ['🔔', '💰', '🍒'],
    ['🍋', '🍊', '🔔'],
];

// const slotDisplay = () => {
    

//     for(let o = 0; o < 3 ;o++){
//         rowDisplay = ""
//         for(let i = 0; i < 3; i++){
//             rowDisplay += reels[o][i] + " "
//         }
//         console.log(rowDisplay)
//     }
// }

// slotDisplay()

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
    console.log(`Current Balance: ${depositAmount}`)
}

slotRandom()

// Win conditions 

const winConditions = () => {
    if()
}
 