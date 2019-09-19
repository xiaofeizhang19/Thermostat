thermostat = new Thermostat();


$(document).ready(function(){
  updateScreen();

  $("#upButton").click(function(event){
    thermostat.up(1);
    updateScreen();
  });

  $("#downButton").click(function(event){
    thermostat.down(1);
    updateScreen();
  });

  $("#reset").click(function(event){
    thermostat.reset();
    updateScreen();
  });

  $("#powerSave").click(function(event){
    if (thermostat.powerSave === false){
      thermostat.setPowerSave(true);
    }else{
      thermostat.setPowerSave(false);
    }
    updateScreen();
  });

  function updateScreen(){
      $("#temperature").html(thermostat.temperature);
      $("#settings").html(thermostat.powerSaveDisplay());
      $("#energyLevel").html(thermostat.currentUsage());
      if(thermostat.currentUsage()==='high-usage'){
        $("#energyLevel").css('color','red');
      } else if (thermostat.currentUsage()==='low-usage'){
        $("#energyLevel").css('color','green');
      } else {
        $("#energyLevel").css('color','orange');
      };
      $("#weather").html(weather);
  };

  var city = null;
  $.get("http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=69312a7de5429a8d9bdbc71b2e7d1710", function(getWeather) {
    weather = getWeather.name + ": " + getWeather.main.temp + "&#176";
    updateScreen();
  });
});

