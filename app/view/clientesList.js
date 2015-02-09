Ext.define('realPneus.view.clientesList', {
    extend: 'Ext.List',
    alias: 'widget.clientesList',
    config: {
	store: 'clientesStore',
	itemTpl: '{nome_cliente}',
	onItemDisclosure: true,
	items: [
	    {
		docked: 'top',
		xtype: 'toolbar',
		//ui: 'light',
		title: 'Lista de Coletas',
		items: [
		    {
			xtype: 'button',
			text: 'Voltar',
			height: 75,
			action: 'menuIniciar'
		    },
		    {
			xtype: 'searchfield',
			name: 'searchfield',
			placeHolder: 'Search'
		    }

		]
	    }
	]
    }
});