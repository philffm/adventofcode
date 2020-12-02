var stringArray;
var pwCount = 0;


function loadArrayFromExt(fileName){
    var xmlhttp;

    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else { // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var text = xmlhttp.responseText;
            // Now convert it into array using regex
            stringArray = text.split(/\n|\r/g);
            findPass(stringArray);
        }
    }
    xmlhttp.open("GET", fileName, true);
    xmlhttp.send();

}


loadArrayFromExt('input');


const checkOccurance = (theString, theSubst) => {

    return theString.split(theSubst).length - 1;

}

function findPass(theString){
    for (i = 0; i < stringArray.length; i++){

        // password
        let pw = theString[i].split(": ")[1];
    
        // letter 
        let letter = theString[i].split(" ")[1].replace(':','');
    
        // occurences
        let lowVal = theString[i].split(" ")[0].split('-')[0];
        let hiVal = theString[i].split(" ")[0].split('-')[1];
        
        let letterOccurance = checkOccurance(pw,letter);
        
        if(letterOccurance<=hiVal && letterOccurance>=lowVal){
            pwCount++;
            console.log('JAWOLL!');
        }
    
        if(i == (stringArray.length-1){
            afterForloop();
        }
        console.log( pw+' '+lowVal+' '+hiVal+' '+letter);
    
    
    }
}


function afterForloop(){
    console.log(pwCount + " valid Passwords 👯‍♀️");
}


console.log(checkOccurance("Ballern","l"));


