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
});
