Ext.define("tt-AG.view.login.Login", {
    extend: 'Ext.window.Window',
    xtype: 'login',
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
                action: 'logIn',
            }
        ],

        defaults: {
            anchor: '100%',
        }
    }
});
