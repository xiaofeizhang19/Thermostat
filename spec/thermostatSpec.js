describe('Thermostat', function() {

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees", function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it('increases in temerature when turned up', function() {
    thermostat.up(5);
    expect(thermostat.temperature).toEqual(25);
  });

  it('decrease the temerature when turned down', function() {
    thermostat.down(5);
    expect(thermostat.temperature).toEqual(15);
  });

  it('cannot be turned down lower than 10', function() {
    thermostat.down(11);
    expect(thermostat.temperature).toEqual(10);
  });

  it('sets max temp to 25 if power save is on', function() {
    thermostat.setPowerSave(true);
    thermostat.up(10);
    expect(thermostat.temperature).toEqual(25);
  });

  it('sets max temp to 32 if power save is off', function() {
    thermostat.setPowerSave(false);
    thermostat.up(15);
    expect(thermostat.temperature).toEqual(32);
  });

  it('the power save should default to true', function(){
    expect(thermostat.powerSave).toEqual(true);
  });

  it('resets the temp back to 20', function(){
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });
});
