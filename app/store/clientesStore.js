Ext.define('realPneus.store.clientesStore', {
    extend: 'Ext.data.Store',
    requires: [
	'Ext.data.proxy.Sql'
    ],
    config: {
	autoLoad: true,
	model: 'realPneus.model.clientesModel',
	storeId: 'clientesStore',
	 filters: null,
	proxy: {
	    type: 'sql',
	    database: 'realPneus',
	    table: 'clientes'
	}
    }
});