function displayGif(letter) {
    var x = "<img src=\"img/Hira/" + letter + ".gif\">";
    x = x + "<div class=\"pronounce\">Pronounce: " + letter + "</div>";
    document.getElementById("hiragif").innerHTML = x;
}