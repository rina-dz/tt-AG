Ext.application({
    name: "tt-AG",
    requires: [
        "tt-AG.view.login.Login",
        "tt-AG.view.main.Main",
        "tt-AG.view.itemPanel.ItemPanel",
        // "test-aitiguru.view.ProductGrid",
        // "test-aitiguru.view.ProductCard",
    ],
    controllers: [
        // "tt-AG.view.login.LoginController",
        // "test-aitiguru.controller.ProductGridController",
        // "test-aitiguru.controller.ProductCardController",
    ],
    launch: function () {
        Ext.create("tt-AG.view.main.Main").show();
        // Ext.create("tt-AG.view.itemTab.ItemTab").show();
    },
});
