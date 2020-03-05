$(document).ready(function() {
  //key
  var appID = "894405a178aa14feb840836dfbbe2219";

  $(".query_btn").click(function() {
    var query_param = $(this)
      .prev()
      .val();

    if (
      $(this)
        .prev()
        .attr("placeholder") == "City"
    ) {
      var weather =
        "http://api.openweathermap.org/data/2.5/weather?q=" +
        query_param +
        "&APPID=" +
        appID +
        "&units=imperial";
      console.log(weather);

      var forecast =
        "http://api.openweathermap.org/data/2.5/forecast?q=" +
        query_param +
        "&appid=" +
        appID +
        "&units=imperial";
      console.log(forecast);
    }
    //weather
    $.getJSON(weather, function(json) {
      $("#date").html(json.name);
      $("#main_weather").html(json.weather[0].main);
      
      $("#weather_image").attr(
        "src",
        "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png"
      );

      $("#temperature").html(json.main.temp + "&#176");
      $("#humidity").html(json.main.humidity + "%");
      $("#wind_speed").html(json.wind.speed + "MPH");

      var latitude = json.coord.lat;
      var longitude = json.coord.lon;

      var uvstring =
        "http://api.openweathermap.org/data/2.5/uvi?appid=" +
        appID +
        "&lat=" +
        latitude +
        "&lon=" +
        longitude;

      $.getJSON(uvstring, function(json) {

        $("#uv").html(json.value);
      });
    //forecast
    $.getJSON(forecast, function(json) {
      var dt = json.list[0].dt_txt;
      $("#date1").html(moment(dt).format("MM/DD/YY"));
      $("#weather_image1").attr(
        "src",
        "http://openweathermap.org/img/w/" +
          json.list[0].weather[0].icon +
          ".png"
      );
      $("#temperature1").html(json.list[0].main.temp + "&#176");
      $("#humidity1").html(json.list[0].main.humidity+ "%");

      var dt2 = json.list[8].dt_txt;
      $("#date2").html(moment(dt2).format("MM/DD/YY"));
      $("#weather_image2").attr(
        "src",
        "http://openweathermap.org/img/w/" +
          json.list[8].weather[0].icon +
          ".png"
      );
      $("#temperature2").html(json.list[8].main.temp + "&#176");
      $("#humidity2").html(json.list[8].main.humidity+ "%");

      var dt3 = json.list[16].dt_txt;
      $("#date3").html(moment(dt3).format("MM/DD/YY"));
      $("#weather_image3").attr(
        "src",
        "http://openweathermap.org/img/w/" +
          json.list[16].weather[0].icon +
          ".png"
      );
      $("#temperature3").html(json.list[16].main.temp + "&#176");
      $("#humidity3").html(json.list[16].main.humidity+ "%");

      var dt4 = json.list[24].dt_txt;
      $("#date4").html(moment(dt4).format("MM/DD/YY"));
      $("#weather_image4").attr(
        "src",
        "http://openweathermap.org/img/w/" +
          json.list[24].weather[0].icon +
          ".png"
      );
      $("#temperature4").html(json.list[24].main.temp + "&#176");
      $("#humidity4").html(json.list[24].main.humidity+ "%");

      var dt5 = json.list[32].dt_txt;
      $("#date5").html(moment(dt5).format("MM/DD/YY"));
      $("#weather_image5").attr(
        "src",
        "http://openweathermap.org/img/w/" +
          json.list[32].weather[0].icon +
          ".png"
      );
      $("#temperature5").html(json.list[32].main.temp + "&#176");
      $("#humidity5").html(json.list[32].main.humidity+ "%");
    });

    });
  });
//weather buttons
  $(".la").click(function() {
    {
      var laweather =
        "http://api.openweathermap.org/data/2.5/weather?q=los angeles&APPID=" +
        appID + "&units=imperial";
    }
    $.getJSON(laweather, function(json) {
      $("#date").html(json.name);
      $("#main_weather").html(json.weather[0].main);
      $("#description_weather").html(json.weather[0].description);
      $("#weather_image").attr(
        "src",
        "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png"
      );
      $("#temperature").html(json.main.temp+ "&#176");
      $("#wind_speed").html(json.wind.speed + "MPH");
      $("#humidity").html(json.main.humidity+ "%");
      $("#uv").html(json.value);
    });
  });
  $(".atx").click(function() {
    {
      var aweather =
        "http://api.openweathermap.org/data/2.5/weather?q=Austin&APPID=" +
        appID+ "&units=imperial";

      console.log(aweather);
    }
    $.getJSON(aweather, function(json) {
      $("#date").html(json.name);
      $("#main_weather").html(json.weather[0].main);
      $("#description_weather").html(json.weather[0].description);
      $("#weather_image").attr(
        "src",
        "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png"
      );
      $("#temperature").html(json.main.temp+ "&#176");
      $("#wind_speed").html(json.wind.speed + "MPH");
      $("#humidity").html(json.main.humidity+ "%");
      $("#uv").html(json.value);
    });
  });

  $(".seattle").click(function() {
    {
      var seaweather =
        "http://api.openweathermap.org/data/2.5/weather?q=seattle&APPID=" +
        appID+ "&units=imperial";

    }
    $.getJSON(seaweather, function(json) {
      $("#date").html(json.name);
      $("#main_weather").html(json.weather[0].main);
      $("#description_weather").html(json.weather[0].description);
      $("#weather_image").attr(
        "src",
        "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png"
      );
      $("#temperature").html(json.main.temp+ "&#176");
      $("#wind_speed").html(json.wind.speed + "MPH");
      $("#humidity").html(json.main.humidity+ "%");
      $("#uv").html(json.value);
    });
  });

  $(".juno").click(function() {
    {
      var junoweather =
        "http://api.openweathermap.org/data/2.5/weather?q=juno&APPID=" + appID+ "&units=imperial";
    }
    $.getJSON(junoweather, function(json) {
      $("#date").html(json.name);
      $("#main_weather").html(json.weather[0].main);
      $("#description_weather").html(json.weather[0].description);
      $("#weather_image").attr(
        "src",
        "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png"
      );
      $("#temperature").html(json.main.temp+ "&#176");
      $("#wind_speed").html(json.wind.speed + "MPH");
      $("#humidity").html(json.main.humidity+ "%");
      $("#uv").html(json.value);
    });
  });

  $(".london").click(function() {
    {
      var londweather =
        "http://api.openweathermap.org/data/2.5/weather?q=london&APPID=" +
        appID +
        "&units=imperial";
    }
    $.getJSON(londweather, function(json) {
      $("#date").html(json.name);
      $("#main_weather").html(json.weather[0].main);
      $("#description_weather").html(json.weather[0].description);
      $("#weather_image").attr(
        "src",
        "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png"
      );
      $("#temperature").html(json.main.temp+ "&#176");
      $("#wind_speed").html(json.wind.speed + "MPH");
      $("#humidity").html(json.main.humidity+ "%");
      $("#uv").html(json.value);
    });
  });

  $(".sa").click(function() {
    {
      var saweather =
        "http://api.openweathermap.org/data/2.5/weather?q=san antonio&APPID=" +
        appID +
        "&units=imperial";
    }
    $.getJSON(saweather, function(json) {
      $("#date").html(json.name);
      $("#main_weather").html(json.weather[0].main);
      $("#description_weather").html(json.weather[0].description);
      $("#weather_image").attr(
        "src",
        "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png"
      );
      $("#temperature").html(json.main.temp+ "&#176");
      $("#wind_speed").html(json.wind.speed + "MPH");
      $("#humidity").html(json.main.humidity+ "%");
      $("#uv").html(json.value);
    });
  });

  $(".ca").click(function() {
    {
      var caweather =
        "http://api.openweathermap.org/data/2.5/weather?q=cairo&APPID=" + appID + "&units=imperial";
    }
    $.getJSON(caweather, function(json) {
      $("#date").html(json.name);
      $("#main_weather").html(json.weather[0].main);
      $("#description_weather").html(json.weather[0].description);
      $("#weather_image").attr(
        "src",
        "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png"
      );
      $("#temperature").html(json.main.temp+ "&#176");
      $("#wind_speed").html(json.wind.speed + "MPH");
      $("#humidity").html(json.main.humidity+ "%");
      $("#uv").html(json.value);
    });
  });
});
