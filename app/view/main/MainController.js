Ext.define("tt-AG.view.main.MainController", {
    extend: "Ext.app.Controller",

    init: function () {
        this.control({
            "button[action=showItems]": {
                click: this.showItems,
            },
            "button[action=logOut]": {
                click: this.logOut,
            },
        });
    },

    showItems: function (button) {
        const TabPanel = button.up('window').down('tabpanel');
        let itemPanel = button.up('window').down('itemPanel');
        if (itemPanel) {
            itemPanel.close();
            button.up('window').add({
                xtype: 'itemPanel',
            });
        } else {
            button.up('window').add({
                xtype: 'itemPanel',
            });
        }
        TabPanel.add({
            title: "Товары",
        });
    },

    logOut: function (button) {
        button.up('window').close();
        Ext.create("tt-AG.view.login.Login").show();
    },
});
