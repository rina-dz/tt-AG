Ext.define("tt-AG.view.login.Login", {
    extend: 'Ext.window.Window',
    xtype: 'login',
    requires: ['Ext.form.Panel',
        // 'tt-AG.view.login.LoginController'
    ],
    title: 'Авторизация',


    items: {
        xtype: 'form',
        frame: true,
        width: 320,
        bodyPadding: 10,
        defaultType: 'textfield',
        items: [{
            allowBlank: false,
            fieldLabel: 'Пользователь',
            name: 'user',
            msgTarget: 'under'
        }, {
            allowBlank: false,
            fieldLabel: 'Пароль',
            name: 'pass',
            inputType: 'password'
        }],

        buttons: [
            {
                text: 'Войти',
                formBind: true,
                handler: function () {
                    var form = this.up('form').getForm();
                    if (form.isValid()) {
                        var values = form.getValues();
                        if (values.user === 'admin' && values.pass === 'padmin') {
                            this.up('window').close();
                            Ext.create("tt-AG.view.main.Main").show();
                        } else {
                            Ext.Msg.alert('Ошибка', 'Неверные учетные данные.');
                        }
                    }
                }
            }
        ],

        defaults: {
            anchor: '100%',
            labelWidth: 120
        }
    }
});
