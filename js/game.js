const gameContainer = document.querySelector(".gamepage");

const queryString = document.location.search;

const newParam =  new URLSearchParams(queryString);

const id = newParam.get("id");

const gameURl = "https://www.straumstra.no/wp-json/wc/store/products/" + id;

console.log(gameURl);

const getGame = async () => {
  const response = await fetch(gameURl);
  if(!response.ok) {
    throw new Error(`HTTP Error! Status ${response.status}`);
  }
  const data = await response.json();
  createHTML(data);
}

getGame();

function createHTML(game) {
  gameContainer.innerHTML = `
  <div class="product-page">
    <img src="${game.images[0].src}" alt="${game.name}">
    <div class="game-info"><h2>${game.name}</h2>
      <p>${game.description}</p>
      <h4>${game.prices.price} ${game.prices.currency_symbol}</h4>
    </div>
  </div>`
}