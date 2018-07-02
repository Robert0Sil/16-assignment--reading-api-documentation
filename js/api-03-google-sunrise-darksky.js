/*
##### Geocoding
1. What are latitude longitude coordinates of Montreal?
  - https://maps.googleapis.com/maps/api/geocode/json?address=Montreal

2. What time does the sun set in Montreal (based on the Google geocode coordinates)?
  - https://sunrise-sunset.org/api

3. What is the weekly weather forecast in Montreal?
  - https://darksky.net/dev
  - Note: You will have to create an account.

*/


//========================================================================
//  (1) What are latitude longitude coordinates of Montreal?
//
//     - https://developers.google.com/maps/documentation/geocoding/start
//     = NOtE: You don't need an API key for this api
//

const answerElement_apimashup_1 = document.getElementById('apimashup-1')

request.get('https://maps.googleapis.com/maps/api/geocode/json?address=Montreal')
  .then(function(serRes){
    let apiJsonData = serRes.body
    //console.log(apiJsonData)
    //console.log(apiJsonData.results[0].geometry.location);
    var arrApiJsonData = [];
    if(apiJsonData.results.length === 0 ){
      answerElement_apimashup_1.innerHTML = "No hay resultados, Sorry!!! ";
    }else{
      for(var location in apiJsonData.results[0].geometry.location){
        //console.log(location+':',  apiJsonData.results[0].geometry.location[location]);
        coordinates = apiJsonData.results[0].geometry.location[location];
        arrApiJsonData.push(location + ':' + " " + coordinates);
        //arrApiJsonData.push();
        //console.log(arrApiJsonData);
      }
    answerElement_apimashup_1.innerHTML = arrApiJsonData;

    }
  })


//========================================================================
//  (2) What time does the sun set in Montreal (based on the Google geocode coordinates)?

const answerElement_apimashup_2 = document.getElementById('apimashup-2')

request.get('https://maps.googleapis.com/maps/api/geocode/json?address=Montreal')
  .then(function(serRes){
    let apiJsonData = serRes.body
    //console.log(apiJsonData)
    //console.log(apiJsonData.results[0].geometry.location);
    var arrApiJsonData = [];
    if(apiJsonData.results.length === 0 ){
      answerElement_apimashup_1.innerHTML = "No hay resultados, Sorry!!! ";
    }else{
      for(var location in apiJsonData.results[0].geometry.location){
        //console.log(location);
        //console.log(location+':',  apiJsonData.results[0].geometry.location[location]);
        if(location === 'lng'){
          var lng = apiJsonData.results[0].geometry.location[location];
          //console.log(lng);
        }else if (location === 'lat'){
          var lat = apiJsonData.results[0].geometry.location[location];
          //console.log(lat);
        }
        //arrApiJsonData.push(location + ':' + " " + coordinates);
        //arrApiJsonData.push();

      }
      //console.log(lat);
      //console.log(lng);
      var url = 'https://api.sunrise-sunset.org/json?lat='+lat+'&lng='+lng;
      request.get(url)
        .then(function(serResp){
          let apiJsonData = serResp.body
          //console.log(apiJsonData);
          //console.log(apiJsonData.results.sunset);

          answerElement_apimashup_2.innerHTML = apiJsonData.results.sunset;

      })
    }

  })


//========================================================================
//  (3) What is the weekly weather forecast in Montreal? (look for summary property in 'daily')

const answerElement_apimashup_3 = document.getElementById('apimashup-3')

//request.get('https://darksky.net/dev')
  //.then(function(serRes){
    //let apiJsonData = serRes.body
    //console.log(apiJsonData)
    //console.log(apiJsonData.results[0].geometry.location);
    var arrApiJsonData = [];
    //if(apiJsonData.results.length === 0 ){
      answerElement_apimashup_3.innerHTML = "No hay resultados, Sorry!!! ";
    //}else{
      //for(var location in apiJsonData.results[0].geometry.location){
        //console.log(location+':',  apiJsonData.results[0].geometry.location[location]);
        //coordinates = apiJsonData.results[0].geometry.location[location];
        //arrApiJsonData.push(location + ':' + " " + coordinates);
        //arrApiJsonData.push();
        //console.log(arrApiJsonData);
      //}
    //answerElement_apimashup_3.innerHTML = arrApiJsonData;


  //})

//
