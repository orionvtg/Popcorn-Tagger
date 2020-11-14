window.onload = myFunction4();

function myFunction4(genre) {
    genre = localStorage.getItem('genreSelected');
    document.querySelector('#selectedGenre').textContent = getGenreName(genre);
    document.querySelector('#genre').value = genre;
    console.log('script.js called');
    console.log('localStorage genreSelected ID:', localStorage.getItem('genreSelected'));
    console.log('genre in function', genre)

    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=0538a44ea7ab03c73ebbfcd9542b4ac3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            //console.log(data.results[0].original_title)
            let movieTitle1 = document.querySelector('#movieTitle1').textContent = data.results[0].original_title;
            let movieRating1 = document.querySelector('#movieRating1').textContent = data.results[0].vote_average;
            let movieDate1 = document.querySelector('#movieDate1').textContent = data.results[0].release_date;
            let movieOverview1 = document.querySelector('#movieOverview1').textContent = data.results[0].overview;
            let posterPath1 = baseUrl + data.results[0].poster_path;
            let moviePoster1 = document.querySelector('#moviePoster1').innerHTML = `<img width='300px' height='300px' src=${posterPath1}></img>`;
            let movieTitle2 = document.querySelector('#movieTitle2').textContent = data.results[1].original_title;
            let movieRating2 = document.querySelector('#movieRating2').textContent = data.results[1].vote_average;
            let movieDate2 = document.querySelector('#movieDate2').textContent = data.results[1].release_date;
            let movieOverview2 = document.querySelector('#movieOverview2').textContent = data.results[1].overview;
            let posterPath2 = baseUrl + data.results[1].poster_path;
            let moviePoster2 = document.querySelector('#moviePoster2').innerHTML = `<img width='300px' height='300px' src=${posterPath2}></img>`;
            let movieTitle3 = document.querySelector('#movieTitle3').textContent = data.results[2].original_title;
            let movieRating3 = document.querySelector('#movieRating3').textContent = data.results[2].vote_average;
            let movieDate3 = document.querySelector('#movieDate3').textContent = data.results[2].release_date;
            let movieOverview3 = document.querySelector('#movieOverview3').textContent = data.results[2].overview;
            let posterPath3 = baseUrl + data.results[2].poster_path;
            let moviePoster3 = document.querySelector('#moviePoster3').innerHTML = `<img width='300px' height='300px' src=${posterPath3}></img>`;
            let movieTitle4 = document.querySelector('#movieTitle4').textContent = data.results[3].original_title;
            let movieRating4 = document.querySelector('#movieRating4').textContent = data.results[3].vote_average;
            let movieDate4 = document.querySelector('#movieDate4').textContent = data.results[3].release_date;
            let movieOverview4 = document.querySelector('#movieOverview4').textContent = data.results[3].overview;
            let posterPath4 = baseUrl + data.results[3].poster_path;
            let moviePoster4 = document.querySelector('#moviePoster4').innerHTML = `<img width='300px' height='300px' src=${posterPath4}></img>`;
            let movieTitle5 = document.querySelector('#movieTitle5').textContent = data.results[4].original_title;
            let movieRating5 = document.querySelector('#movieRating5').textContent = data.results[4].vote_average;
            let movieDate5 = document.querySelector('#movieDate5').textContent = data.results[4].release_date;
            let movieOverview5 = document.querySelector('#movieOverview5').textContent = data.results[4].overview;
            let posterPath5 = baseUrl + data.results[4].poster_path;
            let moviePoster5 = document.querySelector('#moviePoster5').innerHTML = `<img width='300px' height='300px' src=${posterPath5}></img>`;
        })
        .catch(error => {
            console.log(error)
        })
}


let baseUrl = 'https://image.tmdb.org/t/p/original';

function getGenreName (id) {
    return Array.from(document.querySelectorAll('#genre option')).find(
        option => option.value == id    
    ).innerText;
}

