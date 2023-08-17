function Game(gamePanel, options) {

    this.initHtml = () => {
        $(gamePanel).addClass('game-panel');
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
                        <div class="mode-item player-mode" data-mode="1">
                            <div class="mode-image-container">
                                <img src="./assets/image/icons-SVG/icon-02-1p.svg">
                            </div>
                            <div class="mode-caption">1P</div>
                        </div>
                        <div class="mode-item player-mode" data-mode="2">
                            <div class="mode-image-container">
                                <img src="./assets/image/icons-SVG/icon-03-2p.svg">
                            </div>
                            <div class="mode-caption">1P v 2P</div>
                        </div>
                    </div>
                    <div class="mode-pane card-mode-pane">
                        <div class="card-mode-container">
                            <div class="mode-item card-mode" data-mode="18">
                                <div class="mode-image-container">
                                    <img src="./assets/image/icons-SVG/icon-04-18game.svg">
                                </div>
                            </div>
                            <div class="mode-item card-mode" data-mode="36">
                                <div class="mode-image-container">
                                    <img src="./assets/image/icons-SVG/icon-05-36game.svg">
                                </div>
                            </div>
                        </div>
                        <div class="tool-bar-item" data-action="back">
                            <img src="./assets/image/icons-SVG/icon-08-back.svg">
                        </div>
                    </div>
                </div>
                <div class="intro-pane">
                    <div class="intro-inner-pane">
                        <div class="lang-mode-container">
                            <div class="lang-mode-item active" data-lang="en">
                                <img src="./assets/image/icons-SVG/icon-15-flag-gb.svg">
                            </div>
                            <div class="lang-mode-item" data-lang="de">
                                <img src="./assets/image/icons-SVG/icon-17-flag-de.svg">
                            </div>
                            <div class="lang-mode-item" data-lang="fr">
                                <img src="./assets/image/icons-SVG/icon-14-flag-fr.svg">
                            </div>
                            <div class="lang-mode-item" data-lang="es">
                                <img src="./assets/image/icons-SVG/icon-18-flag-es.svg">
                            </div>
                            <div class="lang-mode-item" data-lang="ch">
                                <img src="./assets/image/icons-SVG/icon-16-flag-ch.svg">
                            </div>
                        </div>
                        <div class="intro-container">
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
                            <img data-action="back" src="./assets/image/icons-SVG/icon-08-back.svg">
                            <img data-action="restart" src="./assets/image/icons-SVG/icon-09-restart.svg">
                        </div>
                    </div>
                </div>
                <div class="mail-container">
                    <img src="./assets/image/icons-SVG/icon-13-email.svg">
                    <input class="mail-input" type="text">
                </div>
            </div>`;

        let toolBarHtml =
            `<div class="tool-bar">
                <div class="tool-bar-item" data-action="back">
                    <img src="./assets/image/icons-SVG/icon-08-back.svg">
                </div>
                <div class="tool-bar-item" data-action="restart">
                    <img src="./assets/image/icons-SVG/icon-09-restart.svg">
                </div>
                <div class="tool-bar-item tool-bar-item-click" data-mode="1">
                    <img src="./assets/image/icons-SVG/icon-12-click.svg">
                    <span>3</span>
                </div>
                <div class="tool-bar-item tool-bar-item-timer" data-mode="1">
                    <img src="./assets/image/icons-SVG/icon-11-time.svg">
                    <span>0:37</span>
                </div>
                <div class="tool-bar-item tool-bar-item-match-player" data-mode="2" data-turn="0">
                    <img src="./assets/image/icons-SVG/icon-06-1phollow.svg">
                    <span>0:37</span>
                </div>
                <div class="tool-bar-item tool-bar-item-match-player" data-mode="2" data-turn="1">
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
        this.setSubPanel('card');
        this.setPanel('mode');
    }

    this.setOptions = (options) => {
        if (options) {
            if (options.iconBack)
                this.setIconBack(options.iconBack);
            if (options.imageBack)
                this.setIconBack(options.imageBack);
            if (options.images)
                this.setImages(options.images);
            if (options.icons)
                this.setIcons(options.icons);
        }
    }

    this.renderCardBoardStatus = () => {
        $(panels.card).find('.tool-bar .tool-bar-item.tool-bar-item-click span').html(`${this.gameStatus.cardBoard.clicks}`);
        $(panels.result).find('.result-item.result-item-click span').html(`${this.gameStatus.cardBoard.clicks}`);

        let passedMins = Math.floor(this.gameStatus.cardBoard.time / 60);
        let passedSecs = this.gameStatus.cardBoard.time % 60;
        $(panels.card).find('.tool-bar .tool-bar-item.tool-bar-item-timer span').html(`${passedMins}:${passedSecs}`);
        $(panels.result).find('.result-item.result-item-time span').html(`${passedMins}:${passedSecs}`);

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

                    this.gameStatus.cardBoard.matches[this.gameStatus.cardBoard.turn] ++;
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

    this.setLanguage('en');
    this.setPanel('mode');
    this.setOptions(options);

    return this;
}