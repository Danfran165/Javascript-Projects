document.write(Bigger =(7>2) ? "Left number is bigger":"Right number is bigger");
function Ride_Function() {
var Height, Can_ride;
Height = document.getElementById("Height") .value;
Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
document.getElementById("Ride").innerHTML = Can_ride + " to ride. ";

}
class Vehicle {
    constructor(Make, Model, Year, Color) {
        this.Vehicle_Make = Make;
        this.Vehicle_Model = Model;
        this.Vehicle_Year = Year;
        this.Vehicle_Color = Color;
    }
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Jack drives a " + Jack.Vehicle_Color + "colored" + Jack.Vehicle_Model +
    "manufactured in" + Jack.Vehicle_Year;
}

function myFunction() {
document.getElementById("New_and_This").innerHTML =
"Hi there";
}

var X = "9"
var Y = "Sierra"

function saying_hi() {
    document.getElementById("Hello").innerHTML = Hello();
    function Hello() {
        var Starting_point = "Hey there";
        return Starting_point;
    }
}