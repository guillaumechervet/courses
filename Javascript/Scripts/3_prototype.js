
document.write("<h2>Prototype</h2>");
		
(function() {
	function MaClasse(parametre1, parametre2) { 
		this.attribut1 = parametre1; 
		this.attribut2 = parametre2; 
	} 
			 
	MaClasse.prototype = { 
		methode: function() { 
			document.write("<p>Attributs: " + this.attribut1 + ", " + this.attribut2 +"</p>"); 
		} 
	} 
			 
	var obj = new MaClasse("valeur1", "valeur2"); 
	
	document.write("<p>Attribut1: " + obj.attribut1 + "</p>");
	//Attribut1: valeur1
	obj.methode();
	//Attributs: valeur1, valeur2
})();

document.write("<h2>Prototype</h2>");

(function () {
    function MaClasseMere(parametre1, parametre2) {
        this.attribut1 = parametre1;
        this.attribut2 = parametre2;
    }

    MaClasseMere.prototype = {
        methode: function () {
            document.write("<p>Attributs: " + this.attribut1 + ", " + this.attribut2 + "</p>");
        },
		inherit:function() { document.write("fonction hérité");}
    }

    function MaClasseFille(parametre1, parametre2, parametre3) {
		MaClasseMere.call(this,parametre1, parametre2);
        this.attribut3 = parametre3;
    }

    MaClasseFille.prototype = new MaClasseMere();

    MaClasseFille.prototype.methode = function () {
            document.write("<p>Attributs: " + this.attribut1 + " ," + this.attribut2 + " ," + this.attribut3+ "</p>");
        }

    var objFille = new MaClasseFille("valeur1", "valeur2", "valeur3");

    document.write("<p>Type de MaClasseFille: " + typeof objFille + "</p>"); 
	//Type de MaClasseFille: object
	document.write("<p>objFille est instance d'MaClasseMere? " +  (objFille instanceof MaClasseMere) + "</p>");
	//objFille est instance d'MaClasseMere? true
    document.write("<p>objFille est instance d'MaClasseFille? " +  (objFille instanceof MaClasseFille) + "</p>");
	//objFille est instance d'MaClasseFille? true	

    objFille.methode();
	//Attributs: valeur1 ,valeur2 ,valeur3
    objFille.inherit();
	//fonction hérité

})();
document.write("<h2>Simple Javascript Inheritance</h2>");
// http://ejohn.org/blog/simple-javascript-inheritance/
