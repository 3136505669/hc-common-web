Ext.define('Hc_Common.view.BaseWinPage', {
    extend: 'Ext.window.Window',
    controller: 'basewinpage',
    viewModel: {
        type: 'basewinpage'
    },
    referenceHolder: true,
    initComponent: function () {
        this.callParent();
    }
});