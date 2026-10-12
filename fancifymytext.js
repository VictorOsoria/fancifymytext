function bigger() {
    document.getElementById("myText").style.fontSize = "24pt";
}
function fancy() {
    document.getElementById("myText").style.fontWeight = "bold";
document.getElementById("myText").style.color = "blue";
document.getElementById("myText").style.textDecoration = "underline";

}
function boring() {
    document.getElementById("myText").style.fontWeight = "normal";
    document.getElementById("myText").style.color = "black";
    document.getElementById("myText").style.textDecoration = "none";
}
function moo() {
var text = document.getElementById("myText").value;
text = text.toUpperCase();
document.getElementById("myText").value = text;
var sentences = text.split(".");
sentences = sentences.map(function(sentence) {


if (sentence.trim() !== "") {
    var words = sentence.split(" ");
    words[words.length - 1] += "-Moo";
}
return sentence.trim() === "" ? sentence : words.join(" ");


});
text = sentences.join(".");
document.getElementById("myText").value = text;
}
