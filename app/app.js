Ext.application({
    name: "tt-AG",
    requires: [
        "tt-AG.view.login.Login",
        "tt-AG.view.main.Main",
        "tt-AG.view.itemPanel.ItemPanel",
        "tt-AG.view.itemCard.ItemCard",
    ],
    controllers: [
        "tt-AG.view.login.LoginController",
        "tt-AG.view.main.MainController",
        "tt-AG.view.itemPanel.ItemPanelController",
        "tt-AG.view.itemCard.ItemCardController",
    ],
    launch: function () {
        Ext.create("tt-AG.view.login.Login").show();
    },
});
