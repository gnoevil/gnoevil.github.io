
var ticketPrice = 1000;
var operator = 'multiply';
var i = 1;
var msg = '';

if (operator === 'multiply') {
	while (i < 6) {
		msg += i + ' * ' + '$' + ticketPrice + ' = ' + '$' + (i * ticketPrice) + '<br />';
		i++;
	}
} else {
	while (i < 6) {
		msg += i + ' / ' + '$' + ticketPrice + ' = ' + '$' + (i / ticketPrice) + '<br />';
		i++;
	}
}
// Write the message into the page
var el = document.getElementById('random');
el.innerHTML = msg;
