Ext.define("tt-AG.model.Model", {
    extend: "Ext.data.Model",

    fields: [
        { name: "id", type: "int", validators: [{ type: 'range', min: 0 }] },
        { name: "name", type: "string", validators: [{ type: 'presence' }] },
        { name: "description", type: "string", validators: [{ type: 'presence' }] },
        { name: "price", type: "float", validators: [{ type: 'range', min: 0 }] },
        { name: "amt", type: "int", validators: [{ type: 'range', min: 0 }] }
    ]
});
