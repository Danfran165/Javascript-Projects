function my_Dictionary() {
    var Cat = {
        species:"Cat",
        color:"Orange",
        Breed:"Tabby",
        Age:3,
        Sound:"Meow!"

    };
    delete Cat.Age;
    document.getElementById("Dictionary").innerHTML = Cat.Age;
}