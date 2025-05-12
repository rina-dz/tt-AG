Ext.define("tt-AG.view.itemCard.ItemCardController", {
    extend: "Ext.app.Controller",

    config: {
        fieldsValues: null,
    },

    init: function () {
        this.control({
            "itemPanel grid": {
                cellclick: this.openItemCard,
            },
            "button[action=changeItem]": {
                click: this.changeItem,
            },
            "button[action=cancel]": {
                click: this.cancel,
            },
        });
    },

    openItemCard: function (view, cell, cellIndex, record) {
        if (cellIndex === 1) {
            const formWindow = Ext.create("tt-AG.view.itemCard.ItemCard");
            formWindow.down("form").loadRecord(record);
            this.fieldsValues = { amt: record.data.amt, price: record.data.price };
            formWindow.show();
            formWindow.down("form").trackResetOnLoad(true);
        }
    },

    changeItem: function (button) {
        const Form = button.up("window").down("form");
        const Record = Form.getRecord();
        const Values = Form.getValues();
        Record.set(Values);
        if (this.fieldsValues.amt !== Number(Values.amt) || this.fieldsValues.price !== Number(Values.price)) {
            Ext.Msg.alert('Изменения', 'Имеются изменённые данные');
        }
        button.up("window").close();
    },

    cancel: function (button) {
        button.up("window").close();
    },
});
