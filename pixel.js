// Function to make grid
function makeGrid(height, width){
	$(".container").append("<table class = 'grid'></table>");
	
	// Outer loop to create table rows
	for (let i = 1; i <= height; i++) {
		$("table").append("<tr></tr>");
		$("tr").last().addClass("selected");
		
	// Inner loop to create table columns	
		for (let q = 1; q <= width; q++) {
			$("tr.selected").append("<td></td>");
			
		}
		
	// Toggle the class selected
		$("tr").removeClass ("selected");
	}
}

// Function to clear grid
function clearGrid(){
	$(".grid").remove();
}

// Function to refresh grid
function refreshGrid(){
	let height, width;
	height = $("#height").val();
	width = $("#width").val();
	
	makeGrid(height, width);

}

// Function to get values on form submit
function getValues (){
	$("#height, #width").change(function(event){
		$(this).attr("value", function(){
			let newValue;
			newValue = $(this).val();
			return newValue;
		});
		
	});
}

// Function to get color on form submit
function getColour(){
	let colour;
	colour = $("#col").val();
	
	$("#col").change(function(){
		colour = $(this).val();
		
	});

	// Check if background color is the same as current color
	function rgba2hex( color_value ) {
		if ( ! color_value ) return false;
		var parts = color_value.toLowerCase().match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/),
			length = color_value.indexOf('rgba') ? 3 : 2; // Fix for alpha values
		delete(parts[0]);
		for ( var i = 1; i <= length; i++ ) {
			parts[i] = parseInt( parts[i] ).toString(16);
			if ( parts[i].length == 1 ) parts[i] = '0' + parts[i];
		}
		return '#' + parts.join(''); // #F7F7F7
	}

	$("td").click(function() {
	let currentColour;
	currentColour = $(this).css('background-color');

	let newColour = rgba2hex(currentColour);
	
	if ($("#col").val()==newColour){
		$(this).css("background-color", "white");
	}
	else{
		$(this).css("background-color", colour);
	}
		
	
});
}
	



$(function() {

	// Make grid when document is ready
	getValues();
	refreshGrid();
	getColour();

		
	// Add event listener to form submit
	$("form").submit(function(event){
		event.preventDefault();
		
		clearGrid();
		refreshGrid();
		getColour();
	
	
	});
	
});