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
                    action: 'showItems',
                },
                {
                    text: 'Выйти',
                    scale: 'medium',
                    action: 'logOut',
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