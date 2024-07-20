var enterElement = document.getElementById("enterElement");
var getElement = document.getElementById("getElement");
var deleteElement = document.getElementById("deleteElement");
var printArray = document.getElementById("printArrayUTTON");
var arrayDsa = [];
enterElement.onclick = function(){
    document.getElementById("successMessage").innerHTML = "";
    document.getElementById("valueAtGivenIndex").innerHTML = "";
    document.getElementById("deleteResultShown").innerHTML = "";
    document.getElementById("getElementDiv").style.display = "none";
    document.getElementById("enterElementDiv").style.display = "block";
    document.getElementById("printArrayDiv").style.display = "none";
    document.getElementById("deleteElementDiv").style.display = "none";
    /*on click of button enter data */
    document.getElementById("enterData").onclick = function(){
        var data = document.getElementById("enterElementInput").value; 
        if(data!=="") {
            arrayDsa.push(data);
            console.log(arrayDsa);
            document.getElementById("successMessage").innerHTML = "Data Inserted succesfully !!";
            document.getElementById("successMessage").style.backgroundColor = "rgb(142, 204, 142)";
            document.getElementById("enterElementInput").value = "";
        }
        else{
            document.getElementById("successMessage").innerHTML = "Please Enter some data !!";
            document.getElementById("successMessage").style.backgroundColor = "rgb(248, 150, 138)";
        }
        
    }
}
getElement.onclick = function(){
    document.getElementById("successMessage").innerHTML = "";
    document.getElementById("valueAtGivenIndex").innerHTML = "";
    document.getElementById("deleteResultShown").innerHTML = "";
    document.getElementById("getElementDiv").style.display = "block";
    document.getElementById("enterElementDiv").style.display = "none";
    document.getElementById("printArrayDiv").style.display = "none";
    document.getElementById("deleteElementDiv").style.display = "none";
    document.getElementById("getElementButton").onclick = function(){
        var index = document.getElementById("indexOfElement").value;
        console.log("index = "+index);
        if(arrayDsa.length>=0 && arrayDsa.length>index && index!=""){
            document.getElementById("valueAtGivenIndex").innerHTML = "Value at given index = "+ arrayDsa[index];
            document.getElementById("valueAtGivenIndex").style.backgroundColor = "rgb(142, 204, 142)";
        }
        else{
            document.getElementById("valueAtGivenIndex").innerHTML = "Please Enter a valid Index, size of array = "+arrayDsa.length;
            document.getElementById("valueAtGivenIndex").style.backgroundColor = "rgb(248, 150, 138)";
        }
        document.getElementById("indexOfElement").value = "";
    }
    
}
deleteElement.onclick = function(){
    document.getElementById("successMessage").innerHTML = "";
    document.getElementById("valueAtGivenIndex").innerHTML = "";
    document.getElementById("deleteResultShown").innerHTML = "";
    document.getElementById("getElementDiv").style.display = "none";
    document.getElementById("enterElementDiv").style.display = "none";
    document.getElementById("printArrayDiv").style.display = "none";
    document.getElementById("deleteElementDiv").style.display = "block";
    document.getElementById("deleteElementButton").onclick = function(){
        var deleteE = document.getElementById("deleteNumberInput").value;
        var res = -1;
        for(i=0;i<arrayDsa.length;i++){
            if(arrayDsa[i]==deleteE){
                res = i;
                break;
            }
        } 
        if(res==-1){
            document.getElementById("deleteResultShown").innerHTML = "Element is not present in Array";
            document.getElementById("deleteResultShown").style.backgroundColor = "rgb(248, 150, 138)";
        }
        else{
            arrayDsa.splice(res,1);
            document.getElementById("deleteResultShown").innerHTML = "Element deleted Successfully";
            document.getElementById("deleteResultShown").style.backgroundColor = "rgb(142, 204, 142)";
        }
        document.getElementById("deleteNumberInput").value = "";
    }
}
printArrayButton.onclick = function(){
    document.getElementById("successMessage").innerHTML = "";
    document.getElementById("valueAtGivenIndex").innerHTML = "";
    document.getElementById("deleteResultShown").innerHTML = "";
    document.getElementById("getElementDiv").style.display = "none";
    document.getElementById("enterElementDiv").style.display = "none";
    document.getElementById("printArrayDiv").style.display = "block";
    document.getElementById("deleteElementDiv").style.display = "none";
    document.getElementById("printArray").innerHTML = arrayDsa;
}