/*
	WEB 303 Assignment 1 - jQuery
	Colby Morgan 0764405
*/

$(document).ready(function(){

	var $Amount = 0;
	var $Salary = 0;
	var $Percent = 0;


	$('input').on('change',function(){

		$Salary = $('input#yearly-salary').text();
		$Percent = $('input#percent').text();
		$Amount = $Salary * $Percent / 100;
		$Amount = '$' . $Amount;

		$Amount = $Amount.toFixed(2);

		$('span#amount').text($Amount);
    });

});