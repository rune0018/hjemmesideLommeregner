//lommeregner

let output = null
let indeks = 0
let storedvalues = [0,0]
let lastoberation = ""
let safeoutput = null
var results = []
var offset = 0;

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
    showresults()
    output = ""
    indeks = 0
    lastoberation = null
}
function showresults() {
    document.getElementById("results").innerHTML = ""

    for (let i = 0; i < results.length && i+offset<results.length && i<5; i++) {
        document.getElementById("results").innerHTML = document.getElementById("results").innerHTML + results[i + offset] + "<br />"
    }
}
function scroolUp() {
    if (offset > 0) {
        offset--
        showresults()
    }
}
function scroolDown() {
    if (offset < results.length-1) {
        offset++
        showresults()
    }
}
function getTopresult() {
    if (storedvalues[0] == null) {
        storedvalues[0] = results[offset]
        output = storedvalues[0] + ""
    } else if(lastoberation != null){
        storedvalues[1] = parseFloat(storedvalues[1] + results[offset] + "")
        output = output + storedvalues[1]
    }
    document.getElementById("output").innerHTML = output
}