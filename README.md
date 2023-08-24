# Card Game

To use this game, cardgame.js and cardgame.css files are needed.
Below is the example of how to use it.

```
<!DOCTYPE html>
<html>
<meta charset="UTF-8">

<head>
    <link rel="stylesheet" type="text/css" href="./assets/css/cardgame.css">
</head>

<body>
    <div id="root"></div>

    <script src="./assets/plugins/jquery/jquery-3.7.0.min.js"></script>
    <script src="./assets/js/cardgame.js"></script>
    
    <script>
        $(document).ready(function () {
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

            let game = new CardGame(document.getElementById("root"), {
                language: 'en',
                titleImage: "./assets/image/icons-SVG/icon-01-temptitle.svg",
                iconBack: './assets/image/cards-JPG/00-icons-back.jpg',
                imageBack: './assets/image/cards-JPG/00-images-back.jpg',
                images: imageUrls,
                icons: iconUrls,
                instructions: {
                    'en': {
                        title: 'Instructions',
                        content: 'Instructions go here'
                    },
                    'de': {
                        title: 'Anweisungen',
                        content: 'Anweisungen finden Sie hier'
                    },
                    'fr': {
                        title: 'Instructions',
                        content: 'Les instructions vont ici'
                    },
                    'es': {
                        title: 'Instrucciones',
                        content: 'Las instrucciones van aquí'
                    },
                    'ch': {
                        title: '指示',
                        content: '说明请参见此处'
                    }
                }
            });

            game.onEmailSend = (emailAddress, emailContent) => {
                // console.warn(emailAddress);
                // console.log(emailContent);
            }
        });


    </script>
</body>

</html>
```

## Supported Functions
- CardGame(elem, options)<br>
Initializes card game.<br>
```
let game = new CardGame(document.getElementById("root"), {
    language: 'en',
    titleImage: "./assets/image/icons-SVG/icon-01-temptitle.svg",
    iconBack: './assets/image/cards-JPG/00-icons-back.jpg',
    imageBack: './assets/image/cards-JPG/00-images-back.jpg',
    images: imageUrls,
    icons: iconUrls,
    instructions: {
        'en': {
            title: 'Instructions',
            content: 'Instructions go here'
        },
        'de': {
            title: 'Anweisungen',
            content: 'Anweisungen finden Sie hier'
        },
        'fr': {
            title: 'Instructions',
            content: 'Les instructions vont ici'
        },
        'es': {
            title: 'Instrucciones',
            content: 'Las instrucciones van aquí'
        },
        'ch': {
            title: '指示',
            content: '说明请参见此处'
        }
    }
});
```
- setTitleIamge(url)<br>
```
let game = new CardGame(elem);
game.setTitleImage('./assets/titleImage.png');
```
- setImageBack(url)
```
let game = new CardGame(elem);
game.setImageBack('./assets/imageBack.png');
```
- setIconBack(url)
```
let game = new CardGame(elem);
game.setIconBack('./assets/imageBack.png');
```
- setImages(urls)
The length of urls should be 9.
```
let game = new CardGame(elem);
game.setImages([
    './assets/cardImage0.png',
    './assets/cardImage1.png',
    './assets/cardImage2.png',
    './assets/cardImage3.png',
    './assets/cardImage4.png',
    './assets/cardImage5.png',
    './assets/cardImage6.png',
    './assets/cardImage7.png',
    './assets/cardImage8.png'
    ]);
```
- setIcons(urls)
The length of urls should be 9.
```
let game = new CardGame(elem);
game.setIcons([
    './assets/cardIcon0.png',
    './assets/cardIcon1.png',
    './assets/cardIcon2.png',
    './assets/cardIcon3.png',
    './assets/cardIcon4.png',
    './assets/cardIcon5.png',
    './assets/cardIcon6.png',
    './assets/cardIcon7.png',
    './assets/cardIcon8.png'
    ])
```
- setLanguage(lang)
Supported languages are `en`, `de`, `fr`, `es` and `ch`.
```
let game = new CardGame(elem);
game.setLanguage('en');
```
- setInstructions(instructions)
```
let game = new CardGame(elem);
game.setInstructions({
		'en': {
			title: 'Instructions',
			content: 'Instructions go here'
		},
		'de': {
			title: 'Anweisungen',
			content: 'Anweisungen finden Sie hier'
		},
		'fr': {
			title: 'Instructions',
			content: 'Les instructions vont ici'
		},
		'es': {
			title: 'Instrucciones',
			content: 'Las instrucciones van aquí'
		},
        'pt': {
                title: 'Instruções',
                content: 'As instruções vão aqui'
        },
        'tr': {
            title: 'Talimatlar',
            content: 'Talimatlar buraya gelecek'
        }
	});
```

## Extra
If you click send email button, it calls onEmailSend(emailAddress, emailContent) function.
To handle it, you need to add the following code.
```
let game = new CardGame(elem, options);
game.onEmailSend = (emailAddress, emailContent) => {
    // Add your code...
}
```