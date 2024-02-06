const urlParams = new URLSearchParams(window.location.search);
    const poster = urlParams.get('poster');
    const title = urlParams.get('title');
    const releaseDate = urlParams.get('release');
    const overview = urlParams.get('overview');
    

    let pics = document.getElementById('poster')
   let titles = document.getElementById('title')
  let date =  document.getElementById('release')
  let summary =  document.getElementById('overview')

pics.src = decodeURIComponent(poster);
titles.textContent = title;
titles.style.fontSize = "50px"
date.textContent = `Release Date: ${releaseDate}`;
date.style.fontSize = "30px"
summary.textContent = `Overview: ${overview}`;
summary.style.fontSize = "25px"