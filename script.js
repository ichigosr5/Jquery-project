$(document).ready(function() {

	$('body').prepend('<button onclick="buttonClick()">Reset!</button>');

	 grid = function(columes, rows) {

		for (z = 0; z < columes; z++) {
			$('body').append('<div class="' + z + '"></div>');

			for (x = 0; x < rows; x++) {
				$('.' +z).append('<div class="grid"></div>');
			}
		}
		$('.grid').height((400/rows) + 'px');
		$('.grid').width((400/columes) + 'px');
		$('.grid').css('background-color','grey');
		$('.grid').css('border','1px solid white');
		$('.grid').css('display','inline-block');
		$('.grid').hover(function() {
			$(this).css('background-color','white');
		});
	}
	newColume = prompt("How many columes?");
	newRow = prompt("How many rows?");
	grid(newColume,newRow);
});
var buttonClick = function() {
	$('div').remove();
	newColume = prompt("How many columes?");
	newRow = prompt("How many rows?");
	grid(newColume,newRow);
}
