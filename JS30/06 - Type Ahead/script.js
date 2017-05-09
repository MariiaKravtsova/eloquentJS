const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];

fetch(endpoint)
    .then( (blob) => blob.json() //blog has a ton of extra stuff
    .then( (data) => cities.push(...data))); //only add the data to the array

// create the regex variable and use it to filter the array
function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex);    
    });
}

// for population number to be formated with commas
function numberWithCommas(x) {
    return x.toString().split( /(?=(?:\d{3})+(?:\.|$))/g ).join( "," );
}

// create an array of matching word, highlight the word and display the array in a list
function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map( (place) => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
        <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${numberWithCommas(place.population)}</span>
        </li>`
    }).join('');
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

// call the function on typing and on clicking off it
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

