 function  myFunction() {
 while (i < 10) {
    text += "The number is " + i;
    i++;
    }
}

let text = "Hello World!";
let length = text.length;

var Instruments =["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

const fruits = ["Banana", "Orange", "Apple"];
document.getElementById("Array").innerHTML = fruits.toString();


function myFunction() {
    var carName = "Honda";
    document.getElementById("Example").innerHTML = carName;

}

function constant_function() {
    const Muscial_Instrument = {type:"guitar", brand:"Fender", color: "black"};
    Muscial_Instrument.color = "blue";
    Muscial_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Muscial_Instrument.type + " was " + Muscial_Instrument.price;
}


function array_Function() {
    var greeting = "Hello all";
    document.getElementById("Array").innerHTML = greeting;

}





var X = 82;
document.write(X);
{
    var X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);


function myFunction() {
    return Math.PI;
}

let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();