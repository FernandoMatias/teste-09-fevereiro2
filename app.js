Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'realPneus',
    requires: [
	'Ext.field.Search'
    ],
    controllers: [
	'main'
	
    ],
    views: [
	'menuIniciar',
	'clientesList',
	'servicoList',
	'pneusList'

    ],
    models: [
	'sincronizarClientesModel',
	'clientesModel',
	'sincronizarPneusModel',
	'pneusModel',
	'sincronizarServicoModel',
	'servicoModel'
    ],
    stores: [
	'sincronizarClientesStore',
	'clientesStore',
	'sincronizarPneusStore',
	'pneusStore',
	'sincronizarServicoStore',
	'servicoStore'
	
    ],
    viewport: {
	layout: {
	    type: 'card',
	    animation: {
		type: 'slide',
		duration: 10
	    }
	}
    },
    launch: function () {
//	Ext.Date.monthNames = [
//	    'Janeiro',
//	    'Fevereiro',
//	    'Março',
//	    'Abril',
//	    'Maio',
//	    'Junho',
//	    'Julho',
//	    'Agosto',
//	    'Setembro',
//	    'Outubro',
//	    'Novembro',
//	    'Dezembro'
//	];

    }
});
