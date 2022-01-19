//lommeregner

let output = null
let indeks = 0
let storedvalues = [0,0]
let lastoberation = ""
let safeoutput = null
var results = []

function pressedvalue(value) {
    safeoutput = safeoutput + value + ""
    output = output + value + ""
    storedvalues[indeks] = parseFloat(safeoutput)
    document.getElementById("output").innerHTML = output
}
function clearall(){
    output = null
    storedvalues = [0,0]
    safeoutput = ""
    indeks = 0
    document.getElementById("output").innerHTML = output
}
function add() {
    if (lastoberation == "+" && indeks >= 1) {
        storedvalues[0] = storedvalues[0] + storedvalues[1]
        storedvalues[1] = 0
        safeoutput = null
        output = storedvalues[0] + " + "
        document.getElementById("output").innerHTML = output
        return
    }
    safeoutput = null
    output = output + " + "
    indeks++
    lastoberation = "+"
    document.getElementById("output").innerHTML = output
}
function subtract() {
    if (lastoberation == "-" && indeks >= 1) {
        storedvalues[0] = storedvalues[0] - storedvalues[1]
        storedvalues[1] = 0
        safeoutput = null
        output = storedvalues[0] + " - "
        document.getElementById("output").innerHTML = output
        return
    }
    safeoutput = null
    output = output + " - "
    indeks++
    lastoberation = "-"
    document.getElementById("output").innerHTML = output
}
function multiply() {
    if (lastoberation == "*" && indeks >= 1) {
        storedvalues[0] = storedvalues[0] * storedvalues[1]
        storedvalues[1] = 0
        safeoutput = null
        output = storedvalues[0] + " * "
        document.getElementById("output").innerHTML = output
        return
    }
    safeoutput = null
    output = output + " * "
    indeks++
    lastoberation = "*"
    document.getElementById("output").innerHTML = output
}
function devide() {
    if (lastoberation == "/" && indeks >= 1) {
        storedvalues[0] = storedvalues[0] / storedvalues[1]
        storedvalues[1] = 0
        safeoutput = null
        output = storedvalues[0] + " / "
        document.getElementById("output").innerHTML = output
        return
    }
    safeoutput = null
    output = output + " / "
    indeks++
    lastoberation = "/"
    document.getElementById("output").innerHTML = output
}
function modulos() {
    if (lastoberation == "%" && indeks >= 1) {
        storedvalues[0] = storedvalues[0] % storedvalues[1]
        storedvalues[1] = 0
        safeoutput = null
        output = storedvalues[0] + " % "
        document.getElementById("output").innerHTML = output
        return
    }
    safeoutput = null
    output = output + " % "
    indeks++
    lastoberation = "%"
    document.getElementById("output").innerHTML = output
}
function equals() {
    let finalresult = null
    if (lastoberation == "+") {
        finalresult = storedvalues[0] + storedvalues[1]
        output = finalresult + ""
        storedvalues = [0, 0]
    } else if (lastoberation == "-") {
        finalresult = storedvalues[0] - storedvalues[1]
        output = finalresult + ""
        storedvalues = [0, 0]
    } else if (lastoberation == "*") {
        finalresult = storedvalues[0] * storedvalues[1]
        output = finalresult + ""
        storedvalues = [0, 0]
    } else if (lastoberation == "/") {
        finalresult = storedvalues[0] / storedvalues[1]
        output = finalresult + ""
        storedvalues = [0, 0]
    } else if (lastoberation == "%") {
        finalresult = storedvalues[0] % storedvalues[1]
        output = finalresult + ""
        storedvalues = [0, 0]
    }else {
        return
    }
    safeoutput = null
    document.getElementById("output").innerHTML = output
    results.push(output)
    output = ""
    indeks = 0
}
