console.log('test1');

/* function myFunction2(){
    let genre = localStorage.getItem('genreSelected');
}

if (window.location.href='/index2.html'){
    window.onload=myFunction2();
} */

function myFunction1(event){
    event.preventDefault();
    console.log('test3');
    genreSelected=document.querySelector('#genreSelect').value;
    console.log(genreSelected);
    localStorage.setItem('genreSelected', genreSelected);
    console.log('localStorage genreSelected', genreSelected);
    window.location.href='/index2/index.html'
}

document.addEventListener('DOMContentLoaded', function() {
  var elemsModal = document.querySelectorAll(".modal");
  var options = {}
  M.Modal.init(elemsModal, options);
  var elemsSelect = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elemsSelect, options);
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
  console.log('test2');
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
        var genreId = data.genres[i].id
        console.log(genreId);
        /*fetch(`https://api.themoviedb.org/3/discover/movie?api_key=0538a44ea7ab03c73ebbfcd9542b4ac3&language=en-US&with_genres=${genreId}&page=1`).then(res => res.json()).then(data => console.log(data))*/
    }
    var elemsSelect = document.querySelectorAll('select');
    M.FormSelect.init(elemsSelect, {});
})

//let baseUrl = 'https://image.tmdb.org/t/p/original';

