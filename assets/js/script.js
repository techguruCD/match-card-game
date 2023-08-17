function resetViewPort() {

}

$(document).ready(function () {
    $(window).resize(resetViewPort);
    resetViewPort();
    let imageUrls = [
        ['./assets/image/cards-JPG/01-image-01.jpg', './assets/image/cards-JPG/01-image-02.jpg'],
        ['./assets/image/cards-JPG/02-image-01.jpg', './assets/image/cards-JPG/02-image-02.jpg'],
        ['./assets/image/cards-JPG/03-image-01.jpg', './assets/image/cards-JPG/03-image-02.jpg'],
        ['./assets/image/cards-JPG/04-image-01.jpg', './assets/image/cards-JPG/04-image-02.jpg'],
        ['./assets/image/cards-JPG/05-image-01.jpg', './assets/image/cards-JPG/05-image-02.jpg'],
        ['./assets/image/cards-JPG/06-image-01.jpg', './assets/image/cards-JPG/06-image-02.jpg'],
        ['./assets/image/cards-JPG/07-image-01.jpg', './assets/image/cards-JPG/07-image-02.jpg'],
        ['./assets/image/cards-JPG/08-image-01.jpg', './assets/image/cards-JPG/08-image-02.jpg'],
        ['./assets/image/cards-JPG/09-image-01.jpg', './assets/image/cards-JPG/09-image-02.jpg'],
    ];
    let iconUrls = [
        './assets/image/cards-JPG/01-icon.jpg',
        './assets/image/cards-JPG/02-icon.jpg',
        './assets/image/cards-JPG/03-icon.jpg',
        './assets/image/cards-JPG/04-icon.jpg',
        './assets/image/cards-JPG/05-icon.jpg',
        './assets/image/cards-JPG/06-icon.jpg',
        './assets/image/cards-JPG/07-icon.jpg',
        './assets/image/cards-JPG/08-icon.jpg',
        './assets/image/cards-JPG/09-icon.jpg'
    ];

    let game = new Game(document.getElementById("root"), {
        iconBack: './assets/image/cards-JPG/00-icons-back.jpg',
        imageBack: './assets/image/cards-JPG/00-images-back.jpg',
        images: imageUrls,
        icons: iconUrls
    });
});

