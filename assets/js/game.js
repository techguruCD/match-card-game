function Game(gamePanel) {
    let panels = {};
    panels.playerMode = $(gamePanel).find('.player-mode-panel')[0];
    panels.cardMode = $(gamePanel).find('.card-mode-panel')[0];

    this.setLanguage = (lang) => {
        $(gamePanel).find('.lang-mode-item').removeClass('active');
        $(gamePanel).find(`.lang-mode-item[data-lang=${lang}]`).addClass('active');
    }
    this.setPanel = (panel) => {
        $(gamePanel).find('.panel').addClass('hidden');
        $(panels[panel]).removeClass('hidden');
    }

    $(gamePanel).find('.lang-mode-item').each((index, langItem) => {
        $(langItem).click(() => {
            this.setLanguage($(langItem).attr('data-lang'));
        })
    });


    $(gamePanel).find('.mode-item.player-mode').each((index, playerModeItem) => {
        $(playerModeItem).click(() => {
            if ($(playerModeItem).attr('data-mode') == 2) {
                $(gamePanel).find('.game-symbol-container').addClass('player-mode-active');
                this.setPanel('cardMode')
            } else {
                $(gamePanel).find('.game-symbol-container').removeClass('player-mode-active');
                $(gamePanel).find('.game-symbol-container').removeClass('card-mode-active');
            }
        })
    });

    $(gamePanel).find('.mode-item.card-mode').each((index, cardModeItem) => {
        $(cardModeItem).click(() => {
            if ($(cardModeItem).attr('data-mode') == 36) {
                $(gamePanel).find('.game-symbol-container').addClass('card-mode-active');
            } else {
                $(gamePanel).find('.game-symbol-container').removeClass('card-mode-active');
                this.setPanel('playerMode')
            }
        })
    })

    this.setLanguage('en');
    this.setPanel('playerMode');
    return this;
}