function CardGame(gamePanel, options) {

    this.initHtml = () => {
        $(gamePanel).addClass('card-game-panel');
        let captionHtml =
            `<div class="game-caption">
                <div class="game-symbol-container">
                    <img class="player-mode-symbol" src="./assets/image/icons-SVG/icon-02-1p.svg">
                    <img class="card-mode-symbol" src="./assets/image/icons-SVG/icon-04-18game.svg">
                </div>
                <div class="game-title">
                    <img src="./assets/image/icons-SVG/icon-01-temptitle.svg">
                </div>
            </div>`;
        let modePanelHtml =
            `<div class="mode-panel panel">
                <div class="mode-container">
                    <div class="mode-pane player-mode-pane">
                        <div class="mode-item player-mode custom-cursor-pointer" data-mode="1">
                            <div class="mode-image-container">
                                <img src="./assets/image/icons-SVG/icon-02-1p.svg">
                            </div>
                            <div class="mode-caption">1P</div>
                        </div>
                        <div class="mode-item player-mode custom-cursor-pointer" data-mode="2">
                            <div class="mode-image-container">
                                <img src="./assets/image/icons-SVG/icon-03-2p.svg">
                            </div>
                            <div class="mode-caption">1P v 2P</div>
                        </div>
                    </div>
                    <div class="mode-pane card-mode-pane">
                        <div class="card-mode-container">
                            <div class="mode-item card-mode custom-cursor-pointer" data-mode="18">
                                <div class="mode-image-container">
                                    <img src="./assets/image/icons-SVG/icon-04-18game.svg">
                                </div>
                            </div>
                            <div class="mode-item card-mode custom-cursor-pointer" data-mode="36">
                                <div class="mode-image-container">
                                    <img src="./assets/image/icons-SVG/icon-05-36game.svg">
                                </div>
                            </div>
                        </div>
                        <div class="tool-bar-item custom-cursor-pointer" data-action="back">
                            <img src="./assets/image/icons-SVG/icon-08-back.svg">
                        </div>
                    </div>
                </div>
                <div class="intro-pane">
                    <div class="intro-inner-pane">
                        <div class="lang-mode-container">
                            <div class="lang-mode-item custom-cursor-pointer active" data-lang="en">
                                <img src="./assets/image/icons-SVG/icon-15-flag-gb.svg">
                            </div>
                            <div class="lang-mode-item custom-cursor-pointer" data-lang="de">
                                <img src="./assets/image/icons-SVG/icon-17-flag-de.svg">
                            </div>
                            <div class="lang-mode-item custom-cursor-pointer" data-lang="fr">
                                <img src="./assets/image/icons-SVG/icon-14-flag-fr.svg">
                            </div>
                            <div class="lang-mode-item custom-cursor-pointer" data-lang="es">
                                <img src="./assets/image/icons-SVG/icon-18-flag-es.svg">
                            </div>
                            <div class="lang-mode-item custom-cursor-pointer" data-lang="ch">
                                <img src="./assets/image/icons-SVG/icon-16-flag-ch.svg">
                            </div>
                        </div>
                        <div class="intro-container" data-lang="en">
                            <div class="intro-title">
                                INSTRUCTIONS
                            </div>
                            <div class="intro-content">
                                Instructions go here.
                            </div>
                        </div>
                        <div class="intro-container" data-lang="de">
                            <div class="intro-title">
                                INSTRUCTIONS
                            </div>
                            <div class="intro-content">
                                Instructions go here.
                            </div>
                        </div>
                        <div class="intro-container" data-lang="fr">
                            <div class="intro-title">
                                INSTRUCTIONS
                            </div>
                            <div class="intro-content">
                                Instructions go here.
                            </div>
                        </div>
                        <div class="intro-container" data-lang="es">
                            <div class="intro-title">
                                INSTRUCTIONS
                            </div>
                            <div class="intro-content">
                                Instructions go here.
                            </div>
                        </div>
                        <div class="intro-container" data-lang="ch">
                            <div class="intro-title">
                                INSTRUCTIONS
                            </div>
                            <div class="intro-content">
                                Instructions go here.
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
        let resultPanelHtml =
            `<div class="result-panel panel">
                <div class="result-container">
                    <div class="result-inner-content-left">
                        <img src="./assets/image/icons-SVG/icon-10-win.svg">
                    </div>
                    <div class="result-inner-content-right">
                        <div class="result-item result-item-click" data-mode="1">
                            <img src="./assets/image/icons-SVG/icon-12-click.svg">
                            <span>37</span>
                        </div>
                        <div class="result-item result-item-time" data-mode="1">
                            <img src="./assets/image/icons-SVG/icon-11-time.svg">
                            <span>1:19</span>
                        </div>
                        <div class="result-item" data-mode="2" data-player='1'>
                            <img src="./assets/image/icons-SVG/icon-06-1phollow.svg">
                            <span>37</span>
                        </div>
                        <div class="result-item" data-mode="2" data-player='2'>
                            <img src="./assets/image/icons-SVG/icon-07-2phollow.svg">
                            <span>1:19</span>
                        </div>
                        <div class="result-item">
                            <img class="custom-cursor-pointer" data-action="back" src="./assets/image/icons-SVG/icon-08-back.svg">
                            <img class="custom-cursor-pointer" data-action="restart" src="./assets/image/icons-SVG/icon-09-restart.svg">
                        </div>
                    </div>
                </div>
                <div class="mail-container">
                    <img src="./assets/image/icons-SVG/icon-13-email.svg">
                    <input class="mail-input" type="text">
                    <img class="mail-send-btn custom-cursor-pointer" src="./assets/image/send.png">
                </div>
            </div>`;

        let toolBarHtml =
            `<div class="tool-bar">
                <div class="tool-bar-item custom-cursor-pointer" data-action="back">
                    <img src="./assets/image/icons-SVG/icon-08-back.svg">
                </div>
                <div class="tool-bar-item custom-cursor-pointer" data-action="restart">
                    <img src="./assets/image/icons-SVG/icon-09-restart.svg">
                </div>
                <div class="tool-bar-item tool-bar-item-data tool-bar-item-click" data-mode="1">
                    <img src="./assets/image/icons-SVG/icon-12-click.svg">
                    <span>3</span>
                </div>
                <div class="tool-bar-item tool-bar-item-data tool-bar-item-timer" data-mode="1">
                    <img src="./assets/image/icons-SVG/icon-11-time.svg">
                    <span>0:37</span>
                </div>
                <div class="tool-bar-item tool-bar-item-data tool-bar-item-match-player" data-mode="2" data-turn="0">
                    <img src="./assets/image/icons-SVG/icon-06-1phollow.svg">
                    <span>0:37</span>
                </div>
                <div class="tool-bar-item tool-bar-item-data tool-bar-item-match-player" data-mode="2" data-turn="1">
                    <img src="./assets/image/icons-SVG/icon-07-2phollow.svg">
                    <span>0:37</span>
                </div>
            </div>`;

        let getCardBoardHtml = (mode) => {
            let row, col;
            if (mode == '18') {
                row = 3;
                col = 6;
            } else {
                row = 4;
                col = 9;
            }
            let cardBoardHtml = ``;
            for (let i = 0; i < row; i++) {
                let cardRowHtml = ``;
                for (let j = 0; j < col; j++) {
                    cardRowHtml +=
                        `<div class="card-item ${(i + j) % 2 ? 'card-icon' : 'card-image'}">
                            <div class="card-item-back">
                                <img class="card-inner-item-back" src="./assets/image/cards-JPG/00-icons-back.jpg">
                            </div>
                            <div class="card-item-content">
                                <img class="card-inner-item-content" src="./assets/image/cards-JPG/01-icon.jpg">
                            </div>
                        </div>`;
                }
                cardBoardHtml += `<div class="card-row">${cardRowHtml}</div>`;
            }
            return `<div class="card-board-mode-${mode} card-board-content active">${cardBoardHtml}</div>`
        }
        let cardBoardHtml =
            `<div class="card-board-container">
                ${getCardBoardHtml(18)}
                ${getCardBoardHtml(36)}
            </div>`;

        let cardPanelHtml =
            `<div class="card-panel panel">
                ${toolBarHtml}
                ${cardBoardHtml}
            </div>`;

        let panelContainerHtml =
            `<div class="panel-container">
                ${modePanelHtml}
                ${cardPanelHtml}
                ${resultPanelHtml}
            </div>`;

        let totalHtml = `${captionHtml}${panelContainerHtml}`;
        $(gamePanel).html(totalHtml);
    }
    this.initHtml();

    let panels = {};
    panels.mode = $(gamePanel).find('.mode-panel')[0];
    panels.card = $(gamePanel).find('.card-panel')[0];
    panels.result = $(gamePanel).find('.result-panel')[0];

    this.getInitCardBoardStatus = () => {
        return {
            selectedItems: null,
            clicks: 0,
            matches: [0, 0],
            time: 0,
            turn: 0,
            lock: false,
            intervalID: 0
        }
    }

    this.gameStatus = {
        currentPanel: 'mode',
        subPanel: 'player',
        playerMode: '1',
        cardMode: '18',
        images: [],
        icons: [],
        cardBoard: this.getInitCardBoardStatus()
    }

    this.setTitleIamge = (url) => {
        $(gamePanel).find('.game-caption .game-title img').attr('src', url);
    }

    this.setImageBack = (url) => {
        $(gamePanel).find('.card-item.card-icon .card-inner-item-back').attr('src', url);
    }

    this.setIconBack = (url) => {
        $(gamePanel).find('.card-item.card-image .card-inner-item-back').attr('src', url);
    }

    this.setImages = (images) => {
        this.gameStatus.images = images;
    }

    this.setIcons = (icons) => {
        this.gameStatus.icons = icons;
    }

    this.setLanguage = (lang) => {
        $(gamePanel).find('.lang-mode-item').removeClass('active');
        $(gamePanel).find(`.lang-mode-item[data-lang=${lang}]`).addClass('active');
        $(gamePanel).find('.intro-container').removeClass('active');
        $(gamePanel).find(`.intro-container[data-lang=${lang}]`).addClass('active');
    }

    this.setInstructions = (instructions) => {
        let langs = ['en', 'de', 'fr', 'es', 'ch'];
        langs.forEach(lang => {
            let instruction = instructions[lang];
            if (instruction) {
                $(panels.mode).find(`.intro-container[data-lang=${lang}] .intro-title`).html(instruction.title);
                $(panels.mode).find(`.intro-container[data-lang=${lang}] .intro-content`).html(instruction.content);
            }
        });
    }

    this.setPanel = (panel) => {
        $(gamePanel).find('.panel').removeClass('active');
        $(panels[panel]).addClass('active');
        this.gameStatus.currentPanel = panel;
        if (panel != 'mode') {
            $(gamePanel).find('.game-symbol-container').addClass('card-mode-active');
        }
        if (panel != 'card') {
            clearInterval(this.gameStatus.cardBoard.intervalID);
        }
    }

    this.setSubPanel = (subPanel) => {
        if (subPanel == 'player') {
            $(gamePanel).find('.game-symbol-container').removeClass('player-mode-active');
            $(gamePanel).find('.game-symbol-container').removeClass('card-mode-active');
            $(panels.mode).find('.mode-container').removeClass('card-mode-active');
        } else if (subPanel == 'card') {
            $(gamePanel).find('.game-symbol-container').addClass('player-mode-active');
            $(gamePanel).find('.game-symbol-container').removeClass('card-mode-active');
            $(panels.mode).find('.mode-container').addClass('card-mode-active');
        } else {
            $(gamePanel).find('.game-symbol-container').addClass('player-mode-active');
            $(gamePanel).find('.game-symbol-container').addClass('card-mode-active');
        }
        this.gameStatus.subPanel = subPanel;
    }

    this.setPaleyrMode = (playerMode) => {
        this.gameStatus.playerMode = playerMode;
        if (playerMode == '1') {
            $(gamePanel).find('.game-symbol-container .player-mode-symbol').attr('src', './assets/image/icons-SVG/icon-02-1p.svg');
            $(panels.card).find('.tool-bar .tool-bar-item[data-mode=1]').removeClass('hidden');
            $(panels.card).find('.tool-bar .tool-bar-item[data-mode=2]').addClass('hidden');
            $(panels.result).find('.result-item[data-mode=1]').removeClass('hidden');
            $(panels.result).find('.result-item[data-mode=2]').addClass('hidden');
        }
        else {
            $(gamePanel).find('.game-symbol-container .player-mode-symbol').attr('src', './assets/image/icons-SVG/icon-03-2p.svg');
            $(panels.card).find('.tool-bar .tool-bar-item[data-mode=1]').addClass('hidden');
            $(panels.card).find('.tool-bar .tool-bar-item[data-mode=2]').removeClass('hidden');
            $(panels.result).find('.result-item[data-mode=1]').addClass('hidden');
            $(panels.result).find('.result-item[data-mode=2]').removeClass('hidden');
        }
    }

    this.setCardMode = (cardMode) => {
        this.gameStatus.cardMode = cardMode;
        if (cardMode == '18') {
            $(gamePanel).find('.game-symbol-container .card-mode-symbol').attr('src', './assets/image/icons-SVG/icon-04-18game.svg');
            $(gamePanel).find('.card-board-mode-18').addClass('active');
            $(gamePanel).find('.card-board-mode-36').removeClass('active');
        }
        else if (cardMode == '36') {
            $(gamePanel).find('.game-symbol-container .card-mode-symbol').attr('src', './assets/image/icons-SVG/icon-05-36game.svg');
            $(gamePanel).find('.card-board-mode-18').removeClass('active');
            $(gamePanel).find('.card-board-mode-36').addClass('active');
        }
    }

    this.back = () => {
        if (this.gameStatus.currentPanel == 'mode') {
            this.setSubPanel('player')
            return;
        }
        if (this.gameStatus.currentPanel == 'card') {
            this.setSubPanel('card');
        } else {
            this.setSubPanel('player');
        }
        this.setPanel('mode');
    }

    this.setOptions = (options) => {
        if (options) {
            if (options.language)
                this.setLanguage(options.language)
            if (options.titleImage)
                this.setTitleIamge(options.titleImage);
            if (options.iconBack)
                this.setIconBack(options.iconBack);
            if (options.imageBack)
                this.setIconBack(options.imageBack);
            if (options.images)
                this.setImages(options.images);
            if (options.icons)
                this.setIcons(options.icons);
            if (options.instructions)
                this.setInstructions(options.instructions);
        }
    }

    this.getFormatedTime = () => {
        let passedMins = Math.floor(this.gameStatus.cardBoard.time / 60).toString().padStart(2, '0');
        let passedSecs = (this.gameStatus.cardBoard.time % 60).toString().padStart(2, '0');
        return `${passedMins}:${passedSecs}`;
    }

    this.renderCardBoardStatus = () => {
        $(panels.card).find('.tool-bar .tool-bar-item.tool-bar-item-click span').html(`${this.gameStatus.cardBoard.clicks}`);
        $(panels.result).find('.result-item.result-item-click span').html(`${this.gameStatus.cardBoard.clicks}`);

        $(panels.card).find('.tool-bar .tool-bar-item.tool-bar-item-timer span').html(this.getFormatedTime());
        $(panels.result).find('.result-item.result-item-time span').html(this.getFormatedTime());

        $(panels.card).find(`.tool-bar .tool-bar-item.tool-bar-item-match-player[data-turn=${this.gameStatus.cardBoard.turn}]`).addClass('active');
        $(panels.card).find(`.tool-bar .tool-bar-item.tool-bar-item-match-player[data-turn=${1 - this.gameStatus.cardBoard.turn}]`).removeClass('active');
        $(panels.card).find('.tool-bar .tool-bar-item.tool-bar-item-match-player[data-turn=0] span').html(`${this.gameStatus.cardBoard.matches[0]}`);
        $(panels.card).find('.tool-bar .tool-bar-item.tool-bar-item-match-player[data-turn=1] span').html(`${this.gameStatus.cardBoard.matches[1]}`);
        $(panels.result).find('.result-item[data-player=1] span').html(`${this.gameStatus.cardBoard.matches[0]}`);
        $(panels.result).find('.result-item[data-player=2] span').html(`${this.gameStatus.cardBoard.matches[1]}`);

        if ((this.gameStatus.cardBoard.matches[0] + this.gameStatus.cardBoard.matches[1]) * 2 == this.gameStatus.cardMode) {
            if (this.gameStatus.cardBoard.matches[0] > this.gameStatus.cardBoard.matches[1]) {
                $(panels.result).find('.result-item[data-player=1]').removeClass('result-item-lose');
                $(panels.result).find('.result-item[data-player=2]').addClass('result-item-lose');
            } else {
                $(panels.result).find('.result-item[data-player=1]').addClass('result-item-lose');
                $(panels.result).find('.result-item[data-player=2]').removeClass('result-item-lose');
            }
        }
    }

    this.generateRandomArray = (initArray) => {
        let array = [...initArray];
        for (let i = initArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }

        return array;
    }

    this.initCardBoard = () => {
        let imageArray = [];
        let iconArray = [];
        if (this.gameStatus.cardMode == '18') {
            imageArray = this.generateRandomArray(Array.from({ length: 9 }, (_, index) => index));
            iconArray = this.generateRandomArray(Array.from({ length: 9 }, (_, index) => index));
        }

        if (this.gameStatus.cardMode == '36') {
            imageArray = this.generateRandomArray(Array.from({ length: 18 }, (_, index) => index));
            iconArray = this.generateRandomArray(Array.from({ length: 18 }, (_, index) => index));
        }
        let imageItemArray = $(panels.card).find(`.card-board-container .card-board-mode-${this.gameStatus.cardMode} .card-item.card-image`);
        let iconItemArray = $(panels.card).find(`.card-board-container .card-board-mode-${this.gameStatus.cardMode} .card-item.card-icon`);
        for (let i = 0; i < imageArray.length; i++) {
            let imageIndex = imageArray[i] % 9;
            let iconIndex = iconArray[i] % 9;
            $(imageItemArray[i]).find('.card-item-content .card-inner-item-content').attr('src', this.gameStatus.images[imageIndex][Math.floor(imageArray[i] / 9)]);
            $(iconItemArray[i]).find('.card-item-content .card-inner-item-content').attr('src', this.gameStatus.icons[iconIndex]);

            $(imageItemArray[i]).attr('data-index', imageIndex);
            $(iconItemArray[i]).attr('data-index', iconIndex);
        }
        $(panels.card).find(`.card-board-container .card-board-mode-${this.gameStatus.cardMode} .card-item.active`).removeClass('active');
        $(panels.card).find(`.card-board-container .card-board-mode-${this.gameStatus.cardMode} .card-item.matched`).removeClass('matched');

        clearInterval(this.gameStatus.cardBoard.intervalID);

        this.gameStatus.cardBoard = this.getInitCardBoardStatus();
        this.renderCardBoardStatus();

        if (this.gameStatus.playerMode == '1') {
            let startTime = (new Date()).getTime();
            this.gameStatus.cardBoard.intervalID = setInterval(() => {
                let currentTime = (new Date()).getTime();
                this.gameStatus.cardBoard.time = Math.floor((currentTime - startTime) / 1000);
                this.renderCardBoardStatus();
            }, 100);
        }
    }

    this.getEmailContent = () => {
        return`<div
            style="min-width: 550px; height: 300px; justify-content: center; display: flex; border-radius: 1000px; background-color: rgb(233, 239, 240); align-items: center; font-family: 'Montserrat', sans-serif;">
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;600;900&display=swap" rel="stylesheet">
            <div style="display: flex; width: 200px; height: 200px; padding:50px; padding-left: 0px;">
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <defs>
                        <style>
                            .cls-1 {
                                stroke-width: 0px;
                            }
                        </style>
                    </defs>
                    <path class="cls-1"
                        d="m297.34,219.26c-26.95-26.95-54.62-50.09-77.92-65.17-28.68-18.55-46.64-22.58-56.55-12.68-1.89,1.89-3.27,4.09-4.14,6.59L4.38,497.95c-1.66,3.77-.84,8.18,2.07,11.1,1.92,1.92,4.48,2.94,7.09,2.94,1.35,0,2.71-.27,4-.84l351.15-153.34c2.46-.87,4.62-2.23,6.49-4.1,9.9-9.9,5.87-27.87-12.68-56.55-15.07-23.3-38.22-50.97-65.17-77.92h0Zm-25.31,158.93l-26.35-26.35c-3.91-3.91-10.25-3.91-14.15,0-3.91,3.91-3.91,10.25,0,14.15l20.8,20.8-98.35,42.95-67.75-67.75,43.25-98.05,45.44,45.44c1.95,1.95,4.52,2.93,7.08,2.93s5.12-.98,7.08-2.93c3.91-3.91,3.91-10.25,0-14.15l-50.93-50.93,27.73-62.87c2.61,5.06,5.83,10.56,9.69,16.53,15.08,23.3,38.22,50.97,65.17,77.92,26.95,26.95,54.62,50.09,77.92,65.17,5.92,3.83,11.37,7.03,16.4,9.63l-63.01,27.52Zm11.16-144.77c23.79,23.79,44.79,48.49,59.13,69.54,13.83,20.31,17.54,31.51,18.03,35.92-4.42-.49-15.61-4.19-35.92-18.03-21.05-14.34-45.75-35.34-69.54-59.13-23.79-23.79-44.79-48.49-59.13-69.54-13.83-20.31-17.54-31.51-18.03-35.92,4.42.49,15.61,4.19,35.92,18.03,21.05,14.34,45.75,35.34,69.54,59.13h0Zm-205.63,148.22l56.71,56.71-101.21,44.2,44.51-100.91Z" />
                    <path class="cls-1"
                        d="m419.49,106.29c-1.25-7.26-1.31-9.68.7-11.69,2.02-2.02,4.43-1.96,11.7-.71,7.8,1.35,19.6,3.38,29.25-6.28,3.91-3.91,3.91-10.25,0-14.15-3.91-3.91-10.25-3.91-14.15,0-2.02,2.02-4.44,1.96-11.7.71-7.8-1.35-19.6-3.38-29.25,6.28-9.66,9.66-7.62,21.45-6.27,29.25,1.25,7.26,1.31,9.68-.7,11.7-2.02,2.02-4.43,1.96-11.69.7-7.8-1.35-19.59-3.38-29.25,6.28-9.66,9.66-7.62,21.45-6.27,29.25,1.26,7.26,1.31,9.68-.7,11.69-2.02,2.02-4.43,1.96-11.69.7-7.8-1.35-19.59-3.38-29.25,6.28-3.91,3.91-3.91,10.25,0,14.15,1.95,1.95,4.51,2.93,7.08,2.93s5.12-.98,7.08-2.93c2.02-2.02,4.43-1.96,11.69-.7,7.8,1.35,19.59,3.38,29.25-6.28,9.66-9.66,7.62-21.45,6.27-29.25-1.26-7.26-1.31-9.68.7-11.69,2.02-2.02,4.43-1.96,11.69-.7,7.8,1.35,19.6,3.38,29.25-6.28,9.66-9.66,7.63-21.45,6.28-29.26h0Z" />
                    <path class="cls-1"
                        d="m221.16,117.17c1.95,1.95,4.52,2.93,7.08,2.93s5.12-.98,7.08-2.93c24.89-24.89,24.89-65.4,0-90.29-3.91-3.91-10.24-3.91-14.15,0-3.91,3.91-3.91,10.24,0,14.15,17.09,17.09,17.09,44.9,0,61.99-3.91,3.91-3.91,10.25,0,14.15Z" />
                    <path class="cls-1"
                        d="m452.94,297.3c-17.05,0-33.08,6.64-45.14,18.7-3.91,3.91-3.91,10.25,0,14.15,3.91,3.91,10.25,3.91,14.15,0,8.28-8.28,19.28-12.84,30.99-12.84s22.71,4.56,30.99,12.84c1.95,1.95,4.52,2.93,7.08,2.93s5.12-.98,7.08-2.93c3.91-3.91,3.91-10.25,0-14.15-12.06-12.06-28.09-18.7-45.14-18.7h0Z" />
                    <path class="cls-1"
                        d="m483.06,50.04c5.53,0,10.01-4.48,10.01-10.01V10.01c0-5.53-4.48-10.01-10.01-10.01s-10.01,4.48-10.01,10.01v30.03c0,5.53,4.48,10.01,10.01,10.01Z" />
                    <path class="cls-1"
                        d="m304.38,70.14h9.93v9.93c0,5.53,4.48,10.01,10.01,10.01s10.01-4.48,10.01-10.01v-9.93h9.93c5.53,0,10.01-4.48,10.01-10.01s-4.48-10.01-10.01-10.01h-9.93v-9.93c0-5.53-4.48-10.01-10.01-10.01s-10.01,4.48-10.01,10.01v9.93h-9.93c-5.53,0-10.01,4.48-10.01,10.01s4.48,10.01,10.01,10.01Z" />
                    <path class="cls-1"
                        d="m498.46,141.12h-30.03c-5.53,0-10.01,4.48-10.01,10.01s4.48,10.01,10.01,10.01h30.03c5.53,0,10.01-4.48,10.01-10.01s-4.48-10.01-10.01-10.01Z" />
                    <path class="cls-1"
                        d="m433.41,263.22c16.56,0,30.03-13.47,30.03-30.03s-13.47-30.03-30.03-30.03-30.03,13.47-30.03,30.03,13.47,30.03,30.03,30.03Zm0-40.03c5.52,0,10.01,4.49,10.01,10.01s-4.49,10.01-10.01,10.01-10.01-4.49-10.01-10.01,4.49-10.01,10.01-10.01Z" />
                    <path class="cls-1"
                        d="m210.3,320.61c-5.53,0-10.01,4.48-10.01,10.01s4.48,10.01,10.01,10.01h.01c5.53,0,10-4.48,10-10.01s-4.49-10.01-10.01-10.01h0Z" />
                    <path class="cls-1"
                        d="m434.4,360.54c-5.53,0-10.01,4.48-10.01,10.01s4.48,10.01,10.01,10.01h.01c5.53,0,10-4.48,10-10.01s-4.49-10.01-10.01-10.01Z" />
                    <path class="cls-1"
                        d="m494.46,200.17c-5.53,0-10.01,4.48-10.01,10.01s4.48,10.01,10.01,10.01h.01c5.53,0,10-4.48,10-10.01s-4.49-10.01-10.01-10.01Z" />
                    <path class="cls-1"
                        d="m364.01,230.89c-5.53,0-10.01,4.48-10.01,10.01s4.48,10.01,10.01,10.01h.01c5.53,0,10-4.48,10-10.01s-4.49-10.01-10.01-10.01Z" />
                    <path class="cls-1"
                        d="m283.37,131.11c-5.53,0-10.01,4.48-10.01,10.01s4.48,10.01,10.01,10.01h.01c5.53,0,10-4.48,10-10.01s-4.49-10.01-10.01-10.01Z" />
                    <path class="cls-1"
                        d="m404.47,11c-5.53,0-10.01,4.48-10.01,10.01s4.48,10.01,10.01,10.01h.01c5.53,0,10-4.48,10-10.01s-4.49-10.01-10.01-10.01Z" />
                    <path class="cls-1"
                        d="m174.19,60.05c-5.53,0-10.01,4.48-10.01,10.01s4.48,10.01,10.01,10.01h.01c5.53,0,10-4.48,10-10.01s-4.49-10.01-10.01-10.01h0Z" />
                </svg>
            </div>
            <div>
                ${this.gameStatus.playerMode == '1'?
                `<div style="display: flex; align-items: center; margin: 5px;">
                    <svg style="width:40px; height: 40px;" id="Layer_1" data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <defs>
                            <style>
                                .cls-1 {
                                    stroke-width: 0px;
                                }
                            </style>
                        </defs>
                        <path class="cls-1"
                            d="m350.71,512c-20.04,0-38.62-11.52-47.35-29.34l-.08-.16-40.74-76.27-26.93,51.41c-.23.43-.49.86-.78,1.26-9.37,13.01-25.1,17.64-36.69,17.64h-.25c-13.21-.09-26.38-5.79-36.16-15.65-10.21-10.29-15.83-23.95-15.83-38.46V152.94c0-20.48,11.54-38.57,30.12-47.19,7.06-3.28,14.49-4.94,22.08-4.94,12.06,0,23.45,4.15,32.95,12.01l.2.17,137.32,102.26c4.6,3.43,5.56,9.96,2.13,14.56-1.98,2.66-5.03,4.19-8.36,4.19-2.24,0-4.39-.71-6.2-2.06l-137.57-102.45c-.16-.12-.33-.25-.49-.39-5.76-4.86-12.62-7.43-19.85-7.43-6.15,0-11.07,1.85-13.45,2.96-8.74,4.05-18.07,13.62-18.07,28.32v269.49c0,19.8,16.18,33.2,31.29,33.3h.16c6.84,0,13.97-2.78,18.17-7.09l1.06-1.09,35.84-68.4c1.79-3.42,5.31-5.56,9.18-5.58,3.89,0,7.41,2.11,9.22,5.5l50.11,93.82c.08.15.14.26.19.38,5.24,10.92,16.47,17.96,28.62,17.96,4.59,0,9.04-.98,13.21-2.91,7.77-3.59,13.63-10.01,16.51-18.08,2.78-7.79,2.43-16.23-1-23.75l-.18-.4-50.79-90.38c-1.8-3.21-1.77-7.18.09-10.35,1.86-3.18,5.3-5.15,8.98-5.15h71.89c14.47-.75,23.53-10.57,27.19-19.51,3.76-9.17,4.13-22.84-6.11-33.71-3.94-4.17-3.74-10.77.43-14.71,1.94-1.83,4.47-2.83,7.13-2.83,2.9,0,5.59,1.16,7.58,3.27,14.24,15.1,18.16,36.51,10.23,55.88-7.88,19.23-25.56,31.66-46.15,32.43-.17,0-.28,0-.39,0h-54.02l42.22,75.13c.1.18.2.37.3.57,6.19,12.76,6.97,27.15,2.19,40.52-4.77,13.37-14.5,24.01-27.38,29.97-6.89,3.18-14.22,4.79-21.79,4.8h0ZM64.73,212.31c-4.28,0-8.08-2.57-9.67-6.55-1.03-2.58-1-5.41.1-7.96s3.12-4.53,5.7-5.56l31.22-12.49c1.24-.5,2.54-.75,3.86-.75,4.28,0,8.08,2.57,9.67,6.55,2.13,5.33-.47,11.4-5.8,13.53l-31.22,12.49c-1.24.5-2.54.75-3.86.75Zm31.2-91.58c-1.43,0-2.83-.29-4.16-.88l-33.3-14.57c-2.55-1.11-4.51-3.15-5.52-5.74-1.01-2.59-.96-5.42.16-7.96,1.66-3.79,5.41-6.24,9.55-6.24,1.43,0,2.83.29,4.16.88l33.3,14.57c5.26,2.3,7.66,8.45,5.36,13.71-1.66,3.79-5.41,6.24-9.55,6.24Zm191.51-22.9c-3.34,0-6.4-1.54-8.38-4.21-3.41-4.61-2.44-11.14,2.17-14.56l28.1-20.81c1.81-1.34,3.94-2.04,6.18-2.04,3.34,0,6.4,1.54,8.38,4.21,3.41,4.61,2.44,11.14-2.17,14.56l-28.1,20.81c-1.81,1.34-3.94,2.04-6.18,2.04Zm-138.4-34.34c-3.81,0-7.32-2.07-9.14-5.41l-17.69-32.26c-2.76-5.03-.91-11.37,4.12-14.13,1.56-.85,3.23-1.29,4.99-1.29,3.81,0,7.31,2.07,9.14,5.4l17.69,32.26c1.34,2.44,1.65,5.25.87,7.92s-2.55,4.87-4.99,6.21c-1.56.85-3.23,1.29-4.98,1.29Zm75.95-8.32c-1.11,0-2.22-.18-3.29-.54-2.64-.88-4.78-2.73-6.02-5.22-1.24-2.49-1.44-5.31-.57-7.95l11.45-34.34c1.42-4.26,5.39-7.12,9.87-7.12,1.11,0,2.22.18,3.29.54,2.64.88,4.78,2.73,6.02,5.22,1.24,2.49,1.44,5.31.56,7.95l-11.45,34.34c-1.42,4.26-5.39,7.12-9.87,7.12Z" />
                    </svg>
                    <span style="margin-left: 10px; font-size: 14pt; font-weight: 600;">${this.gameStatus.cardBoard.clicks}</span>
                </div>
                <div style="display: flex; align-items: center; margin: 5px;">
                    <svg style="width:40px; height: 40px;" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <defs>
                            <style>
                                .cls-1 {
                                    stroke-width: 0px;
                                }
                            </style>
                        </defs>
                        <path class="cls-1"
                            d="m441.1,429.01c-2.54,0-4.98-.93-6.89-2.61-4.3-3.8-4.7-10.39-.9-14.69,4.38-4.96,8.61-10.16,12.55-15.47,1.98-2.67,5.03-4.2,8.37-4.2,2.24,0,4.39.71,6.2,2.06,2.23,1.66,3.68,4.09,4.08,6.84.4,2.75-.29,5.49-1.95,7.72-4.3,5.78-8.89,11.44-13.66,16.83-1.98,2.24-4.82,3.52-7.8,3.52Z" />
                        <path class="cls-1"
                            d="m491.74,339.01c-1.04,0-2.07-.16-3.08-.47-5.48-1.69-8.56-7.53-6.87-13.01,1.95-6.3,3.65-12.78,5.06-19.26,1.03-4.75,5.3-8.2,10.15-8.2.74,0,1.49.08,2.23.24,2.72.59,5.04,2.2,6.54,4.54,1.5,2.34,2,5.12,1.41,7.84-1.53,7.05-3.39,14.1-5.51,20.97-1.36,4.39-5.35,7.34-9.94,7.34Z" />
                        <path class="cls-1"
                            d="m358.03,490.35c-4.09,0-7.82-2.41-9.5-6.13-1.14-2.53-1.23-5.36-.25-7.96.98-2.6,2.92-4.66,5.45-5.81,6.02-2.72,12.01-5.74,17.79-8.97,1.57-.88,3.27-1.32,5.06-1.32,3.78,0,7.27,2.04,9.1,5.33,1.36,2.43,1.69,5.24.93,7.91s-2.51,4.89-4.94,6.25c-6.3,3.52-12.82,6.8-19.38,9.76-1.36.61-2.8.93-4.27.93Z" />
                        <path class="cls-1"
                            d="m173.58,348.82c-2.78,0-5.39-1.08-7.36-3.05-4.06-4.06-4.06-10.66,0-14.72l79.37-79.37V89.5c0-5.74,4.67-10.41,10.41-10.41s10.41,4.67,10.41,10.41v166.5c0,2.74-1.11,5.42-3.05,7.36l-82.41,82.42c-1.97,1.97-4.58,3.05-7.36,3.05Z" />
                        <path class="cls-1"
                            d="m497.36,172.75h-104.73c-5.54,0-10.38-4.17-10.75-9.69-.41-6.06,4.41-11.12,10.38-11.12h69.17c2.79,0,4.53-3.04,3.1-5.44l-6.09-10.27c-42.2-71.19-119.77-115.41-202.45-115.41C126.32,20.81,20.81,126.32,20.81,256s105.36,235.06,234.94,235.19c.18.01.35.02.53.02h.24s.24,0,.24,0c.18,0,.35-.01.53-.02,6.55,0,13.16-.29,19.66-.83.3-.03.6-.04.9-.04,5.35,0,9.89,4.19,10.34,9.54.24,2.91-.72,5.75-2.71,7.91-1.83,1.99-4.41,3.13-7.11,3.35-6.98.57-14.06.87-21.07.88-.18-.01-.36-.02-.54-.02h-.24s-.24,0-.24,0c-.18,0-.36.01-.54.02-68.28-.07-132.47-26.69-180.76-74.98C26.63,388.67,0,324.38,0,256S26.63,123.33,74.98,74.98C123.33,26.63,187.62,0,256,0c43.05,0,85.79,11.03,123.6,31.89,37.51,20.7,69.46,50.66,92.41,86.65l10.72,16.81c2.47,3.87,8.46,2.12,8.46-2.47V55.52c0-5.54,4.17-10.38,9.69-10.75,6.06-.41,11.12,4.41,11.12,10.38v102.95c0,8.09-6.55,14.64-14.64,14.64Z" />
                    </svg>
                    <span style="margin-left: 10px; font-size: 14pt; font-weight: 600;">${this.getFormatedTime()}</span>
                </div>` :
                `<div style="display: flex; align-items: center; margin: 5px;">
                    <svg style="width: 40px; height: 40px;" id="Layer_1" data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <defs>
                            <style>
                                .cls-1,
                                .cls-2 {
                                    stroke-width: 0px;
                                }

                                .cls-2 {
                                    fill: #e9eff0;
                                }
                            </style>
                        </defs>
                        <path class="cls-2"
                            d="m256,10C120.02,10,10,120.04,10,256s109.84,246,246,246,246-110.92,246-246S391.96,10,256,10Z" />
                        <path class="cls-1"
                            d="m166,196c0,49.63,40.37,90,90,90s90-40.37,90-90-40.37-90-90-90c-49.63,0-90,40.37-90,90Zm160,0c0,38.6-31.4,70-70,70s-70-31.4-70-70,31.4-70,70-70,70,31.4,70,70Z" />
                        <circle class="cls-1" cx="440" cy="92" r="10" />
                        <path class="cls-1"
                            d="m256,512c141.9,0,256-114.93,256-256,0-46.97-12.81-92.88-37.03-132.78-2.87-4.72-9.02-6.22-13.74-3.36-4.72,2.87-6.22,9.02-3.36,13.74,22.33,36.77,34.13,79.09,34.13,122.4,0,68.43-28.77,131.9-79.48,176.68-15.44-72.81-80-126.68-156.52-126.68s-141.1,53.88-156.51,126.69c-50.71-44.79-79.49-108.26-79.49-176.69C20,125.87,125.87,20,256,20c52.99,0,103.03,17.11,144.72,49.5,4.36,3.39,10.64,2.6,14.03-1.76,3.39-4.36,2.6-10.64-1.76-14.03C367.76,18.57,313.47,0,256,0,187.56,0,123.26,26.62,74.94,74.94,26.61,123.27,0,187.57,0,256c0,141.43,114.46,256,256,256Zm0-186c70.7,0,129.38,51.64,138.72,121.01-40.46,29.45-88.29,44.99-138.72,44.99s-98.26-15.54-138.71-45c9.33-69.37,68.01-121,138.71-121h0Z" />
                    </svg>
                    <span style="margin-left: 10px; font-size: 14pt; font-weight: 600;">${this.gameStatus.cardBoard.matches[0]}</span>
                </div>
                <div style="display: flex; align-items: center; margin: 5px;">
                    <svg style="width: 40px; height: 40px;" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <defs>
                            <style>
                                .cls-1,
                                .cls-2 {
                                    stroke-width: 0px;
                                }

                                .cls-2 {
                                    fill: #e9eff0;
                                }
                            </style>
                        </defs>
                        <path class="cls-2"
                            d="m256,10c-135.98,0-246,110.04-246,246s109.84,246,246,246c136.78,0,246-110.92,246-246S391.96,10,256,10Z" />
                        <circle class="cls-1" cx="440" cy="92" r="10" />
                        <path class="cls-1"
                            d="m99.48,432.69c-50.71-44.79-79.49-108.26-79.49-176.69C20,125.87,125.87,20,256,20c52.99,0,103.03,17.11,144.72,49.5,4.36,3.39,10.64,2.6,14.03-1.76,3.39-4.36,2.6-10.64-1.76-14.03C367.76,18.57,313.47,0,256,0,187.56,0,123.26,26.62,74.94,74.94,26.61,123.27,0,187.57,0,256c0,141.43,114.46,256,256,256s256-114.93,256-256c0-46.97-12.81-92.88-37.03-132.78-2.87-4.72-9.02-6.22-13.74-3.36-4.72,2.87-6.22,9.02-3.36,13.74,22.33,36.77,34.13,79.09,34.13,122.4,0,68.43-28.77,131.9-79.48,176.68l-17.8,14.32c-40.46,29.45-88.29,44.99-138.72,44.99s-98.26-15.54-138.71-45l-17.8-14.31Z" />
                        <path class="cls-1"
                            d="m319.3,497.42l-14.06-54.74c-6.07-28.61-19.75-54.28-38.73-74.93,24.23-19.92,55.28-31.76,89.1-31.76,43.71,0,82.8,19.75,108.51,51.21,3.73-5.9,7.21-11.98,10.43-18.2-29.37-32.62-71.88-53.01-118.94-53.01-39.33,0-75.48,14.26-103.45,37.98-27.97-23.72-64.12-37.98-103.45-37.98-44.46,0-84.85,18.21-113.95,47.72,3.05,6.25,6.36,12.36,9.9,18.3,25.65-28.42,62.79-46.02,104.04-46.02,29.64,0,61.4,10.55,88,32.97l14.23,13.73c23.41,25.77,43.67,70.07,48.64,119.3" />
                        <path class="cls-1"
                            d="m355.61,296c49.63,0,90-40.37,90-90s-40.37-90-90-90-90,40.37-90,90,40.37,90,90,90Zm0-160c38.6,0,70,31.4,70,70s-31.4,70-70,70-70-31.4-70-70,31.4-70,70-70Z" />
                        <path class="cls-1"
                            d="m148.71,296c49.63,0,90-40.37,90-90s-40.37-90-90-90-90,40.37-90,90,40.37,90,90,90Zm0-160c38.6,0,70,31.4,70,70s-31.4,70-70,70-70-31.4-70-70,31.4-70,70-70Z" />
                    </svg>
                    <span style="margin-left: 10px; font-size: 14pt; font-weight: 600;">${this.gameStatus.cardBoard.matches[1]}</span>
                </div>`}
            </div>
        </div>`;
    }

    $(gamePanel).find('.lang-mode-item').each((index, langItem) => $(langItem).click(() => this.setLanguage($(langItem).attr('data-lang'))));

    $(gamePanel).find('.mode-item.player-mode').each((index, playerModeItem) => {
        $(playerModeItem).click(() => {
            this.setPaleyrMode($(playerModeItem).attr('data-mode'));
            this.setSubPanel('card');
        })
    });

    $(gamePanel).find('.mode-item.card-mode').each((index, cardModeItem) => {
        $(cardModeItem).click(() => {
            this.setCardMode($(cardModeItem).attr('data-mode'))
            this.setPanel('card');
            this.initCardBoard();
        })
    })

    $(gamePanel).find('[data-action=back]').click(this.back);

    $(gamePanel).find('[data-action=restart]').click(() => {
        this.initCardBoard();
        this.setPanel('card');
    })

    $(panels.card).find('.card-item').each((index, cardItem) => {
        $(cardItem).click(() => {
            if (this.gameStatus.cardBoard.lock) return;
            let cardBoard = $(panels.card).find(`.card-board-mode-${this.gameStatus.cardMode}`)[0];
            if ($(cardItem).hasClass('active') ||
                $(cardItem).hasClass('matched')) return;
            let activeCardItem = $(cardBoard).find('.card-item.active')[0];
            if (!activeCardItem) {
                $(cardItem).addClass('active');
            } else {
                if ($(activeCardItem).hasClass('card-image') && $(cardItem).hasClass('card-image') ||
                    $(activeCardItem).hasClass('card-icon') && $(cardItem).hasClass('card-icon')) return;

                if ($(cardItem).attr('data-index') == $(activeCardItem).attr('data-index')) {
                    $(activeCardItem).removeClass('active');
                    $(activeCardItem).addClass('matched');
                    $(cardItem).addClass('matched');

                    this.gameStatus.cardBoard.matches[this.gameStatus.cardBoard.turn]++;
                    if (this.gameStatus.playerMode == '2') {
                        this.gameStatus.cardBoard.lock = true;
                        setTimeout(() => {
                            this.gameStatus.cardBoard.lock = false;
                            this.gameStatus.cardBoard.turn = 1 - this.gameStatus.cardBoard.turn;
                            this.renderCardBoardStatus();
                        }, 2000);
                    }

                    if ($(cardBoard).find('.card-item.matched').length == this.gameStatus.cardMode) {
                        clearInterval(this.gameStatus.cardBoard.intervalID);
                        setTimeout(() => {
                            this.setPanel('result');
                        }, 2000);
                    }
                } else {
                    $(cardItem).addClass('active');
                    this.gameStatus.cardBoard.lock = true;
                    setTimeout(() => {
                        this.gameStatus.cardBoard.lock = false;
                        $(cardBoard).find('.card-item.active').removeClass('active');
                        this.gameStatus.cardBoard.turn = 1 - this.gameStatus.cardBoard.turn;
                        this.renderCardBoardStatus();
                    }, 2000);
                }
            }

            this.gameStatus.cardBoard.clicks++;
            this.renderCardBoardStatus();
        })
    })

    $('.mail-send-btn').click(() => {
        if (this.onEmailSend) {
            let emailAddress = $(panels.result).find('.mail-input').val();
            this.onEmailSend(emailAddress, this.getEmailContent());
        }
    })

    this.setLanguage('en');
    this.setPanel('mode');
    this.setOptions(options);

    return this;
}