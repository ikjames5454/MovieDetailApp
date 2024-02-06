document.addEventListener('DOMContentLoaded', () => {
    const store = document.getElementById("store");
    const button = document.getElementById("button");
    
    const get = () => {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=794d70e0875c224cf22c098b55c130a1')
        .then(res => res.json())
        .then(json => {
            console.log(json);
            const images = [];
            
            json.results.forEach(result => {
            
                let title = result.title;
                let overview = result.overview;
                let releaseDate = result.release_date;
                let posterPath = result.poster_path;
                let fullPosterURL = `https://image.tmdb.org/t/p/w500/${posterPath}`;
                images.push(`<a href="detail.html?title=${encodeURIComponent(title)}&release=${encodeURIComponent(releaseDate)}&overview=${encodeURIComponent(overview)}&poster=${encodeURIComponent(fullPosterURL)}"><img src="${fullPosterURL}" alt="${title}" style='width: 450px'></a>`)
        
        
                // console.log("Title:", title);
                // console.log("Overview:", overview);
                // console.log("Release Date:", releaseDate)
            });
            store.innerHTML = images.join('');
        })
}

// button.onclick = () => get()
get()

})