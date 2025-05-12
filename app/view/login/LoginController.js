Ext.define("tt-AG.view.login.LoginController", {
    extend: "Ext.app.Controller",

    init: function () {
        this.control({
            "button[action=logIn]": {
                click: this.logIn,
            },
        });
    },

    logIn: function (button) {
        var form = button.up('form').getForm();
        if (form.isValid()) {
            var values = form.getValues();
            if (values.user === 'admin' && values.pass === 'padmin') {
                button.up('window').close();
                Ext.create("tt-AG.view.main.Main").show();
            } else {
                Ext.Msg.alert('Ошибка', 'Неверные учетные данные.');
            }
        }
    },
});
