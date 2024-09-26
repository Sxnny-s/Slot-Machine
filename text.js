
const slotDisplay = () => {
    const reels = [
        ['🍒', '🍋', '🍊'],
        ['🔔', '💰', '🍒'],
        ['🍋', '🍊', '🔔'],
    ];

    for(let o = 0; o < 3 ;o++){
        rowDisplay = ""
        for(let i = 0; i < 3; i++){
            rowDisplay += reels[o][i] + " "
        }
        console.log(rowDisplay)
    }
}

slotDisplay()
