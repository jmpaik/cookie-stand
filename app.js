'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var firstAndPike = {
  minCustomersHour: 23,
  maxCustomersHour: 65,
  avgCookiesCustomer: 6.3,
  randCustomersPerHour: [],
  randCookiesPerHour: [],
  totalCookieSales: 0,

  calcRandCustomersPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustomersHour - this.minCustomersHour + 1)) + this.minCustomersHour);
    }
  },
  calcRandCookiesPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCookiesPerHour[i] = Math.round(this.randCustomersPerHour[i] * this.avgCookiesCustomer);
      this.totalCookieSales += this.randCookiesPerHour[i];
    }
  },
  render: function() {
    this.calcRandCookiesPerHour();
    var firstAndPikeUL = document.getElementById('FirstAndPike');
    for (var i = 0; i < hours.length; i++) {
        //create element
      var liEl = document.createElement('li');
        //give it content
      liEl.textContent = hours[i] + ': ' + this.randCookiesPerHour[i] + 'cookies';
        //append it to the DOM
      firstAndPikeUL.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookieSales + ' cookies';
    firstAndPikeUL.appendChild(liEl);
  }
};

var seatacAirport = {
  minCustomersHour: 3,
  maxCustomersHour: 24,
  avgCookiesCustomer: 1.2,
  randCustomersPerHour: [],
  randCookiesPerHour: [],
  totalCookieSales: 0,

  calcRandCustomersPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustomersHour - this.minCustomersHour + 1)) + this.minCustomersHour);
    }
  },
  calcRandCookiesPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCookiesPerHour[i] = Math.round(this.randCustomersPerHour[i] * this.avgCookiesCustomer);
      this.totalCookieSales += this.randCookiesPerHour[i];
    }
  },
  render: function() {
    this.calcRandCookiesPerHour();
    var seatacAirportUL = document.getElementById('SeatacAirport');
    for (var i = 0; i < hours.length; i++) {
        //create element
      var liEl = document.createElement('li');
        //give it content
      liEl.textContent = hours[i] + ': ' + this.randCookiesPerHour[i] + 'cookies';
        //append it to the DOM
      seatacAirportUL.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookieSales + ' cookies';
    seatacAirportUL.appendChild(liEl);
  },
};

var seattleCenter = {
  minCustomersHour: 11,
  maxCustomersHour: 38,
  avgCookiesCustomer: 3.7,
  randCustomersPerHour: [],
  randCookiesPerHour: [],
  totalCookieSales: 0,

  calcRandCustomersPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustomersHour - this.minCustomersHour + 1)) + this.minCustomersHour);
    }
  },
  calcRandCookiesPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCookiesPerHour[i] = Math.round(this.randCustomersPerHour[i] * this.avgCookiesCustomer);
      this.totalCookieSales += this.randCookiesPerHour[i];
    }
  },
  render: function() {
    this.calcRandCookiesPerHour();
    var seattleCenterUL = document.getElementById('SeattleCenter');
    for (var i = 0; i < hours.length; i++) {
        //create element
      var liEl = document.createElement('li');
        //give it content
      liEl.textContent = hours[i] + ': ' + this.randCookiesPerHour[i] + 'cookies';
        //append it to the DOM
      seattleCenterUL.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookieSales + ' cookies';
    seattleCenterUL.appendChild(liEl);
  },
};

var capitolHill = {
  minCustomersHour: 20,
  maxCustomersHour: 38,
  avgCookiesCustomer: 2.3,
  randCustomersPerHour: [],
  randCookiesPerHour: [],
  totalCookieSales: 0,

  calcRandCustomersPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustomersHour - this.minCustomersHour + 1)) + this.minCustomersHour);
    }
  },
  calcRandCookiesPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCookiesPerHour[i] = Math.round(this.randCustomersPerHour[i] * this.avgCookiesCustomer);
      this.totalCookieSales += this.randCookiesPerHour[i];
    }
  },
  render: function() {
    this.calcRandCookiesPerHour();
    var capitolHillUL = document.getElementById('CapitolHill');
    for (var i = 0; i < hours.length; i++) {
        //create element
      var liEl = document.createElement('li');
        //give it content
      liEl.textContent = hours[i] + ': ' + this.randCookiesPerHour[i] + 'cookies';
        //append it to the DOM
      capitolHillUL.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookieSales + ' cookies';
    capitolHillUL.appendChild(liEl);
  },
};

var alki = {
  minCustomersHour: 2,
  maxCustomersHour: 16,
  avgCookiesCustomer: 4.6,
  randCustomersPerHour: [],
  randCookiesPerHour: [],
  totalCookieSales: 0,

  calcRandCustomersPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustomersHour - this.minCustomersHour + 1)) + this.minCustomersHour);
    }
  },
  calcRandCookiesPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCookiesPerHour[i] = Math.round(this.randCustomersPerHour[i] * this.avgCookiesCustomer);
      this.totalCookieSales += this.randCookiesPerHour[i];
    }
  },
  render: function() {
    this.calcRandCookiesPerHour();
    var alkiUL = document.getElementById('Alki');
    for (var i = 0; i < hours.length; i++) {
        //create element
      var liEl = document.createElement('li');
        //give it content
      liEl.textContent = hours[i] + ': ' + this.randCookiesPerHour[i] + 'cookies';
        //append it to the DOM
      alkiUL.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookieSales + ' cookies';
    alkiUL.appendChild(liEl);
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

//render function
firstAndPike.render();
seatacAirport.render();
seattleCenter.render();
capitolHill.render();
alki.render();


/*'use strict';
//Constructor Function
var myClass = [];

var hawa = {
  function Student(firstName, lastInitial, faveNumber) {
    this.course = '201d15';
    this.firstName = firstName;
    this.lastInitial = lastInitial;
    this.faveNumber = faveNumber;
    this.isCodeNinja = true;
    this.introduction = function() {
    console.log('My name is ' + this.firstName + ' and my favorite number is ' + this.faveNumber);
    };
  myClass.push(this);
  console.log(myClass);
  alert('A new student was added to the Class');
 }
}
//Instances
new Student('Hawa', 'A', 17);
new Student('Michael', 'P', 7);*/
