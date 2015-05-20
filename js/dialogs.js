var AngApp = angular.module('treinamentoApp', []);

AngApp.controller('dialogController', function(){
  var alertas = this;
  
  alertas.dialog = {
	  alerta: function(){
		alert('teste');
	  },
	  
	  confirma: function(){
		confirm('Deseja confirmar?');
	  },
	  
	  alertan: function(){
		navigator.notification.alert('teste',function(){},'Treinamento','OK');
	  },
	  
	  confirman: function(){
		navigator.notification.confirm('Deseja confirmar?',function(buttonIndex){ alert('botao clicado: ' + buttonIndex);},'Treinamento',['OK','Cancelar']);
	  },
	  
	  beep: function(){
		navigator.notification.beep(2);  
	  },
	  
	  vibrate: function(){
		navigator.notification.vibrate(2500); 
	  },
	  
	  voltar: function(){
		window.location.href = 'index.html'; 
	  }
  };
});