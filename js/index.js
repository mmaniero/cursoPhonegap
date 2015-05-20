var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
app.initialize();

var AngApp = angular.module('treinamentoApp', []);

AngApp.controller('treinamentoController', function(){
  var treinamento = this;
  
  treinamento.index = {
	  dialogs: function(){
		window.location.href = 'dialogs.html';
	  },
	  
	  camera: function(){
		window.location.href = 'camera.html';  
	  },
	  
	  bussola: function(){
		  window.location.href = 'bussola.html';  
	  }
  };
});