//Declaration de la variable :

var str = "hello word";

// ucfirst

function ucfirst(str) 
{
	if(typeof str == "string") {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
	else{
		return "";
	}
}

// capitalize

function capitalize(str) {
	if (typeof str === "string") {
		return str.toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(' ');
    } else {
    	return "";
    }
}

// camelCase

function camelCase(str) {
	if (typeof str === "string") {
		return str.toLowerCase()
    .split(/_| /)
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1)).join('');
    } else {
    	return "";
    }
}

// snake_case

function snake_case(str) {
    if (typeof str == 'string') {
        return str.replace(/ /g, '_').toLowerCase();
	}
    else{
		return "";
	}
}

// leet

function leet(str){
	if( typeof str === 'string' ){
		var mot = "";
		for (var i = 0; i < str.length; i++) {
			var lettre = str.charAt(i);
			switch(lettre){
				
				case "a":
					lettre = "4";
					break;
					
				case "A":
					lettre = "4";
					break;
					
				case "e":
					lettre = "3";
					break;
					
				case "E":
					lettre = "3";
					break;
					
				case "i":
					lettre = "1";
					break;
					
				case "I":
					lettre = "1";
					break;
					
				case "o":
					lettre = "0";
					break;
					
				case "O":
					lettre = "0";
					break;
					
				case "u":
					lettre = "(_)";
					break;
					
				case "U":
					lettre = "(_)";
					break;
					
				case "y":
					lettre = "7";
					break;
					
				case "Y":
					lettre = "7";
					break;
			}
			mot = mot + lettre;
		}
		return mot;
	}else{
		return '';
	}
}

// prop_access

function prop_access(object, path) {
    if (typeof path != "string"){
        return object;
    }

    if(typeof object != 'object' || object == null) {
        console.log(path + ' not exist');
        return;
    }
    if (path === null || path === '') {
        return object;
    }

    const props = path.split('.');
    let property = object;
    props.forEach(function (prop) {
        if(!property.hasOwnProperty(prop)) {
            console.log(path + ' not exist');
            return;
        }
        property = property[prop];
    });
    return property;
}

var prairie =
{
  animal : {
    type : {
      name : "chien"
    }
  }
}

// verlan

function verlan(str) {
	if (typeof str === "string") {
		return str.split("").reverse().join("").split(" ").reverse().join(" ");
	} else {
		return "";
	}
}


// yoda 

function yoda(str) {
	if (typeof str === "string") {
		return str.split(" ").reverse().join(" ");
	} else {
		return "";
	}
}

// vig

function vig(mot, clef) {
  if (typeof mot != "string" || typeof clef != "string"){
    return "";
  }
  motCrypte = "";
  cptSpace = 0;
  for(var i = 1;i <= mot.length; i++) {
    if(mot.charAt(i-1) != " ") {
      codeLettre = mot.toUpperCase().charCodeAt(i-1)-65;
      decalage = clef.toUpperCase().charCodeAt((i-1-cptSpace)%clef.length)-65;
      lettre = String.fromCharCode(65+(codeLettre+decalage)%26);
      motCrypte = motCrypte.concat('', lettre);
    } else {
      cptSpace++
      motCrypte = motCrypte.concat('', ' ');
    }
  }
  return motCrypte.toLowerCase();
}

// utilisation des fonctions 

console.log(ucfirst(str));
console.log(capitalize(str));
console.log(camelCase(str));
console.log(snake_case(str));
console.log(leet(str));
console.log(prop_access(prairie,"animal.type.name"));
console.log(verlan(str));
console.log(yoda(str));
console.log(vig("wikipedia","crypto"));