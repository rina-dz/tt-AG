Ext.define('tt-AG.view.itemTab.ItemTab', {
    extend: 'Ext.tab.Panel',
    xtype: 'framed-tabs',
    // controller: 'tab-view',
    frame: true,
    width: '100%',
    height: 300,
    defaults: {
        bodyPadding: 10,
        scrollable: true
    },
    items: [{
        title: 'Товары',
    }, {
        title: 'Товары',
    }, {
        title: 'Товары',
        disabled: true
    }],

    // listeners: {
    //     tabchange: 'onTabChange'
    // }
});