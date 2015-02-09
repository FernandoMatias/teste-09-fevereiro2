Ext.define('realPneus.store.servicoStore', {
    extend: 'Ext.data.Store',
    requires: [
	'Ext.data.proxy.Sql'
    ],
    config: {
	autoLoad: true,
	model: 'realPneus.model.servicoModel',
	storeId: 'servicoStore',
	proxy: {
	    type: 'sql',
	    database: 'realPneus',
	    table: 'servico'
	}
    }
});