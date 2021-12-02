
//Day and Month part
var day = document.getElementById("day");
var date = document.getElementById("date");


var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

var dates = new Date();

day.innerText = days[dates.getDay()];
var month = dates.getMonth() + 1;
date.innerText = dates.getDate() + "/" + month + "/" + dates.getFullYear();

//End of Day and Month part

//Input Button function
/*$(function() {
	var elem = $("<div id='list'></div>");
    $("#ok").on("click", function() {
        var val = $("#input").val();
        if(val !== '') {
		
            $(elem).append("<label class='checkbox'><input type='checkbox' name='items' id='check'/><span id='span' class='span'>"+ val +"</span></label>");
            
            $("#Itemssec").append(elem);
            $("#input").val("");
  		    
         }else{
        	alert("Sorry! You must Input A List :(");
        };
    });
    
      
   
    
    
});*/
//End of Input Button Function

var elem = document.getElementById("Itemssec");
var input = document.getElementById("input");

function ok(){
	var val = document.getElementById("input").value;
	
	if (val != "") {
		elem.innerHTML += "<div id='list'><label class='checkbox'><input type='checkbox' name='items' id='check'/><span id='span' class='span'>" + val + "</span></label></div>";
		
		 var input = document.getElementById("input").value = "";
		 
		 

	}else{
		alert("Sorry, You must Input a List :(");
	}
}

function Clear(){
	var lists = document.getElementById("Itemssec");
	
	lists.innerHTML = "";
}

$("#input").keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        ok();
    }
});

