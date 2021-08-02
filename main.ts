input.onButtonPressed(Button.A, function () {
    baseline = input.magneticForce(Dimension.Strength)
})
let baseline = 0
baseline = input.magneticForce(Dimension.Strength)
radio.setGroup(179)
basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) >= 3 + baseline) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        radio.sendString("P2FULL")
    } else {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        radio.sendString("P2EMPTY")
    }
})
