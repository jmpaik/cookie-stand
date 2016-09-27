'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var cookieStands = [];

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
  this.calcRandCustomersPerHour();
  this.calcRandCookiesPerHour();
  cookieStands.push(this);
}

new CookieStand('First And Pike', 23, 65, 6.3);
new CookieStand('Seatac Airport', 3, 24, 1.2);
new CookieStand('Seattle Center', 11, 38, 3.7);
new CookieStand('Capitol Hill', 20, 38, 2.3);
new CookieStand('Alki', 2, 16, 4.6);
