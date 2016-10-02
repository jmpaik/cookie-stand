'use strict';


var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var cookieStands = [];
var salesPerHour = [];
var grandTotalSales = 0;
var newLocation = document.getElementById('cookiestand_form');
var tableDataDisplay = document.getElementById('salesReport_js');

function CookieStand(newLocation, minCustomersHour, maxCustomersHour, avgCookiesCustomer) {
  this.newLocation = newLocation;
  this.minCustomersHour = minCustomersHour;
  this.maxCustomersHour = maxCustomersHour;
  this.avgCookiesCustomer = avgCookiesCustomer;
  this.randCustomersPerHour = [];
  this.randCookiesPerHour = [];
  this.CookieSales = 0;
  CookieStand.prototype.calcRandCustomersPerHour = function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustomersHour - this.minCustomersHour + 1)) + this.minCustomersHour);
    }
  };
  CookieStand.prototype.calcRandCookiesPerHour = function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCookiesPerHour[i] = Math.round(this.randCustomersPerHour[i] * this.avgCookiesCustomer);
      this.CookieSales += this.randCookiesPerHour[i];
    }
  };
  CookieStand.prototype.renderTableBody = function () {
    var tableDataDisplay = document.getElementById('salesReport_js');
    var trEl = document.createElement('tr'); //Creates rows for business location
    var tdEl = document.createElement('td'); //Creates columns for business location name
    tdEl.textContent = this.newLocation; //Adds business location name to columns
    trEl.appendChild(tdEl); //Adds business location name column to row for current business location[i]
    for (var a = 0; a < hours.length; a++) {
      tdEl = document.createElement('td'); //Creates columns for hours
      tdEl.textContent = cookieStands[i].randCookiesPerHour[a]; //Adds hourly sales of cookies per business location[i] row
      trEl.appendChild(tdEl); //Adds hourly sales of cookies per business to column for current business location[i]row
    }
    tdEl = document.createElement('td');
    tdEl.textContent = this.CookieSales; //Creates a column for the daily total cookies sold
    trEl.appendChild(tdEl); //Adds daily cookies total sold to business location row
    tableDataDisplay.appendChild(trEl); //Adds row for each business location to reporting table
  };

  this.calculate = function () {
    this.calcRandCustomersPerHour();
    this.calcRandCookiesPerHour();
  };
  cookieStands.push(this);
  this.calculate();
}

function renderTableHeader() {
  var tableDataDisplay = document.getElementById('salesReport_js');
  var trEl = document.createElement('tr'); //Creates a row for each business
  var thEl = document.createElement('th'); //Creates a table header column to hold hours
  thEl.textContent = 'Stand Location'; //Created Location cell in the first column in the table header row
  trEl.appendChild(thEl); //Add hours of day to table header row
  for (var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');//Creates table header row to hold hours of the day
    thEl.textContent = hours[i]; //Adds hours of the day to table header
    trEl.appendChild(thEl); //Adds hour of the day to the table header row
  }
  thEl = document.createElement('th'); //Create a table header row for daily totals
  thEl.textContent = 'Location Totals'; //Add totals to the table header row in last column
  trEl.appendChild(thEl); //Add totals to table header row in last column
  tableDataDisplay.appendChild(trEl); //Add table header row to daily data table
};

function renderTableFooter() {
  var tableDataDisplay = document.getElementById('salesReport_js');
  var trEl = document.createElement('tr'); //Create row for business location
  var tdEl = document.createElement('td'); //Create column for business location name
  tdEl.textContent = 'Hourly Totals';
  trEl.appendChild(tdEl);
  for (var a = 0; a <= hours.length; a++) { //Creates column for each hour of the day
    tdEl = document.createElement('td'); //Creates column for each hour of day
    tdEl.textContent = salesPerHour[a]; //Adds hourly sales of cookies per business location[i]
    trEl.appendChild(tdEl); //Adds hourly sales of cookies per business to column for current business location[i] row
  }
  tdEl.textContent = grandTotalSales; //Creates column for grand total
  trEl.appendChild(tdEl); //Adds daily cookies total sold to business location row
  tableDataDisplay.appendChild(trEl); //Adds row for each business location to reporting table
};

function calcGrandTotal() {
  for (var i = 0; i < hours.length; i++) {
    var hourlyCookieSales = 0;
    for (var x = 0; x < cookieStands.length; x++) {
      hourlyCookieSales += cookieStands[x].randCookiesPerHour[i];
    }
    salesPerHour.push(hourlyCookieSales);
  }
  for (var y = 0; y < cookieStands.length; y++) {
    grandTotalSales += cookieStands[y].CookieSales;
  }
}

renderTableHeader();

new CookieStand('First And Pike', 23, 65, 6.3);
new CookieStand('Seatac Airport', 3, 24, 1.2);
new CookieStand('Seattle Center', 11, 38, 3.7);
new CookieStand('Capitol Hill', 20, 38, 2.3);
new CookieStand('Alki', 2, 16, 4.6);
calcGrandTotal();
//this is where you want to do you render method for each object. Maybe a for loop in your array of locations?
for (var i = 0; i < cookieStands.length; i++) {
  cookieStands[i].renderTableBody();
}

renderTableFooter();

//Below is the Forms Submission
function renderCookieStand() {
  tableDataDisplay.innerHTML = ''; //Clear the data table (tableDataDisplay)
  salesPerHour = []; //Clear the salesByHour array
  grandTotalSales = 0; //Clear the total sales across all locations
  renderTableHeader(); //reRender the header for the table
  for (var i = 0; i < cookieStands.length; i++) { //Loop through the businesses array to render the table
    cookieStands[i].renderTableBody(); //reRender the table body for the current business[i]
  }
  calcGrandTotal(); //Calculate the new sales totals
  renderTableFooter(); //reRender the footer for the table
}

function addLocation(event) {
  event.preventDefault();

  var newLocation = event.target.new_location.value;
  var minCustomersHour = parseInt(event.target.min_customers.value);
  var maxCustomersHour = parseInt(event.target.max_customers.value);
  var avgCookiesCustomer = parseFloat(event.target.avg_cookies.value);

  new CookieStand(newLocation, minCustomersHour, maxCustomersHour, avgCookiesCustomer);

  event.target.new_location.value = null; //Remove text from the form after submission
  event.target.min_customers.value = null; //Remove text from the form after submission
  event.target.max_customers.value = null; //Remove text from the form after submission
  event.target.avg_cookies.value = null; //Remove text from the form after submission

  renderCookieStand(); //reRun the renderBusinesses function to recreate the table
}

//Create Event Listener for clicks on submit button on newLocation form
newLocation.addEventListener('submit', addLocation);
