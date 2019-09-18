const lowestTemperature = 10

function Thermostat() {
    this.temperature = 20;
};

Thermostat.prototype.up = function(number){
  this.temperature += number;
};

Thermostat.prototype.down = function(number){
    if (this.temperature - number < lowestTemperature) {
      this.temperature = lowestTemperature}
    else {
      this.temperature -= number};
};
