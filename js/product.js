const newGame = document.querySelector(".featured-game");
const gameContainer = document.querySelector(".products");

const featuredGame = async () => {
  const response = await fetch("https://www.straumstra.no/wp-json/wc/store/products/121");
  if (!response.ok) {
    throw new Error (`HTTP Error! Status ${response.status}`);
  }
  const data = await response.json();
  getHTML(data);
}

featuredGame();

function getHTML(featured){
  newGame.innerHTML += `<div class="featured-games">
  <div class="featured-img">
  <img src="${featured.images[0].src}" alt="${featured.name}">
  </div>
  <div class="game-info">
  <h2>${featured.name}</h2>
  <p>${featured.description}</p>
  <h4>${featured.prices.price} ${featured.prices.currency_symbol}</h4>
  </div>
  
  </div>`
};

const getProducts = async () => {
  const response = await fetch("https://www.straumstra.no/wp-json/wc/store/products");
  if (!response.ok) {
    throw new Error(`HTTP Error! status ${response.status}`);
  }
  const data = await response.json();
  createHTML(data);
}

getProducts();

function createHTML(products){
  products.forEach(function(product){
    gameContainer.innerHTML += `
    <div class="product">
    <img src="${product.images[0].src}" alt="${product.name}">
    <h2>${product.name}</h2>
    <h4 class="price">${product.prices.price} ${product.prices.currency_prefix}</h4>
    <a href="game.html?id=${product.id}" class="info-btn">More Info</a>
    </div>`
  })
}