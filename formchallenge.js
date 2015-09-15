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
							'<span class = "reviewScore">' + employee.lastReviewScore + "</span>"+ "</br>" +
							employee.Salary + "</br>" +
							"</li>");

		$(".entry").append($myObject);

		var $inputs = $(".myInputs input");
		//clears input fields but I need to put a div around the inputs
		$(".myInputs input").val("");

		//gets the "remove" button to appear and appends it 

		var $myButton = $("<button>" + 'Remove' + "<button>");

		$(".entry").append($myButton);


//when the remove button is clicked, the object is removed along with the button
		$($myButton).on("click", function() {
			$myObject.remove();
			$myButton.remove();
		});

		$("span.reviewScore").each(function() {
			var review = $(this).html();

			switch(review) {
				case("1"): $(this).css("color", "red");
				break;
				case("2"): $(this).css("color", "black");
				break;
				case("3"): $(this).css("color", "black");
				break;
				case("4"): $(this).css("color", "black");
				break;
				case("5"): $(this).css("color", "green");
				break;
				default: $(this).text("Please enter a number 1 through 5");
				break;

			}

		})
//trying to figure out how to get the sum of the salaries
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





});
		
        
    });





	































