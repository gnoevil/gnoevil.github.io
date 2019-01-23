/* The script is placed inside an immediately invoked function expression
which helps protect the scope of variables */

(function() {

  // PART ONE: CREATE AN OBJECT AND WRITE OUT THE DETAILS

  // Create an object using object literal syntax
  var subject = {
    name: 'Motorsports, Tech, and Education',
    classRate: 1000, // Amount in dollars
    discount: 20, // Percentage discount
    offerPrice: function() {
      var offerRate = this.classRate * ((100 - this.discount) / 100);
      return offerRate;
    }
  };

  // Write out the class name, standard rate, and the special rate
  var className, classRate, specialRate; // Declare variables

  className = document.getElementById('className'); // Get elements
  classRate = document.getElementById('classRate');
  specialRate = document.getElementById('specialRate');

  className.textContent = subject.name; // Write class name
  classRate.textContent =  '$' + subject.classRate.toFixed(2); // Write class rate
  specialRate.textContent = '$' + subject.offerPrice(); // Write offer price


  // PART TWO: CALCULATE AND WRITE OUT THE EXPIRY DETAILS FOR THE OFFER
  var expiryMsg; // Message displayed to users
  var today; // Today's date
  var elEnds; // The element that shows the message about the offer ending

  function offerExpires(today) { // Declare variables within the function for local scope
    var weekFromToday, day, date, month, year, dayNames, monthNames;
    // Add 7 days time (added in milliseconds)

    weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

    // Create arrays to hold the names of days / months
    dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // Collect the parts of the date to show on the page
    day = dayNames[weekFromToday.getDay()];
    date = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();

    // Create the message
    expiryMsg = '<p>Space is limited and this and will expire on</p>';
    expiryMsg += day + ' ' + date + ' ' + month + ' ' + year;
    return expiryMsg;
  }

  today = new Date(); // Put today's date in variable
  elEnds = document.getElementById('offerEnds'); // Get the offerEnds element
  elEnds.innerHTML = offerExpires(today); // Add the expiry message

  // Finish the immediately invoked function expression
}());
