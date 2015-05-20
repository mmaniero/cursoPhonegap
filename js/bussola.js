var AngApp = angular.module('treinamentoApp', []);

AngApp.controller('bussolaController', function(){
  var bussola = this;
  
  bussola.tela = {
	magnetico: "",
	watchId: null,
	voltar: function(){
		window.location.href = 'index.html';
	},
	
	atual: function(){
		navigator.compass.getCurrentHeading(function(heading){
			magnetico = heading.magneticHeading;
		}, function(){
			navigator.notification.alert('Falha ao carregar a bussola.',function(){},'Treinamento','OK');
		});
	},
	
	coleta: function(){
		var options = { frequency: 1000 };
		bussola.tela.watchId = navigator.compass.watchHeading(function(heading){
			magnetico = heading.magneticHeading;
		}, function(){
			navigator.notification.alert('Falha ao carregar a bussola.',function(){},'Treinamento','OK');
		});
	},
	
	parar: function(){
		if (bussola.tela.watchId) {
            navigator.compass.clearWatch(bussola.tela.watchId);
            bussola.tela.watchId = null;
        }
	}	
  };
});