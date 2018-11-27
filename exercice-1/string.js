
/* ucFirst : 1ère lettre en MAJ */

var string = "hello word";

function Ucfirst(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(Ucfirst(string));

// /* Capitalize : 1ère lettre de chaque mot en MAJ */

var str = "hello word";

function capitalize(str) 
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

console.log(capitalize(str));

/* camelCase : Capitalize + colle les mots */


var str = "hello word";

function camelCase(str) {
      return str.replace(/\W+(.)/g, function(match, chr)
        {
            return chr.toUpperCase();
         });
     }

 console.log(camelize(str));

// snake_case Joindre les mots par des underscores en MIN



// leet - Cryptage (uniquement les voyelles) anaconda => 4n4c0nd4 A=>4, E=>3, I=>1, O=>0 ,U=> (_), Y=>7

function leet(chr) {
  var chrs = {'a':'4','e':'3','i':'1','o':'O','u':'(_)','y':'7'};
  return chrs[chr.toLowerCase()] || chr;
}
 
var message = "Anaconda";
 
console.log( message.replace(/[aeltso]/g, leet) );

// prop_access “animal.type.name” => animal[“type”][“name”] prop_access(prairie, “animal.type.name”) => praire.animal.type.name => “chien” Si attribut non existant, afficher le chemin jusqu’à l’attribut => “animal.gender not exist” Si path vide ou null, renvoyer l’objet comple

		//A FAIRE !!
		
//verlan Inverser chaque mot d’une phrase Hello world => olleH dlrow  https://medium.com/quick-code/5-ways-to-reverse-a-string-in-javascript-466f62845827

var str  = "hello world";

function verlan(str){
 if(str === ""){
  return str ;
 }else{
  return verlan(str.substr(1)) + str[0];
 }
}

console.log(verlan(str));

// yoda Inverser la position des mots d’une phrase Hello world => world Hello 


// vig - Cryptage => Chiffre de Vigenère wikipedia + crypto => yzixisfzy