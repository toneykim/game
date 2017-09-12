$(document).ready(function(){
$(document).on('click', '#stark', function(){
	//console.log("clicked stark")
	$.get('https://anapioficeandfire.com/api/houses/362', function(data){
			/*console.log(data.name);
			console.log(data.words);
			console.log(data.titles.length);
			console.log(data.titles[0]);*/
		$('#api').html("<p>Name: " + data.name + "</p><p>Words: " + data.words + "</p>")
		var thetitles = "";  
			for(var i =0; i<data.titles.length-1; i++){
			thetitles = thetitles + (data.titles[i]+", ");
			};
		$('#api').append("<p>Titles: " + thetitles +
		data.titles[data.titles.length-1] + "</p>");
		},'json');
}); // on


$(document).on('click', '#fire', function(){
	//console.log("clicked targaryen")
	$.get('https://anapioficeandfire.com/api/houses/378', function(data){
			/*console.log("api")
			console.log(data.name);
			console.log(data.words);
			console.log(data.titles.length);
			console.log(data.titles[0]);*/
	$('#api').html("<p>Name: " + data.name + "</p><p>Words: " + data.words + "</p>")
	var thetitles = "";  
	for(var i =0; i<data.titles.length-1; i++){
		thetitles = thetitles + (data.titles[i]+", ");
	};
	$('#api').append("<p>Titles: " + thetitles +
	data.titles[data.titles.length-1] + "</p>");
	},'json');
}); // on


$(document).on('click', '#hear', function(){
	//console.log("clicked lannister")
	$.get('https://anapioficeandfire.com/api/houses/229?version=1', function(data){
		/*	console.log("api")
			console.log(data.name);
			console.log(data.words);
			console.log(data.titles.length);
			console.log(data.titles[0]);*/
	$('#api').html("<p>Name: " + data.name + "</p><p>Words: " + data.words + "</p>")
	var thetitles = "";  
	for(var i =0; i<data.titles.length-1; i++){
		thetitles = thetitles + (data.titles[i]+", ");
	};
	$('#api').append("<p>Titles: " + thetitles +
	data.titles[data.titles.length-1] + "</p>");
	},"json");
}); // on


$(document).on('click', '#house', function(){
	//console.log("clicked baratheon")
	$.get('https://anapioficeandfire.com/api/houses/17?version=1', function(data){
			/*console.log("api")
			console.log(data.name);
			console.log(data.words);
			console.log(data.titles.length);
			console.log(data.titles[0]);*/
	$('#api').html("<p>Name: " + data.name + "</p><p>Words: " + data.words + "</p>")
	var thetitles = "";  
	for(var i =0; i<data.titles.length-1; i++){
		thetitles = thetitles + (data.titles[i]+", ");
	};
	$('#api').append("<p>Titles: " + thetitles +
	data.titles[data.titles.length-1] + "</p>");
	},'json');

}); // on
}); // ready
