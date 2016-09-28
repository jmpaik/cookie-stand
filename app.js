'use strict';


var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var cookieStands = [];
//var salesPerHour = [];
//var grandTotalSales = 0;

function CookieStand(name, minCustomersHour, maxCustomersHour, avgCookiesCustomer) {
  this.name = name;
  this.minCustomersHour = minCustomersHour;
  this.maxCustomersHour = maxCustomersHour;
  this.avgCookiesCustomer = avgCookiesCustomer;
  this.randCustomersPerHour = [];
  this.randCookiesPerHour = [];
  this.CookieSales = 0;
  this.calcRandCustomersPerHour = function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustomersHour - this.minCustomersHour + 1)) + this.minCustomersHour);
    }
  };
  this.calcRandCookiesPerHour = function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCookiesPerHour[i] = Math.round(this.randCustomersPerHour[i] * this.avgCookiesCustomer);
      this.totalCookieSales += this.randCookiesPerHour[i];
    }
  };
  this.renderTableBody = function () {
    var tableDataDisplay = document.getElementById('salesReport_js');
    for (var i = 0; i < cookieStands.length; i++) {
      var trEl = document.createElement('tr'); //Creates rows for business location
      var tdEl = document.createElement('td'); //Creates columns for business location name
      tdEl.textContent = cookieStands[i].location; //Adds business location name to columns
      trEl.appendChild(tdEl); //Adds business location name column to row for current business location[i]
      for (var a = 0; a < hours.length; a++) {
        tdEl = document.createElement('td'); //Creates columns for hours
        tdEl.textContent = cookieStands[i].randCookiesPerHour[a]; //Adds hourly sales of cookies per business location[i] row
        trEl.appendChild(tdEl); //Adds hourly sales of cookies per business to column for current business location[i]row
      }
      tdEl = document.createElement('td');
      tdEl.textContent = cookieStands[i].CookieSales; //Creates a column for the daily total cookies sold
      trEl.appendChild(tdEl); //Adds daily cookies total sold to business location row
    }
    tableDataDisplay.appendChild(trEl); //Adds row for each business location to reporting table
  };
  this.calculate = function () {
    this.calcRandCustomersPerHour();
    this.calcRandCookiesPerHour();
    this.renderTableBody();
  };
  cookieStands.push(this);
  this.calculate();
}




new CookieStand('First And Pike', 23, 65, 6.3);
new CookieStand('Seatac Airport', 3, 24, 1.2);
new CookieStand('Seattle Center', 11, 38, 3.7);
new CookieStand('Capitol Hill', 20, 38, 2.3);
new CookieStand('Alki', 2, 16, 4.6);
// firstAndPike.render();
// seatacAirport.render();
// seattleCenter.render();
// capitolHill.render();
// alki.render();
