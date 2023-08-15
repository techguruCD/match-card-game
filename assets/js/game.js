function Game(gamePanel) {
    let panels = {};
    panels.mode = $(gamePanel).find('.mode-panel')[0];
    panels.card = $(gamePanel).find('.card-panel')[0];

    this.setLanguage = (lang) => {
        $(gamePanel).find('.lang-mode-item').removeClass('active');
        $(gamePanel).find(`.lang-mode-item[data-lang=${lang}]`).addClass('active');
    }
    this.setPanel = (panel) => {
        $(gamePanel).find('.panel').removeClass('active');
        $(panels[panel]).addClass('active');
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
            // $(gamePanel).find('.game-symbol-container').removeClass('player-mode-active');
            // $(gamePanel).find('.game-symbol-container').removeClass('card-mode-active');
        })
    });

    $(gamePanel).find('.mode-item.card-mode').each((index, cardModeItem) => {
        $(cardModeItem).click(() => {
            $(gamePanel).find('.game-symbol-container').addClass('card-mode-active');
            this.setPanel('card');
            // $(gamePanel).find('.game-symbol-container').removeClass('card-mode-active');
            // $(panels.mode).find('.mode-container').removeClass('card-mode-active');
        })
    })

    $(gamePanel).find('[data-action=back]').click(() => {
        this.setPanel('mode');
    })

    this.setLanguage('en');
    this.setPanel('mode');
    // this.setPanel('card');
    return this;
}