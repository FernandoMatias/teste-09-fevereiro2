Ext.define('realPneus.store.sincronizarServicoStore', {
    extend: 'Ext.data.Store',
    config: {
	model: 'realPneus.model.sincronizarServicoModel',
	proxy: {
	    type: 'ajax',
	    //url: 'php/json/listaContatos.php',
	    api: {
		read : 'http://192.168.111.112/php/listaPneu.php',
		create: 'app/php/vazio.php', //CRUD
		//read: 'app/php/listaServico.php',
		update: 'app/php/vazio.php',
		destroy: 'app/php/vazio.php'
	    },
	    reader: {
		type: 'json', //json ou xml
		rootProperty: 'sincronizarServicoStore'
	    },
	    writer: {
		type: 'json', //json ou xml
		rootProperty: 'sincronizarServicoStore',
		writeAllFields: true,
		encode: true,
		allowSingle: true
	    }
	},
	autoLoad: true,
	autoSync: true	
    }
});
