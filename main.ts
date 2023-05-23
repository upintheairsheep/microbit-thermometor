input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(input.temperature() + 273.15)
    if (input.buttonIsPressed(Button.AB)) {
        basic.showString("Source: https://www.toppr.com/guides/physics-formulas/celsius-to-kelvin-formula/#:~:text=We%20can%20convert%20temperature%20from,another%20using%20these%20simple%20equations.&text=K%20%3D%20C%20%2B%20273.15.")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature() * (9 / 5) + 32)
    if (input.buttonIsPressed(Button.AB)) {
        basic.showString("Source: https://www.uptodate.com/contents/calculator-temperature-unit-conversions#:~:text=Temperature%20in%20degrees%20Fahrenheit%20(%C2%B0,*%209%2F5)%20%2B%2032")
    }
})
basic.forever(function () {
	
})
