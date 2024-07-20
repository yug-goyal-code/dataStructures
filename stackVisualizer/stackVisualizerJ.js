var enterElement = document.getElementById("enterElement");
var getElement = document.getElementById("getElement");
var deleteElement = document.getElementById("deleteElement");
var printArray = document.getElementById("printArrayUTTON");
var arrayDsa = [];
enterElement.onclick = function(){

    document.getElementById("peekElementResult").innerHTML = "";
    document.getElementById("successMessage").innerHTML = "";
    document.getElementById("printArray").innerHTML = "";
    document.getElementById("popElementResult").innerHTML = ""

     /***************************************decide visibility of element************************************************/
     document.getElementById("enterElementDiv").style.display = "block";
     document.getElementById("popElementDiv").style.display = "none";
     document.getElementById("peekElementDiv").style.display = "none";
     document.getElementById("printStackDiv").style.display = "none";
     /******************************************************************************************************************** */
    document.getElementById("enterData").onclick = function(){
        var data = document.getElementById("enterElementInput").value; 
        if(data!=="") {
            arrayDsa.push(data);
            console.log(arrayDsa);
            document.getElementById("successMessage").innerHTML = "Data Pushed succesfully in Stack!!";
            document.getElementById("successMessage").style.backgroundColor = "rgb(142, 204, 142)";
            document.getElementById("enterElementInput").value = "";
        }
        else{
            document.getElementById("successMessage").innerHTML = "Please Enter some data !!";
            document.getElementById("successMessage").style.backgroundColor = "rgb(248, 150, 138)";
        }
        
    }
}
popElement.onclick = function(){
    
    document.getElementById("peekElementResult").innerHTML = "";
    document.getElementById("successMessage").innerHTML = "";
    document.getElementById("printArray").innerHTML = "";
    document.getElementById("popElementResult").innerHTML = ""

    /***************************************decide visibility of element************************************************/
    document.getElementById("enterElementDiv").style.display = "none";
    document.getElementById("popElementDiv").style.display = "block";
    document.getElementById("peekElementDiv").style.display = "none";
    document.getElementById("printStackDiv").style.display = "none";
    /******************************************************************************************************************** */
    var si = arrayDsa.length;
    if(si==0){
        document.getElementById("popElementResult").innerHTML = "Can't pop Element from Empty Stack";
        document.getElementById("popElementResult").style.backgroundColor = "rgb(248, 150, 138)";
    }
    else{
        arrayDsa.splice(si-1,1);
        document.getElementById("popElementResult").innerHTML = "Data popped Successfully";;
        document.getElementById("popElementResult").style.backgroundColor = "rgb(142, 204, 142)";
    }
}
peekElement.onclick = function(){
    
    document.getElementById("peekElementResult").innerHTML = "";
    document.getElementById("successMessage").innerHTML = "";
    document.getElementById("printArray").innerHTML = "";
    document.getElementById("popElementResult").innerHTML = ""

     /***************************************decide visibility of element************************************************/
     document.getElementById("enterElementDiv").style.display = "none";
     document.getElementById("popElementDiv").style.display = "none";
     document.getElementById("peekElementDiv").style.display = "block";
     document.getElementById("printStackDiv").style.display = "none";
     /******************************************************************************************************************** */
    var si = arrayDsa.length;
    if(si==0){
        document.getElementById("peekElementResult").innerHTML = "Stack is Empty Presently";
        document.getElementById("peekElementResult").style.backgroundColor = "rgb(248, 150, 138)";
    }
    else{
        document.getElementById("peekElementResult").innerHTML = "Top Most Element of Stack = "+arrayDsa[si-1];
        document.getElementById("peekElementResult").style.backgroundColor = "rgb(142, 204, 142)";
    }
}
printStackButton.onclick = function(){
    
    document.getElementById("peekElementResult").innerHTML = "";
    document.getElementById("successMessage").innerHTML = "";
    document.getElementById("printArray").innerHTML = "";
    document.getElementById("popElementResult").innerHTML = ""

     /***************************************decide visibility of element************************************************/
     document.getElementById("enterElementDiv").style.display = "none";
     document.getElementById("popElementDiv").style.display = "none";
     document.getElementById("peekElementDiv").style.display = "none";
     document.getElementById("printStackDiv").style.display = "block";
     /******************************************************************************************************************** */
    var res = "";
    for(i=0;i<arrayDsa.length;i++){
        res+=arrayDsa[i]+" | ";
    }
    document.getElementById("printArray").innerHTML = res;
}