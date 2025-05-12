Ext.define('tt-AG.view.itemPanel.ItemPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'itemPanel',
    requires: [
        "tt-AG.store.Store",
        'Ext.form.Panel',
        "Ext.grid.Panel",
    ],

    items: [
        {
            xtype: "form",
            bodyPadding: 10,
            items: [
                {
                    xtype: "textfield",
                    fieldLabel: "ID",
                    allowDecimals: false,
                    itemId: "idFilter",
                },
                {
                    xtype: "textfield",
                    fieldLabel: "Описание",
                    itemId: "descriptionFilter",
                },
            ],
        },
        {
            xtype: "grid",
            store: {
                type: "Store",
            },
            columns: [
                { text: "ID", dataIndex: "id" },
                {
                    text: "Имя", dataIndex: "name", flex: 1,
                    // listeners: {
                    //     itemclick: function() {
                    //         Ext.Msg.alert('Ошибка', 'Неверные учетные данные.');
                    //     }
                    // }
                },
                { text: "Описание", dataIndex: "description", flex: 3 },
                { text: "Цена", dataIndex: "price", },
                {
                    text: "Кол-во", dataIndex: "amt",
                    renderer: function (value, metaData) {
                        if (value === 0) {
                            metaData.style = "background-color: red;";
                        }
                        return value;
                    },
                },
            ],
        }
    ],
});