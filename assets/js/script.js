function resetViewPort() {

}

$(document).ready(function() {
    $(window).resize(resetViewPort);
    resetViewPort();
    let game = Game(document.getElementById("root"));
});

