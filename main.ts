input.onButtonPressed(Button.A, function () {
    steps = 0
    basic.showString("RESET")
})
input.onGesture(Gesture.FreeFall, function () {
    music.startMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Once)
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
    basic.showNumber(steps)
    if (steps > 10000) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("CAL")
    basic.showNumber(0.04 * steps)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(100)
    basic.clearScreen()
    for (let index = 0; index < 2; index++) {
        basic.showString("GOOD~")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("TOTAL")
    basic.showNumber(0.7 * steps)
    basic.showLeds(`
        # # . . .
        # # . . .
        # # # # #
        # # # . .
        # # # # #
        `)
    basic.pause(100)
    basic.clearScreen()
    for (let index = 0; index < 2; index++) {
        basic.showString("GREAT!")
    }
})
let steps = 0
steps = 0
