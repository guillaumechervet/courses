
document.write("<h2>Objet avec new</h2>");
(function() {
	/**************************************/
			
	var obj1 = new Object(); // A partir de l'objet Object 
	var obj2 = {}; // Avec la notation JSON 
				
	var obj = new Object(); 
	obj["attribut"] = "valeur1"; 
	// similaire à obj.attribut = "valeur1"; 
			 			 
	obj["methode"] = function(parametre1, parametre2) { 
		document.write("<p>parametres: " + parametre1 + ", " + parametre2 + "</p>"); 
	}; 
	// similaire à obj.methode = ... 

	// Affichage de la valeur de l'attribut de obj 
	document.write("<p>Valeur de l'attribut: " + obj.attribut+ "</p>");
	//Valeur de l'attribut: valeur1
			 
	// Exécution de la méthode methode de obj 
	obj.methode("valeur1", "valeur2"); 
	//parametres: valeur1 , valeur2
	
			
})();

document.write("<h2>Objet en notation Json</h2>");
(function() {	
	var obj = { 
		attribut: "valeur1", 
		methode: function(parametre1, parametre2) { 
			document.write("<p>parametres: " + parametre1 + ", " + parametre2 + "</p>"); 
		}
	};
			 
	// Affichage de la valeur de l'attribut de obj 
	document.write("<p>Valeur de l'attribut: " + obj.attribut + "</p>"); 
	//Valeur de l'attribut: valeur1
	
	// Exécution de la méthode methode de obj 
	obj.methode("valeur1", "valeur2"); 
	//parametres: valeur1 , valeur2
})();
		
		
document.write("<h2>Typeof et instanceof</h2>");
(function() {

	// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/typeof
	// https://developer.mozilla.org/fr/docs/JavaScript/Reference/Operators/instanceof
	var uneChaine = "un chaine de caractère" 
	document.write("<p>Type de uneChaine: " + typeof uneChaine+ "</p>");
	//Type de uneChaine: string
	
	var unEntier = 2
	document.write("<p>Type de unEntier: " + typeof unEntier+ "</p>");
	//Type de unEntier: number
	document.write("<p>unEntier est instance d'Object? " +  (unEntier instanceof Object) + "</p>"); 
	//methode est instance d'Object? false
	document.write("<p>unEntier est instance de Number? " +  (unEntier instanceof Number) + "</p>"); 
	//methode est instance de Number? false
	
	unEntier = new Number(2);
	document.write("<p>Type de unEntier: " + typeof unEntier+ "</p>");
	//Type de unEntier: Object
	document.write("<p>unEntier est instance d'Object? " +  (unEntier instanceof Object) + "</p>"); 
	//unEntier est instance d'Object? true
	document.write("<p>unEntier est instance de Number? " +  (unEntier instanceof Number) + "</p>"); 
	//unEntier est instance de Number? true
	document.write("<p>Number est instance de Number? " +  (Number instanceof Function) + "</p>"); 
	//Number est instance de Number? true
	document.write("<p>unEntier est instance de Function? " +  (unEntier instanceof Function) + "</p>"); 
	//unEntier est instance de Number? false
	
	var methode = function(parametre1, parametre2) { 
		 this.variable1 = parametre1;
		 this.variable2 = parametre2;
	}; 
	
	document.write("<p>Type de methode: " + typeof methode + "</p>"); 
	//Type de methode: function 
	document.write("<p>methode est instance de Function? " +  (methode instanceof Function) + "</p>"); 
	//methode est instance de Function? true
	document.write("<p>methode est instance d'Object? " +  (methode instanceof Object) + "</p>"); 
	//methode est instance d'Object? true
	
	var nouvelObjet = new methode("1", "2")
	document.write("<p>Type de nouvelObjet: " + typeof nouvelObjet + "</p>"); 
	//Type de nouvelObjet: object
	document.write("<p>nouvelObjet est instance de Object? " +  (nouvelObjet instanceof Object) + "</p>"); 
	//nouvelObjet est instance de Object? true
	document.write("<p>nouvelObjet est instance de methode? " +  (nouvelObjet instanceof methode) + "</p>"); 
	//nouvelObjet est instance de methode? true
	document.write("<p>nouvelObjet est instance de Number? " +  (nouvelObjet instanceof Number) + "</p>"); 
	//nouvelObjet est instance de Number? false

})();
