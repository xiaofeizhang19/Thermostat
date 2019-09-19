'use strict';

describe('Thermostat', function() {
  
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees", function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it('increases the temperature when turned up', function() {
    thermostat.up(5);
    expect(thermostat.temperature).toEqual(25);
  });

  it('decreases the temperature when turned down', function() {
    thermostat.down(5);
    expect(thermostat.temperature).toEqual(15);
  });

  it('cannot be turned down lower than 10', function() {
    thermostat.down(10);
    expect(function(){ thermostat.down(1) }).toThrow("Minimum temperature set to 10!")
  });

  it('sets max temp to 25 if power save is on', function() {
    thermostat.up(5);
    expect(function(){ thermostat.up(1) }).toThrow("Maximum temperature set to 25!")
  });

  it('sets max temp to 32 if power save is off', function() {
    thermostat.setPowerSave(false);
    thermostat.up(12);
    expect(function(){ thermostat.up(1) }).toThrow("Maximum temperature set to 32!")
  });

  it('the power save should default to true', function(){
    expect(thermostat.powerSave).toEqual(true);
  });

  it('resets the temp back to 20', function(){
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });

  it('displays the current energy usage', function(){
    expect(thermostat.currentUsage()).toEqual('medium-usage');
    thermostat.up(5)
    expect(thermostat.currentUsage()).toEqual('high-usage');
    thermostat.down(8)
    expect(thermostat.currentUsage()).toEqual('low-usage');
  });
});
