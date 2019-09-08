const dataURL = "https://api.myjson.com/bins/jcmhn";

function getFormValues() {
	let obj = {}; 

	fields.forEach(function(field) {
		obj[field] = $("input[name="+ field +"]")[0].value
	}); 
   return obj; 
}

function handleButton() {
  $.getJSON(dataURL, handleData);
}

function handleData(data) {
	let finalMessage = "";

	let obj = getFormValues();

	data["text"].forEach(function(item) {
		
		for (key in obj) {
			item = item.replace("{" + key + "}", obj[key]);
		}

		finalMessage = finalMessage + item + "<br>"; 

	});
  
	$("div#result").html(finalMessage);
}

function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);
