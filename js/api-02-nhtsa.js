/*
##### National Highway Transit Safety Administration
https://vpic.nhtsa.dot.gov/api/

1. How many types of Chevrolet models are registered with the NHTSA?*/
const answerElement_nhtsa_1 = document.getElementById('nhtsa-1')

request.get('https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/chevrolet?format=json')
  .then(function(serRes){
    let apiJsonData = serRes.body
    //console.log(apiJsonData)
    //console.log(apiJsonData.Results.length);
    if(apiJsonData.Results.length === 0 ){
      answerElement_nhtsa_1.innerHTML = "No hay resultados, Sorry!!! ";
    }else{
    answerElement_nhtsa_1.innerHTML = apiJsonData.Results.length;

    }
  })

//vehicles/GetAllManufacturers?format=csv&page=2
//2. What are the vehicle types that Nissan has?
const answerElement_nhtsa_2 = document.getElementById('nhtsa-2')

request.get('https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/nissan?format=json')
  .then(function(serRes){
    let apiJsonData = serRes.body
    //console.log(apiJsonData)
    //console.log(apiJsonData.Results.length);
    var arrApiJsonData = [];
    if(apiJsonData.Results.length === 0 ){
      answerElement_nhtsa_2.innerHTML = "No hay resultados, Sorry!!! ";
    }else{
      for(var i = 0; i < apiJsonData.Results.length; i++){
        //console.log(apiJsonData.Results[i].VehicleTypeName);
        arrApiJsonData.push(apiJsonData.Results[i].VehicleTypeName);
        //console.log(arrApiJsonData);
      }
    answerElement_nhtsa_2.innerHTML = arrApiJsonData;

    }
  })


//3. What are the types of models that exist for Toyota trucks in 2017?
const answerElement_nhtsa_3 = document.getElementById('nhtsa-3')

request.get('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/toyota/modelyear/2017/vehicleType/truck?format=json')
  .then(function(serRes){
    let apiJsonData = serRes.body
    //console.log(apiJsonData)
    //console.log(apiJsonData.Results.length);
    var arrApiJsonData = [];
    if(apiJsonData.Results.length === 0 ){
      answerElement_nhtsa_3.innerHTML = "No hay resultados, Sorry!!! ";
    }else{
      for(var i = 0; i < apiJsonData.Results.length; i++){
        //console.log(apiJsonData.Results[i].Model_Name);
        arrApiJsonData.push(apiJsonData.Results[i].Model_Name);
        //console.log(arrApiJsonData);
      }
    answerElement_nhtsa_3.innerHTML = arrApiJsonData;

    }
  })
