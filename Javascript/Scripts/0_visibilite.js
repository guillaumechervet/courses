document.write("<h2>Visibilité des variables et fonctions</h2>");

	document.write("<p>Avant fonction1, typeof(fonction1): " + typeof(fonction1) + "</p>" ); 
	document.write("<p>Avant fonction1 et avant variable1, typeof(variable1): " + typeof(variable1) + "</p>" ); 

	var variable1 = "variable1";
	document.write("<p>Avant fonction1 et après variable1, typeof(variable1): " + typeof(variable1) + "</p>" ); 

	function fonction1() 
	{ 
		var variable2 = "variable2";
			
		if(true)
		{
			var variable3 = "variable3";
		}
		if(false)
		{
			var variable4 = "variable4";
		}
		
		document.write("<p>Dans fonction1, typeof(variable2): " + typeof(variable2) + "</p>" ); 
		document.write("<p>Dans fonction1, typeof(variable3): " + typeof(variable3) + "</p>" ); 
		document.write("<p>Dans fonction1, typeof(variable4): " + typeof(variable4) + "</p>" ); 
		
		window.variable5 = "variable5";
	} 

	fonction1();
	document.write("<p>Après fonction1, typeof(variable2): " + typeof(variable2) + "</p>" ); 
	document.write("<p>Après fonction1, typeof(variable5): " + typeof(variable5) + "</p>" ); 


document.write("<h2>Les closures</h2>");

	var after;

	function fonctionExterne() { 
		var maVariableInterne = 0; 
		
		function fonctionInterne() { 
			maVariableInterne = maVariableInterne + 1;
			document.write("<p>Appel de uneSousFonction, valeur de maVariableInterne : " + maVariableInterne + "</p>"); 
		} 
		
		after = fonctionInterne;
	} 
		 
	fonctionExterne(); 
	
	after();
	
	after();
	 	
		
	/*
    for(var i = 0 ; i < 3 ; i++)
    {
        window.setTimeout(function(){           
            document.write("<p>"+ i +"</p>");      
        }, 1000); 
    }
   
   */
   /*
   for(var i = 0 ; i < 3 ; i++)
	{      
	   window.setTimeout((function(arg1){           
		  // On enferme le résultat dans une fonction           
		  return function(){                
			 document.write("<p>"+ arg1 +"</p>");      
		  }      
	   })(i), 1000); // (i) exécute la fonction passée en callback dans setTimeOut avec i en paramètre 
	}
   
   */

