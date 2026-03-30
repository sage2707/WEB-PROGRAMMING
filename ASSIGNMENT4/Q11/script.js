function calculateSI() {
    var p = parseFloat(document.getElementById("p").value);
    var r = parseFloat(document.getElementById("r").value);
    var t = parseFloat(document.getElementById("t").value);

    var si = simpleInterest(p, r, t);

    document.getElementById("result").innerHTML = si;
}

function simpleInterest(p, r, t) {
    return (p * r * t) / 100;
}
