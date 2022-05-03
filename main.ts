let Richtig = 0
let Spielstand = 0
input.onButtonPressed(Button.A, function () {
    Richtig = 1
    while (Richtig) {
        if (randint(0, 1) == 0) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
            Richtig = 0
            for (let Index = 0; Index <= 9; Index++) {
                if (input.buttonIsPressed(Button.A)) {
                    Richtig = 1
                    break;
                } else if (input.buttonIsPressed(Button.B)) {
                    Richtig = 0
                    break;
                } else {
                    basic.pause(100)
                }
            }
            if (Richtig == 1) {
                Spielstand += 1
                basic.showLeds(`
                    . . . . .
                    . # . # .
                    . # . # .
                    # . . . #
                    . # # # .
                    `)
            } else {
                basic.showLeds(`
                    . # . # .
                    . # . # .
                    . . . . .
                    . # # # .
                    # . . . #
                    `)
            }
        } else {
            basic.showLeds(`
                . . # . .
                . . # # .
                # # # # #
                . . # # .
                . . # . .
                `)
            Richtig = 0
            for (let Index = 0; Index <= 9; Index++) {
                if (input.buttonIsPressed(Button.B)) {
                    Richtig = 1
                    break;
                } else if (input.buttonIsPressed(Button.A)) {
                    Richtig = 0
                    break;
                } else {
                    basic.pause(100)
                }
            }
            if (Richtig == 1) {
                basic.showLeds(`
                    . . . . .
                    . # . # .
                    . # . # .
                    # . . . #
                    . # # # .
                    `)
            } else {
                basic.showLeds(`
                    . # . # .
                    . # . # .
                    . . . . .
                    . # # # .
                    # . . . #
                    `)
            }
        }
    }
    basic.showString("" + (Spielstand))
})
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        for (let index = 0; index < 4; index++) {
            music.playMelody("C5 C B D A E G F ", 120)
        }
    }
})
