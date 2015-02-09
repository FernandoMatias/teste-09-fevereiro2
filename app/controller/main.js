Ext.define('realPneus.controller.main', {
    extend: 'Ext.app.Controller',
    requires: [
	'Ext.MessageBox'
    ],
    config: {
	routes: {
	    '': 'showMenuIniciar'
	},
	refs: {
	    menuIniciar: {
		xtype: 'menuIniciar',
		selector: 'menuIniciar',
		autoCreate: true
	    },
	    clientesList: {
		xtype: 'clientesList',
		selector: 'clientesList',
		autoCreate: true
	    },
	    servicoList: {
		xtype: 'servicoList',
		selector: 'servicoList',
		autoCreate: true
	    },
	    pneusList: {
		xtype: 'pneusList',
		selector: 'pneusList',
		autoCreate: true
	    },
	    testeBtn: 'button[action=testesql]',
	    sincronizarBtn: 'button[action=sincronizar]',
	    showListaClientesBtn: 'button[action=listaclientes]'
	},
	control: {
	    testeBtn: {
		tap: 'teste'
	    },
	    sincronizarBtn: {
		tap: 'sincronizar'
	    },
	    showListaClientesBtn: {
		tap: 'showListaClientes'
	    },
	    'button[action=listaservico]': {
		tap: 'showServicoList'
	    },
	    'button[action=listapneus]': {
		tap: 'showPneusList'
	    },
	    'button[action=menuIniciar]': {
		tap: 'showMenuIniciar'
	    },
	    'searchfield': {
		keyup: 'doSearch'
	    }
	}
    },
    showMenuIniciar: function () {
//	var store = Ext.getStore('clientesStore');
//	store.load();
//	var store2 = Ext.getStore('pneusStore');
//	store2.load();
//	var store3 = Ext.getStore('servicoStore');
//	store3.load();
	Ext.Viewport.setActiveItem(this.getMenuIniciar());
    },
    showListaClientes: function () {
	Ext.Viewport.setActiveItem(this.getClientesList());
    },
    showServicoList: function () {
	Ext.Viewport.setActiveItem(this.getServicoList());
    },
    showPneusList: function () {
	Ext.Viewport.setActiveItem(this.getPneusList());
    },
    teste: function () {
//	var store = Ext.getStore('sincronizarServicoStore');
//	var record = store.data.get(60);
//	console.log(record);

    },
    sincronizar: function () {
	this.apagarClientesSincronizar();
//	this.sincronizarClientes();
	//this.apagarPneusSincronizar();
	//this.sincronizarPneus();
	//this.apagarServicoSincronizar();
	//this.sincronizarServico();
    },
    apagarClientesSincronizar: function () {
	var db = openDatabase("realPneus", "1.0", "", 200000);
	db.transaction(apaga);
	function apaga(tx) {
	    tx.executeSql('DELETE FROM clientes');
	}
	this.sincronizarClientes();
    },
    sincronizarClientes: function () {
	var j = 0;
	var store = Ext.getStore('sincronizarClientesStore');
	var store2 = Ext.getStore('clientesStore');
	store.each(function () {
	    var record = store.data.get(j);
	    var model = Ext.create('realPneus.model.clientesModel', {
		nome_cliente: record.data.nome,
		codigo: record.data.codigo
//		apelido: record.data.apelido,
//		cpfoucnpj: record.data.cpfoucnpj,
//		registro: record.data.registro,
//		telefone_com: record.data.telefone_com,
//		telefone_res: record.data.telefone_res,
//		celular: record.data.celular,
//		email: record.data.email,
//		localidade: record.data.localidade
	    });
	    store2.add(model);
	    j++;
	});
	store2.sync();
	this.apagarPneusSincronizar();
    },
    apagarPneusSincronizar: function () {
	var db = openDatabase("realPneus", "1.0", "", 200000);
	db.transaction(apaga);
	function apaga(tx) {
	    tx.executeSql('DELETE FROM pneus');
	}
	this.sincronizarPneus();
    },
    sincronizarPneus: function () {
	var j = 0;
	var store = Ext.getStore('sincronizarPneusStore');
	var store2 = Ext.getStore('pneusStore');
	store.each(function () {
	    var record = store.data.get(j);
	    var model = Ext.create('realPneus.model.pneusModel', {
		codigo: record.data.codigo,
		marca: record.data.marca,
		modelo: record.data.modelo,
		medida: record.data.medida,
		aplicacao: record.data.aplicacao,
		todos: record.data.medida + ' | ' + record.data.modelo + ' | ' + record.data.marca
	    });
	    store2.add(model);
	    j++;
	});
	store2.sync();
	this.apagarServicoSincronizar();
    },
    apagarServicoSincronizar: function () {
	var db = openDatabase("realPneus", "1.0", "", 200000);
	db.transaction(apaga);
	function apaga(tx) {
	    tx.executeSql('DELETE FROM servico');
	}
	this.sincronizarServico();
    },
    sincronizarServico: function () {
	var j = 0;
	var store = Ext.getStore('sincronizarServicoStore');
	var store2 = Ext.getStore('servicoStore');
	store.each(function () {
	    var record = store.data.get(j);
	    var model = Ext.create('realPneus.model.servicoModel', {
		codigo: record.data.codigo,
		tipo: record.data.tipo,
		modelo: record.data.modelo,
		categoria: record.data.categoria,
		subgrupo: record.data.subgrupo,
		grupo: record.data.grupo,
		medida: record.data.medida,
		preco: record.data.preco,
		nome: record.data.nome
	    });
	    store2.add(model);
	    j++;
	});
	store2.sync();
    },
    doSearch: function (field) {
//	console.log('teste');
	var value = field.getValue();
	var store = this.getClientesList().getStore();
	var query = new RegExp(value, 'i');


	
	store.clearFilter();
	store.filter('nome_cliente', query);
    }
});