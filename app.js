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




















// var sam = {
//   //properties
//   firstName: 'Sam',
//   middleName: null,
//   lastName: 'Hamm',
//   rating: 0,
//   isABoss: true,
//   underlings: ['Rachel', 'Frazier', 'Aliza', 'Maelle'],
//
//   //methods
//   getRating: function() {
//     return this.rating;
//   },
//   setRating: function(num) {
//     return this.rating = num;
//   },
//   listUnderlings: function(){
//     for (var i = 0; i < this.underlings.length; i++) {
//       console.log(this.underlings[i]);
//     }
//   }
//  };
//
// sam.employer = {
//   name: 'Code Fellows',
//   location: 'Seattle'
// };
// //
// sam.logName = function() {
//   console.log(this.firstName + ' ' + this.lastName);
// };
//
// sam.whatIsThis = function() {
//     console.log(this);
// };
//
// sam.whatIsThis(); //logs the sam object
