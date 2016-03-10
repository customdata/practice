function Coffee(roast, ounces) {
  this.roast = roast;
  this.ounces = ounces;
  this.getSize = function() {
    if (this.ounces <= 8){
      return 'small';
    } else if (this.ounces > 8 && this.ounces <= 12) {
      return 'medium';
    } else {
      return 'large';
    }
  }
  this.toString = function() {
    console.log('You\'ve ordered a ' + this.getSize() + ' ' + this.roast + ' coffee.');
  }
}

var sm = new Coffee('Casi Cielo', 8);
var med = new Coffee('Kenya', 12);
var lg = new Coffee('Ethiopia', 16);
var coffees = [sm, med, lg];

for (var i = 0; i < coffees.length; i++) {
  coffees[i].toString();
}

