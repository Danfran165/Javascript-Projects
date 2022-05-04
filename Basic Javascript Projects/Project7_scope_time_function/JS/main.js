if (1 < 2) {
    document.write("The left number is smaller than the right number")

}
function get_Date() {
    if (new Date() .getHours() < 18) {
        document.getElementById("Greeting") .innerHTML = "How are you today?";

    }
}

function full_sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence. ";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}
