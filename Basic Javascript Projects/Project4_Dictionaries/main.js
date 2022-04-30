function my_Dictionary() {
    var Cat = {
        species:"Cat",
        color:"Orange",
        Breed:"Tabby",
        Age:3,
        Sound:"Meow!"

    };
    delete Cat.Age; //this is the delete funtion which will make the browser come up undefined
    document.getElementById("Dictionary").innerHTML = Cat.Age;
}