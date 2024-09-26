

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

 // Win conditions 

const winConditions = (key) => {
    if((key[0] == key[1]) && (key[0] == key[2])){
        return true
    } 
}
 
// Spin machine / randomize 

const slotRandom = () => {

    let win = false
   
    for(let o = 0; o < 3 ;o++){
        rowDisplay = ""
        key = []
        for(let i = 0; i < 3; i++){
            const outer = RNG()
            const inner = RNG()

            rowDisplay += reels[outer][inner] + " "
            key.push(reels[outer][inner])

        }
        console.log(rowDisplay)
        win |= winConditions(key)
    }
    if(win){
        console.log('YOU WIN!!!')
    }else{
        console.log('YOU LOSE !')
    }
   
}
slotRandom()


