
var userInput = prompt("Please enter you phone number with dashes. It will not be used for SPAM.");
alert(userInput.charAt(3) === '-' && userInput.charAt(7) === '-');

var dateOfBirth = prompt("What is your date of birth?");
alert(dateOfBirth.charAt(2) === '/' && dateOfBirth.charAt(5) === '/');

var postalCode = prompt("What is your postal code?");
alert(postalCode.length === 5 || (postalCode.length === 9 && postalCode.charAt(5) === '-') );

var stateAbb = prompt("What is your state abbreviation?");
alert(stateAbb.length === 2 && stateAbb === stateAbb.toUpperCase());

var married = prompt("Are you married?");
alert((married === 'yes' || married === 'no') && (married === married.toLowerCase() || married === married.toUpperCase() || married === 'Yes'));

