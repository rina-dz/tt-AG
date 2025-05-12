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
                    emptyText: 'Введите фильтр',
                    itemId: "idFilter",
                },
                {
                    xtype: "textfield",
                    fieldLabel: "Описание",
                    emptyText: 'Введите фильтр',
                    itemId: "descFilter",
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
                { text: "Имя", dataIndex: "name", flex: 1, },
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