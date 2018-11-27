var str = "hello word";

function ucfirst(str) 
{
	if(typeof str == "string") {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
	else{
		var hello = "";
		return hello;
	}
}

var str = "hello word";

function capitalize(str) 
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

var str = "hello word";

function camelCase(str) {
      return str.replace(/\W+(.)/g, function(match, chr)
        {
            return chr.toUpperCase();
         });
     }

function leet(chr) {
	var chrs = {'a':'4','e':'3','i':'1','o':'O','u':'(_)','y':'7'};
	return chrs[chr.toLowerCase()] || chr;
}
 
var message = "Anaconda";

var str  = "hello world";

function verlan(str){
	if(str === ""){
		return str ;
	}else{
		return verlan(str.substr(1)) + str[0];
	}
}

console.log(ucfirst(str));
console.log(capitalize(str));
console.log(camelCase(str));
console.log( message.replace(/[aeltso]/g, leet) );
console.log(verlan(str));