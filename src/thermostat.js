const defaultTemperature = 20;
const lowestTemperature = 10;
const powerSaveMax = 25;
const maxTemperature = 32;
const highUsageTemp = 25
const lowUsageTemp = 18

function Thermostat() {
  this.temperature = 20;
  this.powerSave = true;
};

Thermostat.prototype.up = function(number){
  this.temperature += number;
  if (this.temperature > this._maxTemp()) {this.temperature = this._maxTemp()};
};

Thermostat.prototype.down = function(number){
  this.temperature -= number;
  if (this.temperature > this._maxTemp()) {this.temperature = this._maxTemp()};
  if (this.temperature < lowestTemperature) {this.temperature = lowestTemperature};
};

Thermostat.prototype.setPowerSave = function(setting){
  this.powerSave = setting;
};

Thermostat.prototype.reset = function(){
  this.temperature = defaultTemperature;
};

Thermostat.prototype.currentUsage = function(){
  if (this.temperature >= highUsageTemp) {return 'high-usage'}
  if (this.temperature < lowUsageTemp) {return 'low-usage'}
  return 'medium-usage';
};

Thermostat.prototype._maxTemp = function() {
  if (this.powerSave) {return powerSaveMax};
  return maxTemperature;
};

Thermostat.prototype.powerSaveDisplay = function() {
  if (this.powerSave) {return "Power Save : On"};
  return "Power Save : Off";
};
