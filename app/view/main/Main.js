Ext.define("tt-AG.view.main.Main", {
    extend: 'Ext.window.Window',
    xtype: 'main',
    requires: [
        'Ext.tab.Panel',
        "tt-AG.store.Store",
    ],
    title: 'Учёт товаров',
    width: '75%',
    height: '50%',

    items: [
        {
            xtype: 'toolbar',
            items: [
                {
                    text: 'Товары',
                    scale: 'medium',
                    handler: function () {
                        const TabPanel = this.up('window').down('tabpanel');
                        let itemPanel = this.up('window').down('itemPanel');
                        if (itemPanel) {
                            itemPanel.close();
                            this.up('window').add({
                                xtype: 'itemPanel',
                            });
                        } else {
                            this.up('window').add({
                                xtype: 'itemPanel',
                            });
                        }
                        TabPanel.add({
                            title: "Товары",
                        });
                    }
                },
                {
                    text: 'Выйти',
                    scale: 'medium',
                    handler: function () {
                        this.up('window').close();
                        Ext.create("tt-AG.view.login.Login").show();
                    }
                }
            ]
        },
        {
            xtype: 'tabpanel',
            defaults: {
                scrollable: true,
            },
            tabBar: {
                layout: {
                    pack: 'left'
                }
            },
        },
    ]
})