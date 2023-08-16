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
                    <div class="result-item">
                        <img src="./assets/image/icons-SVG/icon-12-click.svg">
                        <span>37</span>
                    </div>
                    <div class="result-item">
                        <img src="./assets/image/icons-SVG/icon-11-time.svg">
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
            <div class="tool-bar-item">
                <img src="./assets/image/icons-SVG/icon-09-restart.svg">
            </div>
            <div class="tool-bar-item">
                <img src="./assets/image/icons-SVG/icon-12-click.svg">
                <span>3</span>
            </div>
            <div class="tool-bar-item">
                <img src="./assets/image/icons-SVG/icon-11-time.svg">
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

    this.gameStatus = {
        currentPanel: 'mode',
        subPanel: 'player',
        playerMode: '1',
        cardMode: '18',
        images: [],
        icons: []
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
        if (playerMode == '1')
            $(gamePanel).find('.game-symbol-container .player-mode-symbol').attr('src', './assets/image/icons-SVG/icon-02-1p.svg');
        else
            $(gamePanel).find('.game-symbol-container .player-mode-symbol').attr('src', './assets/image/icons-SVG/icon-03-2p.svg');
    }

    this.setCardMode = (cardMode) => {
        this.gameStatus.cardMode = cardMode;
        if (cardMode == '18') {
            $(gamePanel).find('.game-symbol-container .card-mode-symbol').attr('src', './assets/image/icons-SVG/icon-04-18game.svg');
            $(gamePanel).find('.card-board-mode-18').addClass('active');
            $(gamePanel).find('.card-board-mode-36').removeClass('active');
        }
        else {
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
        let targetPanel = 'card';
        if (this.gameStatus.currentPanel == 'card') {
            this.setSubPanel('card');
            targetPanel = 'mode';
        }
        this.setPanel(targetPanel);
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

    /** lang item init start */
    $(gamePanel).find('.lang-mode-item').each((index, langItem) => {
        $(langItem).click(() => {
            this.setLanguage($(langItem).attr('data-lang'));
        })
    });
    /** lang item init end */


    $(gamePanel).find('.mode-item.player-mode').each((index, playerModeItem) => {
        $(playerModeItem).click(() => {
            $(gamePanel).find('.game-symbol-container').addClass('player-mode-active');
            $(panels.mode).find('.mode-container').addClass('card-mode-active');

            this.setPaleyrMode($(playerModeItem).attr('data-mode'));
        })
    });

    $(gamePanel).find('.mode-item.card-mode').each((index, cardModeItem) => {
        $(cardModeItem).click(() => {
            $(gamePanel).find('.game-symbol-container').addClass('card-mode-active');
            this.setCardMode($(cardModeItem).attr('data-mode'))
            this.setPanel('card');
        })
    })

    $(gamePanel).find('[data-action=back]').click(this.back);

    $(gamePanel).find('.card-item').click(() => this.setPanel('result'));

    this.setLanguage('en');
    this.setPanel('mode');

    this.setOptions(options);

    return this;
}