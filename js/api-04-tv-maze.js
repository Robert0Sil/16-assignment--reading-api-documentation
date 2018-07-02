/*
##### TV Maze
https://www.tvmaze.com/ap

1. What is the average rating for the show Better Call Saul?*/

const answerElement_tvmaze_1 = document.getElementById('tvmaze-1')

request.get('http://api.tvmaze.com/shows/618')
  .then(function(serRes){
    let apiJsonData = serRes.body
    console.log(apiJsonData)
    console.log(apiJsonData.rating.average);

    answerElement_tvmaze_1.innerHTML = apiJsonData.rating.average;

  })

//2. When was the premiere date for the 9th season of Friends?
const answerElement_tvmaze_2 = document.getElementById('tvmaze-2')

request.get('http://api.tvmaze.com/shows/431')
  .then(function(serRes){
    let apiJsonData = serRes.body
    console.log(apiJsonData)
    console.log(apiJsonData.premiered);

    answerElement_tvmaze_2.innerHTML = apiJsonData.premiered;


  })
//3. How many shows has actor Andrew Grimes (of the Walking Dead) appeared in?

const answerElement_tvmaze_3 = document.getElementById('tvmaze-3')

request.get('http://api.tvmaze.com/shows/73/cast')
  .then(function(serRes){
    let apiJsonData = serRes.body
    console.log(apiJsonData)
    //console.log(apiJsonData.premiered);

    //answerElement_tvmaze_3.innerHTML = apiJsonData.premiered;


  })
