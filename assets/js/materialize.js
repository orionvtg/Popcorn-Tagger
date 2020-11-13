document.addEventListener('DOMContentLoaded', function() {
  var elemsModal = document.querySelectorAll(".modal");
  var options = {}
  M.Modal.init(elemsModal, options);
  var elemsSelect = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elemsSelect, options);
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});

// API_KEY=0538a44ea7ab03c73ebbfcd9542b4ac3
// for tmdb
// docs
//https://developers.themoviedb.org/3/discover/movie-discover
//base url for images:
//https://image.tmdb.org/t/p/original
let baseUrl = 'https://image.tmdb.org/t/p/original';
//api call syntax
//https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1
//modified api call with key:
//https://api.themoviedb.org/3/discover/movie?api_key=0538a44ea7ab03c73ebbfcd9542b4ac3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1
//add variables here
 var data;
//add fetch request
//https://api.themoviedb.org/3/genre/movie/list?api_key=0538a44ea7ab03c73ebbfcd9542b4ac3&language=en-US
fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=0538a44ea7ab03c73ebbfcd9542b4ac3&language=en-US`)
.then(response => response.json())
.then(data => {
    console.log(data)
    //console.log("genre", data.genres[0].name)
    for(i=0; i < data.genres.length; i++){
        console.log(data.genres[i].id)
        var option = document.createElement("option")
        option.innerHTML = data.genres[i].name
        option.setAttribute("value", data.genres[i].id)
        document.querySelector("#genreSelect").appendChild(option)
        // var genreId = data.genres[i].id
        /*fetch(`https://api.themoviedb.org/3/discover/movie?api_key=0538a44ea7ab03c73ebbfcd9542b4ac3&language=en-US&with_genres=${genreId}&page=1`).then(res => res.json()).then(data => console.log(data))*/
    }
    var elemsSelect = document.querySelectorAll('select');
    M.FormSelect.init(elemsSelect, {});
})

/*
fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=0538a44ea7ab03c73ebbfcd9542b4ac3&language=en-US`)
.then(response => response.json())
.then(data => {
    console.log(data)
    console.log("genre", data.genres[0].name)
    for(i=0; i < data.genres.length; i++){
        console.log(data.genres[i].name)
        var name = data.genres[i].name
    }
})
//create function for this fetch and add variables to url
fetch(`https://api.themoviedb.org/3/discover/movie?api_key=0538a44ea7ab03c73ebbfcd9542b4ac3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            //console.log(data.results[0].original_title)
            let movieTitle1 = document.querySelector('#movieTitle1').textContent = data.results[0].original_title;
            let movieRating1 = document.querySelector('#movieRating1').textContent = data.results[0].vote_average;
            let movieDate1 = document.querySelector('#movieDate1').textContent = data.results[0].release_date;
            let movieOverview1 = document.querySelector('#movieOverview1').textContent = data.results[0].overview;
            let posterPath1= baseUrl+data.results[0].poster_path;
            let moviePoster1 = document.querySelector('#moviePoster1').innerHTML = `<img width='300px' height='300px' src=${posterPath1}></img>`;
            let movieTitle2 = document.querySelector('#movieTitle2').textContent = data.results[1].original_title;
            let movieRating2 = document.querySelector('#movieRating2').textContent = data.results[1].vote_average;
            let movieDate2 = document.querySelector('#movieDate2').textContent = data.results[1].release_date;
            let movieOverview2 = document.querySelector('#movieOverview2').textContent = data.results[1].overview;
            let posterPath2= baseUrl+data.results[1].poster_path;
            let moviePoster2 = document.querySelector('#moviePoster2').innerHTML = `<img width='300px' height='300px' src=${posterPath2}></img>`;
            let movieTitle3 = document.querySelector('#movieTitle3').textContent = data.results[2].original_title;
            let movieRating3 = document.querySelector('#movieRating3').textContent = data.results[2].vote_average;
            let movieDate3 = document.querySelector('#movieDate3').textContent = data.results[2].release_date;
            let movieOverview3 = document.querySelector('#movieOverview3').textContent = data.results[2].overview;
            let posterPath3= baseUrl+data.results[2].poster_path;
            let moviePoster3 = document.querySelector('#moviePoster3').innerHTML = `<img width='300px' height='300px' src=${posterPath3}></img>`;
            let movieTitle4 = document.querySelector('#movieTitle4').textContent = data.results[3].original_title;
            let movieRating4 = document.querySelector('#movieRating4').textContent = data.results[3].vote_average;
            let movieDate4 = document.querySelector('#movieDate4').textContent = data.results[3].release_date;
            let movieOverview4 = document.querySelector('#movieOverview4').textContent = data.results[3].overview;
            let posterPath4= baseUrl+data.results[3].poster_path;
            let moviePoster4 = document.querySelector('#moviePoster4').innerHTML = `<img width='300px' height='300px' src=${posterPath4}></img>`;
            let movieTitle5 = document.querySelector('#movieTitle5').textContent = data.results[4].original_title;
            let movieRating5 = document.querySelector('#movieRating5').textContent = data.results[4].vote_average;
            let movieDate5 = document.querySelector('#movieDate5').textContent = data.results[4].release_date;
            let movieOverview5 = document.querySelector('#movieOverview5').textContent = data.results[4].overview;
            let posterPath5= baseUrl+data.results[4].poster_path;
            let moviePoster5 = document.querySelector('#moviePoster5').innerHTML = `<img width='300px' height='300px' src=${posterPath5}></img>`;
        })
        .catch(error => {
            console.log(error)
        })
//output = localStorage.getItem('output2');
//console.log(output2);
//document.querySelector('#output').value = output2;
*/