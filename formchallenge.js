$(document).ready(function() {
	$("form").submit(function(event){
		event.preventDefault();
		var $inputs = $("input");
		var employee = {};

		$inputs.each(function() {
			employee[this.name] = $(this).val();
		});
		console.log(employee);


		//append to DOM

		var $myObject = $("<li>" + employee.First + " " + employee.Last + "</br>" + 
							employee.empNumber + "</br>" +
							employee.Title + "</br>" +
							employee.lastReviewScore + "</br>" +
							employee.Salary + "</br>" +
							"</li>");

		$(".entry").append($myObject);

		//gets the "remove" button to appear

		var $myButton = $("<button>" + "Remove" + "<button>");

		$(".entry").append($myButton);



		$($myButton).on("click", function() {
			$myObject.remove();
			$myButton.remove();


		});

		var employeeArray = [];
		employeeArray.push($myObject);
		console.log(employeeArray);

		var totalSalary= 0;

	function totalPaid(array) {
		for(var i = 0; i<array.length; i++){
			totalSalary = parseInt(totalSalary + array[i].salary);
		}
	return totalSalary;
	}

	console.log(totalPaid(employeeArray));

var $myEmployee = $(parseInt(employee.lastReviewScore));	

console.log($myEmployee);

if($myEmployee == 1) {
	$($myEmployee).css({"color": "red"});
} else {
	$($myEmployee).css({"color": "green"});

};

});
		
        
    });





	































