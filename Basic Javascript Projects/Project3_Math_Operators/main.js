function addition_Function() {
    var addition = 4 + 6;
    document.getElementById("Math") .innerHTML = " 4 + 6 = " + addition;
}

function subtraction_Function() {
    var subtraction = 6 - 4;
    document.getElementById("Math").innerHTML = "6 - 4 =" + subtraction;
}

function multiplication() {
    var multiplication = 8 * 7;
    document.getElementById("Math").innerHTML = "8 * 7 = " + simple_Math;
}

function division() {
    var division = 48 / 6;
    document.getElementById("Math").innerHTML = "48 / 6 ="  + simple_Math;
}

function more_Math() {
    var simple_Math = (1+2) * 10 / 2 -5;
    document.getElementById("Math").innerHTML = `1 plus 2, multiplied by 10
    divided in half and then subtracted by 5 equals ` + simple_Math;

}

function modulus_Operator () {
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML = "when you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator () {
    var x = 10;
    document.getElementById("Math") .innerHTML = -x;
}

var y = 5;
y++;
document.write(y);

var z = 5.25;
z--;
document.write(z);

window.alert(Math.random());

window.alert(Math.random() * 100);

Math.SQRT2