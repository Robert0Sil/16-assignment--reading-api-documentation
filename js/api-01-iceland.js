//========================================================================
// (1) How many births were there in Iceland's national hospital today?

const answerElement_iceland_1 = document.getElementById('iceland-1')

request.get('https://apis.is/sports/football')
  .then(function(serRes){
    let apiJsonData = serRes.body
    //console.log(apiJsonData)
    //console.log(apiJsonData.results.length);
    if(apiJsonData.results.length === 0 ){
      answerElement_iceland_1.innerHTML = "No hay resultados, Sorry!!! ";
    }else{
    answerElement_iceland_1.innerHTML = apiJsonData.results[0].Teams;
    //console.log(apiJsonData.results[0].Teams);
    }
  })



//========================================================================
// (2) How many **arrival** flights are scheduled for today?
const answerElement_iceland_2 = document.getElementById('iceland-2')

request.get('https://apis.is/concerts')
  .then(function(serRes){
    let apiJsonData = serRes.body
    //console.log(apiJsonData);
    //console.log(apiJsonData.results.length);
    if(apiJsonData.results.length === 0 ){
      answerElement_iceland_1.innerHTML = "No hay resultados, Sorry!!! ";
    }else{
    answerElement_iceland_2.innerHTML = apiJsonData.results[0].eventDateName;
    }
  })



//========================================================================
// (3) What is the next concert event in Iceland?
const answerElement_iceland_3 = document.getElementById('iceland-3')

request.get('https://apis.is/weather/texts/en?types=27,42')
  .then(function(serRes){
    let apiJsonData = serRes.body
    //console.log(apiJsonData);
    if(apiJsonData.results.length === 0 ){
      answerElement_iceland_1.innerHTML = "No hay resultados, Sorry!!! ";
    }else{
    answerElement_iceland_3.innerHTML = apiJsonData.results[0].content;
    }
  })



//
