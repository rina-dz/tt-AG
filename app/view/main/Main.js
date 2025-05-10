Ext.define("tt-AG.view.main.Main", {
    extend: 'Ext.window.Window',
    xtype: 'main',
    requires: [
        // 'Ext.form.Panel',
        'Ext.tab.Panel',
        'tt-AG.view.itemTab.ItemTab'
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
                        Ext.Msg.alert('Новая вкладка', 'Открыта новая вкладка товаров');
                        // this.up('window').down('')
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
        // {
        //     // xtype: 'tabpanel',
        //     // extend: 'Ext.tab.Panel',
        //     xtype: 'basic-tabs',
        //     defaults: {
        //         bodyPadding: 10,
        //         scrollable: true
        //     },
        //     tabBar: {
        //         layout: {
        //             pack: 'center'
        //         }
        //     },
        //     items: [
        //         {
        //             text: 'Товары'
        //         }
        //     ]
        // }
    ]
})