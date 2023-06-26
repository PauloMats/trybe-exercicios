const btn = document.querySelector("#button");
btn.addEventListener("click", cardHero);

function cardHero() {
    
    fetch("https://akabab.github.io/superhero-api/api/")
        .then(response => response.json())
        .then(data => console.log(data.powerstats))
        .catch(error => console.log(error));

}

