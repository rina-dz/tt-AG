Ext.define("tt-AG.view.itemCard.ItemCard", {
    extend: "Ext.window.Window",
    xtype: "itemCard",
    title: "Карточка товара",
    width: '35%',
    height: '35%',
    modal: true,
    renderTo: Ext.getBody(),

    items: [
        {
            xtype: "form",
            bodyPadding: 30,
            defaults: {
                allowBlank: false,
            },

            items: [
                {
                    xtype: "displayfield",
                    name: "id",
                    fieldLabel: "ID"
                },
                {
                    xtype: "displayfield",
                    name: "description",
                    fieldLabel: "Наименование"
                },
                {
                    xtype: "numberfield",
                    allowBlank: false,
                    hideTrigger: true,
                    name: "price",
                    fieldLabel: "Цена",
                    step: 0.1,
                    minValue: 0
                },
                {
                    xtype: "numberfield",
                    allowBlank: false,
                    hideTrigger: true,
                    name: "amt",
                    fieldLabel: "Кол-во",
                    minValue: 0
                },
            ],
            buttons: [
                {
                    text: "Сохранить",
                    formBind: true,
                    disabled: true,
                    action: "changeItem"
                },
                {
                    text: "Отмена",
                    action: "cancel"
                },
            ],
        },
    ],
});