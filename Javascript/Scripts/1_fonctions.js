document.write("<h2>4 types d'appels de fonctions</h2>");
(function() {
	
	// 1: fonction
	function fonctionAvecUnNom(parametre1) {
		document.write("<p>1-Appel fonctionAvecUnNom</p>" );
	} 
	document.write("<p>1-fonctionAvecUnNom.name: " + fonctionAvecUnNom.name + "</p>" );
	fonctionAvecUnNom();
	
	// 2: fonction anonyme
	var fonctionAnonyme = function (parametre1) 
	{ 
		document.write("<p>2-Appel fonctionAnonyme</p>" ); 
	} 
	document.write("<p>2-fonctionAnonyme.name: " + fonctionAnonyme.name + "</p>" );
	fonctionAnonyme();
	
	// 3: constructeur d'un objet
	function fonctionConstructeur() { 
		document.write("<p>3-Appel fonctionConstructeur en tant que constructeur d'un objet</p>" ); 
	} 
	var objet1 = new fonctionConstructeur();
	
	// 4: Utilisation de call et apply
	function maFonction( parametre1,parametre2) { 
		document.write("<p>4-Appel via [call] ou [apply] de: " + this.nom + " - parametre1 :"+ parametre1  + " - parametre2 :"+ parametre2  + "</p>"); 
	} 
			 
	var objet1 = { 
		nom: "objet 1", 
	} 
			 
	var objet2 = { 
		nom: "objet 2", 
	} 
			 
	maFonction.call(objet1, "objet1valeur1", "objet1valeur2"); 
	maFonction.call(objet2, "objet2valeur1", "objet2valeur2"); 
	
	// 5: fonction immédiate
	var result1 = (3-1)*2;
	var result2 = (function(){return 3-1}) * 2;
	var result3 = (function(parametre1){return parametre1-1})(3);
	(function()
		{
			document.write("<p>5-Fonction executé immédiatement</p>"); 
		}
	)();
	
})();
		
document.write("<h2>Mot clé this</h2>");
(function() {
	var maFonction = function() { 
		document.write("<p>attribut: " + this.attribut + "</p>"); 
	}; 
			 
	maFonction(); // Affiche la valeur undefined car this.attribut ne peut être résolu 
			 
	// Création de l'objet obj1 et affectation de maFonction 
	var obj1 = { 
		attribut: "valeur1", 
		methode: maFonction 
	} 
			 
	obj1.methode(); // Affiche la valeur de attribut, à savoir valeur1 
			 
	// Création de l'objet obj2 et affectation de maFonction 
	var obj2 = { 
		attribut: "valeur2", 
		methode: maFonction 
	} 
			 
	obj2.methode(); // Affiche la valeur de attribut2, à savoir valeur2 
	
	// TODO application de call
	
	// Création de l'objet obj2 et affectation de maFonction 
	var obj3 = { 
		attribut: "valeur3"
	} 
	
	maFonction.call(obj3); 
	
})();

document.write("<h2>Les closures simulation variable privé/public</h2>");
(function() {
	function MaClasse(parametre) { 
		var attributPrive = parametre; 
				 
		this.methodePublic = function() { 
			attributPrive++;
			document.write("<p>Appel methodePublic: " + attributPrive+ "</p>"); 
		} 
		
		var methodePrive = function() { 
			document.write("<p>Appel methode2: " + attributPrive + "</p>"); 
		} 
	} 
			 
	var objetMaClasse = new MaClasse(10); 
	
	document.write("<p>objetMaClasse.attributPrive: " + objetMaClasse.attributPrive + "</p>"); 
	objetMaClasse.methodePublic(); // Affiche la chaîne de caractères contenant les valeurs des attributs 
	objetMaClasse.methodePublic();
	document.write("<p>typeof(objetMaClasse.methodePrive: " + typeof(objetMaClasse.methodePrive) + "</p>"); 
	
})();	

document.write("<h2>Contexte des fonctions (pas de surcharge)</h2>");
(function() {

	function maFonction1(parametre1, parametre2) { 
		alert('maFonction1 est appele');
	}

	function maFonction1(parametre1, parametre2) { 
		for(var i =0;i< arguments.length; i++)
		{
			document.write("<p>maFonction1." + i + ": " + arguments[i] + "</p>" );
		}
	} 
			 
	maFonction1("paramètre1", "paramètre2", "paramètre3"); 
	
	function maFonction2(parametre1, parametre2) { 
		document.write("<p>maFonction2.parametre1: " + typeof(parametre1) + "</p>" ); 
		document.write("<p>maFonction2.parametre2: " + typeof(parametre2) + "</p>" ); 
	} 
			 
	maFonction2("paramètre1"); 
	 
})();	
