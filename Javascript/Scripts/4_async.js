(function() {
	var operationId = 0;
	
	
	//Notre opération asynchrone
	function operation(etat, id, onComplete, onError, onProgress) {
		var time = 800+Math.random()*400;
		
		setTimeout(function () {onProgress({progress:"1/2", id:id})}, time);
		
		setTimeout(function () {onProgress({progress:"2/2", id:id})}, time*2);
		
		setTimeout(function () {
			if(etat)
				onComplete({text:"Opération terminée avec succès", id:id});
			else
				onError({text:"Erreur lors de l'opération", id:id});
		}, time*3);
	}
	
	//function permettant d'appeler notre fonction asynchrone
	function lancerOperation(etat)	{
		operation(etat, operationId++, operationDone, operationError, operationProgress);
	}			
	
	
	//Nos callbacks liés DOM
	$("#exemple1").click(function(){lancerOperation(true)});
	$("#exemple2").click(function(){lancerOperation(false)});
	$("#exemple3").click(function(){
		operation(true, 1, 
			function(result){
				operationDone(result);
				operation(true, 2,
					operationDone,
					operationError,
					operationProgress);
				},
			operationError,
			operationProgress);
	});
	$("#exemple4").click(function(){
			var operations = 0;
			operation(true, 1, 
			function(result){
				operationDone(result);
				operations++;
				if(operations == 3)
					operationsDone();
				},
			promiseError,
			promiseProgress);
			
			operation(true, 2, 
			function(result){
				operationDone(result);
				operations++;
				if(operations == 3)
					operationsDone();
				},
			operationError,
			operationProgress);
			
			operation(true, 3, 
			function(result){
				operationDone(result);
				operations++;
				if(operations == 3)
					operationsDone();
				},
			operationError,
			operationProgress);
	});
	
	//Nos callbacks liés aux objets deferred
	function operationDone(response) {log("L'opération "+ response.id+" est terminée avec succès et la réponse est : " + response.text);}
	function operationError(response) {log("L'opération "+ response.id+"  a échouée : " + response.text);}
	function operationProgress(response) {log("L'opération "+ response.id+" en est actuellement à l'étape : " + response.progress);}

	function operationsDone() {log("Toutes les opérations sont terminées avec succès");}
	
	function log(texte){$("body").append("<p>"+texte+"</p>");}
})();

