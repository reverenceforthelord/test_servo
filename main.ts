input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    start = 1
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    start = 0
})
radio.onReceivedValue(function (name, value) {
    if (name == "x" && start == 1) {
        basic.showString("x")
        angle = right_angle + pins.map(
        value,
        -1024,
        1023,
        0 - angle_range,
        angle_range
        )
        pins.servoWritePin(AnalogPin.P8, angle)
    }
})
let angle = 0
let angle_range = 0
let right_angle = 0
let start = 0
radio.setGroup(1)
start = 0
right_angle = 95
angle_range = 30
angle = right_angle
pins.servoWritePin(AnalogPin.P8, angle)
basic.forever(function () {
	
})