function myFunction(event) {
    event.preventDefault();
    const genreSelect = document.querySelector('#genre')
    let genre = genreSelect.value;
    // const genreName = Array.from(document.querySelectorAll('#genre option')).filter(option => option.selected)[0].innerText;
    // console.log('genre:', genre);

    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=0538a44ea7ab03c73ebbfcd9542b4ac3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            // Show selected genre
            document.querySelector('#selectedGenre').textContent = getGenreName(genre);
            // Update local storage
            localStorage.setItem('genreSelected', genre);

            //console.log(data.results[0].original_title)
            let movieTitle1 = document.querySelector('#movieTitle1').textContent = data.results[0].original_title;
            let movieRating1 = document.querySelector('#movieRating1').textContent = data.results[0].vote_average;
            let movieDate1 = document.querySelector('#movieDate1').textContent = data.results[0].release_date;
            let movieOverview1 = document.querySelector('#movieOverview1').textContent = data.results[0].overview;
            let posterPath1 = baseUrl + data.results[0].poster_path;
            let moviePoster1 = document.querySelector('#moviePoster1').innerHTML = `<img width='300px' height='300px' src=${posterPath1}></img>`;
            let movieTitle2 = document.querySelector('#movieTitle2').textContent = data.results[1].original_title;
            let movieRating2 = document.querySelector('#movieRating2').textContent = data.results[1].vote_average;
            let movieDate2 = document.querySelector('#movieDate2').textContent = data.results[1].release_date;
            let movieOverview2 = document.querySelector('#movieOverview2').textContent = data.results[1].overview;
            let posterPath2 = baseUrl + data.results[1].poster_path;
            let moviePoster2 = document.querySelector('#moviePoster2').innerHTML = `<img width='300px' height='300px' src=${posterPath2}></img>`;
            let movieTitle3 = document.querySelector('#movieTitle3').textContent = data.results[2].original_title;
            let movieRating3 = document.querySelector('#movieRating3').textContent = data.results[2].vote_average;
            let movieDate3 = document.querySelector('#movieDate3').textContent = data.results[2].release_date;
            let movieOverview3 = document.querySelector('#movieOverview3').textContent = data.results[2].overview;
            let posterPath3 = baseUrl + data.results[2].poster_path;
            let moviePoster3 = document.querySelector('#moviePoster3').innerHTML = `<img width='300px' height='300px' src=${posterPath3}></img>`;
            let movieTitle4 = document.querySelector('#movieTitle4').textContent = data.results[3].original_title;
            let movieRating4 = document.querySelector('#movieRating4').textContent = data.results[3].vote_average;
            let movieDate4 = document.querySelector('#movieDate4').textContent = data.results[3].release_date;
            let movieOverview4 = document.querySelector('#movieOverview4').textContent = data.results[3].overview;
            let posterPath4 = baseUrl + data.results[3].poster_path;
            let moviePoster4 = document.querySelector('#moviePoster4').innerHTML = `<img width='300px' height='300px' src=${posterPath4}></img>`;
            let movieTitle5 = document.querySelector('#movieTitle5').textContent = data.results[4].original_title;
            let movieRating5 = document.querySelector('#movieRating5').textContent = data.results[4].vote_average;
            let movieDate5 = document.querySelector('#movieDate5').textContent = data.results[4].release_date;
            let movieOverview5 = document.querySelector('#movieOverview5').textContent = data.results[4].overview;
            let posterPath5 = baseUrl + data.results[4].poster_path;
            let moviePoster5 = document.querySelector('#moviePoster5').innerHTML = `<img width='300px' height='300px' src=${posterPath5}></img>`;
        })
        .catch(error => {
            console.log(error)
        });

        fetch("https://imdb8.p.rapidapi.com/title/auto-complete?q=game%20of%20thr", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "SIGN-UP-FOR-KEY",
		"x-rapidapi-host": "imdb8.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
}