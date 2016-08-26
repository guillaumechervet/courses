(function() {	
	/* Exemple d'utilisation des fonctions de résolution de l'objet jQuery.Deferred */
	var operationId = 0;
	
	
	//Notre opération asynchrone
	function operation(etat, id) {
		var dfd = $.Deferred();
		var time = 800+Math.random()*400;
		
		setTimeout(function () {dfd.notify({progress:"1/2", id:id})}, time);
		
		setTimeout(function () {dfd.notify({progress:"2/2", id:id})}, time*2);
		
		setTimeout(function () {
			if(etat)
				dfd.resolve({text:"Opération terminée avec succès", id:id});
			else
				dfd.reject({text:"Erreur lors de l'opération", id:id});
		}, time*3);
		
		return dfd.promise();
	}
	
	//function permettant d'appeler notre fonction asynchrone
	function lancerOperation(etat)	{
		var promise = operation(etat, operationId++);
		promise	.done(promiseDone)
				.fail(promiseError)
			  //.always(promiseAlways)
				.progress(promiseProgress);
				
	  //promise.then(promiseDone, promiseError, promiseProgress);
	}			
	
	
	//Nos callbacks liés DOM
	$("#exemple1").click(function(){lancerOperation(true)});
	$("#exemple2").click(function(){lancerOperation(false)});
	$("#exemple3").click(function(){
		operation(true, 1).then(promiseDone, promiseError, promiseProgress).done(function(){operation(true,2).then(promiseDone, promiseError, promiseProgress)});
	});
	$("#exemple4").click(function(){
		$.when(	operation(true, 1),operation(true, 2),operation(true, 3)).then(promisesDone, promiseError, promisesProgress);
	});
	
	//Nos callbacks liés aux objets deferred
	function promiseDone(response) {log("L'opération "+ response.id+" est terminée avec succès et la réponse est : " + response.text);}
	function promiseError(response) {log("L'opération "+ response.id+"  a échouée : " + response.text);}
	function promiseProgress(response) {log("L'opération "+ response.id+" en est actuellement à l'étape : " + response.progress);}

	function promisesDone() {log("Toutes les opérations sont terminées avec succès");}
	function promisesProgress() {log("Une opération est en cours de progression");}
	
	function log(texte){$("body").append("<p>"+texte+"</p>");}
})();

