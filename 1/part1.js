var stringArray;
var numberArray;
var unknownNum;


loadArrayFromExt('1');

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
            numberArray = stringArray.map(el=>parseInt(el));  
            unknownNum = bruteForceTwoSum(numberArray,2020);          

        }
    }
    xmlhttp.open("GET", fileName, true);
    xmlhttp.send();

}


let  bruteForceTwoSum = (array, sum) => {
    let nums = []
    let prevNums = []

    for(let x in array){
        for(let y in array){
            if (parseInt(array[x]) + parseInt(array[y]) === sum){
                if(!!nums.length){ 
                    if (!prevNums.includes(array[x]) && !prevNums.includes(array[y])) {
                        prevNums.push(array[x])
                        nums.push([parseInt([x]), parseInt(array[y])])
                        } 
                } else {
                    nums.push([parseInt([x]), parseInt(array[y])])
                    prevNums.push(parseInt([x]))
                }
            }
        }
    }
   return nums
}


console.log(unknownNum);


