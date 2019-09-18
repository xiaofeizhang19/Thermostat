const lowestTemperature = 10;
const powerSaveMax = 25;

function Thermostat() {
    this.temperature = 20;
    this.powerSave = new Boolean;
};

Thermostat.prototype.up = function(number){
    if (this.powerSave && this.temperature + number > powerSaveMax){
        this.temperature = powerSaveMax;
    } else {
        this.temperature += number;
    };
};

Thermostat.prototype.down = function(number){
    if (this.temperature - number < lowestTemperature) {
      this.temperature = lowestTemperature;
    } else {
      this.temperature -= number;
    };
};

Thermostat.prototype.setPowerSave = function(setting){
    this.powerSave = setting;
};
