Ext.define("tt-AG.view.itemPanel.ItemPanelController", {
    extend: "Ext.app.Controller",

    init: function () {
        this.control({
            "itemPanel textfield[itemId=idFilter]": {
                specialkey: this.searchItemsByFilter,
            },
            "itemPanel textfield[itemId=descFilter]": {
                specialkey: this.searchItemsByFilter,
            },
        });
    },

    searchItemsByFilter: function (field, e) {
        if (e.getKey() === e.ENTER) {
            const grid = field.up("itemPanel").down("grid");
            const IdField = field.up("itemPanel").down("#idFilter");
            const DescField = field.up("itemPanel").down("#descFilter");
            const idValue = IdField.getValue().toLowerCase();
            const descriptionValue = DescField.getValue().toLowerCase();
            grid.getStore().clearFilter();
            if (idValue) {
                grid.getStore().addFilter({
                    property: "id",
                    value: idValue,
                });
            }
            if (descriptionValue) {
                grid.getStore().addFilter({
                    property: "description",
                    value: descriptionValue,
                    anyMatch: true,
                });
            }
        }
    },
});
