var AngApp = angular.module('treinamentoApp', []);

AngApp.controller('cameraController', function(){
  var camera = this;
  
  camera.tela = {
	  origem: "Camêra",
	  origens: ["Camêra", "Biblioteca"],
	  selecionarOrigem: function(origem){
		  camera.tela.origem = origem;
	  },
	  
	  qualidade: "25",
	  qualidades: ["25", "50", "100"],
	  selecionarQualidade: function(qualidade){
		  camera.tela.qualidade = qualidade;
	  },
	  
	  encoding: "PNG",
	  encodings: ["PNG","JPG"],
	  selecionarEncoding: function(encoding){
		camera.tela.encoding = encoding;  
	  },
	  
	  imagem: "",
	  
	  buscarFoto: function(){
		var source = "";
		if (camera.tela.origem != "Biblioteca"){
			source = 1;
		}
		else{
			source = 0;
		}
		
		var ql = camera.tela.qualidade;
		var enc = "";
		
		if (camera.tela.encoding == "PNG"){
			enc = Camera.EncodingType.JPEG;
		}
		else{
			enc = Camera.EncodingType.PNG;
		}
		
		navigator.camera.getPicture(function(imageData){
			var base = "";
			if (camera.tela.encoding == "PNG"){
				base = "data:image/png;base64,";
			}
			else{
				base = "data:image/jpeg;base64,";
			}
			camera.tela.imagem = base + imageData;
		}, function() {
			navigator.notification.alert('Falha ao carregar a imagem.',function(){},'Treinamento','OK');
		}, 
		{quality: ql,
		destinationType: Camera.DestinationType.DATA_URL,
		sourceType: source,
		encodingType: enc });
	  },
	  
	  voltar: function(){
		  window.location.href = "index.html";
	  }
  };
});