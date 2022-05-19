let hertz = 0
let positiveOrNegative = 0
let time = 0
basic.forever(function () {
    basic.showIcon(IconNames.Yes)
    basic.clearScreen()
    time = input.runningTime()
    while (5000 >= input.runningTime() - time) {
        serial.writeNumber(input.acceleration(Dimension.Z))
        serial.writeLine("")
        if (0 < input.acceleration(Dimension.Z) && 0 == positiveOrNegative) {
            hertz += 1
            positiveOrNegative = 1
        }
        if (0 > input.acceleration(Dimension.Z)) {
            positiveOrNegative = 0
        }
    }
    hertz = hertz / 5
    basic.showNumber(hertz)
    serial.writeNumber(hertz)
    serial.writeLine(" hertz")
    basic.pause(1000)
    hertz = 0
    positiveOrNegative = 0
})
