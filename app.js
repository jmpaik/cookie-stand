'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstAndPike = {
  minCustomersHour: 23,
  maxCustomersHour: 65,
  avgCookiesCustomer: 6.3,
  randCustomersPerHour: [],
  randCookiesPerHour: [],

  calcRandCustomersPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustomersHour - this.minCustomersHour + 1)) + this.minCustomersHour);
    }
  },
  calcRandCookiesPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCookiesPerHour[i] = Math.round(this.randCustomersPerHour[i] * this.avgCookiesCustomer);
    }
  },
};

var seatacAirport = {
  minCustomersHour: 3,
  maxCustomersHour: 24,
  avgCookiesCustomer: 1.2,
  randCustomersPerHour: [],
  randCookiesPerHour: [],

  calcRandCustomersPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustomersHour - this.minCustomersHour + 1)) + this.minCustomersHour);
    }
  },
  calcRandCookiesPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCookiesPerHour[i] = Math.round(this.randCustomersPerHour[i] * this.avgCookiesCustomer);
    }
  },
};

var seattleCenter = {
  minCustomersHour: 11,
  maxCustomersHour: 38,
  avgCookiesCustomer: 3.7,
  randCustomersPerHour: [],
  randCookiesPerHour: [],

  calcRandCustomersPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustomersHour - this.minCustomersHour + 1)) + this.minCustomersHour);
    }
  },
  calcRandCookiesPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCookiesPerHour[i] = Math.round(this.randCustomersPerHour[i] * this.avgCookiesCustomer);
    }
  },
};

var capitolHill = {
  minCustomersHour: 20,
  maxCustomersHour: 38,
  avgCookiesCustomer: 2.3,
  randCustomersPerHour: [],
  randCookiesPerHour: [],

  calcRandCustomersPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustomersHour - this.minCustomersHour + 1)) + this.minCustomersHour);
    }
  },
  calcRandCookiesPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCookiesPerHour[i] = Math.round(this.randCustomersPerHour[i] * this.avgCookiesCustomer);
    }
  },
};

var alki = {
  minCustomersHour: 2,
  maxCustomersHour: 16,
  avgCookiesCustomer: 4.6,
  randCustomersPerHour: [],
  randCookiesPerHour: [],

  calcRandCustomersPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustomersHour - this.minCustomersHour + 1)) + this.minCustomersHour);
    }
  },
  calcRandCookiesPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCookiesPerHour[i] = Math.round(this.randCustomersPerHour[i] * this.avgCookiesCustomer);
    }
  },
};

//calling firstAndPike
firstAndPike.calcRandCustomersPerHour();
console.log(firstAndPike.randCustomersPerHour);

firstAndPike.calcRandCookiesPerHour();
console.log(firstAndPike.randCookiesPerHour);

//calling seatacAirport
seatacAirport.calcRandCustomersPerHour();
console.log(seatacAirport.randCustomersPerHour);

seatacAirport.calcRandCookiesPerHour();
console.log(seatacAirport.randCookiesPerHour);

//calling seattleCenter
seattleCenter.calcRandCustomersPerHour();
console.log(seattleCenter.randCustomersPerHour);

seattleCenter.calcRandCookiesPerHour();
console.log(seattleCenter.randCookiesPerHour);

//calling capitolHill
capitolHill.calcRandCustomersPerHour();
console.log(capitolHill.randCustomersPerHour);

capitolHill.calcRandCookiesPerHour();
console.log(capitolHill.randCookiesPerHour);

//calling Alki
alki.calcRandCustomersPerHour();
console.log(alki.randCustomersPerHour);

alki.calcRandCookiesPerHour();
console.log(alki.randCookiesPerHour);
