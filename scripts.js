/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

/**
 * Bay Area Coffee Shops Catalog
 * Beginner-friendly version
 * Uses:
 * - array
 * - objects
 * - search
 * - filter
 * - sort
 */

// array of objects = main data structure
let coffeeShops = [
  {
    name: "Brew & Banh Mi Cafe",
    city: "Milpitas",
    type: "Coffee/Food Cafe",
    rating: 4.4,
    price: "$20-$30",
    bestFor: "Friends Hangout",
    description: "A calm spot with quality sandwitches and drinks that have a nice place to sit",
    image: "https://pub-ba1a74be17d7442a9f2541946eb9510e.r2.dev/shops/15031837-0f1e-402f-a37b-d27d05d21ef2/0.jpg",
  },
  {
    name: "Peet's Coffee",
    city: "Milpitas",
    type: "Coffee Shop",
    rating: 4.5,
    price: "$10-20",
    bestFor: "Quick Coffee",
    description: "A reliable place for coffee, small meetings, and everyday visits.",
    image: "https://www.peets.com/cdn/shop/articles/18PR_originalpeetscoffeebar_large-cropped_b2a8719b-7001-4753-8233-acac917b2aae_700x.jpg?v=1762880471",
  },
  {
    name: "K On the Go",
    city: "Milpitas",
    type: "Boba/Coffee Shop",
    rating: 4.2,
    price: "$20-30",
    bestFor: "Friends",
    description: "Popular for aesthetic ambience with a refresing drinks .",
    image: "https://pub-ba1a74be17d7442a9f2541946eb9510e.r2.dev/shops/5318cd73-9ffb-4d93-a57d-24b06a750d14/4.jpg",
  },
  {
    name: "Starbucks Coffee",
    city: "Milpitas",
    type: "Coffee Shop ",
    rating: 4.1,
    price: "$10-20",
    bestFor: "Work and Study",
    description: "A  place that feels good for focused work and coffee breaks.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/f8/c9/8c/starbucks-coffee-honduras.jpg?w=900&h=500&s=1",
  },
  {
    name: "Voca Coffee",
    city: "Fremont",
    type: "Coffee Shop",
    rating: 4.2,
    price: "20-30",
    bestFor: "Coffee Lovers",
    description: "A modern coffee shop known for fresh coffee and clean design.",
    image: "https://s3-media0.fl.yelpcdn.com/bphoto/SE0dcL_t2emfxh6lAb89ew/348s.jpg",
  },
  {
    name: "Academic Coffee",
    city: "San Jose",
    type: "Coffee Shop",
    rating: 4.5,
    price: "$15-25",
    bestFor: "Work",
    description: "A welcoming coffee spot with pastries and a comfortable vibe.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/66/8f/25/right-at-the-corner.jpg?w=1000&h=-1&s=1",
  },
  {
    name: "Suju's Coffee",
    city: "Fremont",
    type: "Study Cafe",
    rating: 4.5,
    price: "$20-30",
    bestFor: "Studying",
    description: "A student-friendly cafe with lots of seating and a relaxed feel.",
    image: "https://img.p.mapq.st/?url=https%3A%2F%2Fs3-media0.fl.yelpcdn.com%2Fbphoto%2F7J84JfYix7nwJ7zI5BtGIg%2Fl.jpg&w=3840&q=75",
  },
  {
    name: "Caffe Bene",
    city: "San Jose",
    type: "Coffee Shop",
    rating: 4.2,
    price: "$20-30",
    bestFor: "Coffee Lovers",
    description: "A peaceful cafe with specialty drinks and a clean setup.",
    image: "https://s3-media0.fl.yelpcdn.com/bphoto/aDgJCCeLi-iPzSl61szqaw/348s.jpg",
  },
  {
    name: "7 Leaves Cafe",
    city: "San Jose",
    type: "Hangout Cafe",
    rating: 4.5,
    price: "$10-20",
    bestFor: "Hangout",
    description: "A smaller quiet cafe that works well for hanging out with friends .",
    image: "https://7leavescafe.com/wp-content/uploads/agile-store-locator/Logo/03c13753-dcbe-4326-a7f8-72068753b03d.jpg",
  },
  {
    name: "Cere Tea",
    city: "Milpitas",
    type: "Refresing drink Cafe",
    rating: 4.4,
    price: "$20-30",
    bestFor: "Study in Peace",
    description: "A coffee spot with light food, social seating, and a relaxed mood.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStYjGvFfNr2Hy57NOJovQ8m_FymW2PY0bQow&s",
  }
];

// get HTML elements
const cardContainer = document.getElementById("card-container");
const templateCard = document.getElementById("template-card");
const searchInput = document.getElementById("searchInput");
const cityFilter = document.getElementById("cityFilter");
const sortSelect = document.getElementById("sortSelect");
const resultCount = document.getElementById("result-count");

// show cards on page
function showCards(data) {
  cardContainer.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    let shop = data[i];

    const nextCard = templateCard.cloneNode(true);
    nextCard.style.display = "block";
    nextCard.removeAttribute("id");

    editCardContent(nextCard, shop);
    cardContainer.appendChild(nextCard);
  }

  resultCount.textContent = "Showing " + data.length + " coffee shops";
}

// fill one card with data
function editCardContent(card, shop) {
  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = shop.name;

  const cardImage = card.querySelector("img");
  cardImage.src = shop.image;
  cardImage.alt = shop.name;

  const cityText = card.querySelector(".city");
  cityText.textContent = "City: " + shop.city;

  const typeText = card.querySelector(".type");
  typeText.textContent = "Type: " + shop.type;

  const ratingText = card.querySelector(".rating");
  ratingText.textContent = "Rating: " + shop.rating;

  const priceText = card.querySelector(".price");
  priceText.textContent = "Price: " + shop.price;

  const bestForText = card.querySelector(".best-for");
  bestForText.textContent = "Best For: " + shop.bestFor;

  const descriptionText = card.querySelector(".description");
  descriptionText.textContent = shop.description;
}

/// search + filter + sort
function updateCatalog() {
  let updatedList = [...coffeeShops]; // copy array

  let searchValue = searchInput.value.toLowerCase();
  let selectedCity = cityFilter.value;
  let sortValue = sortSelect.value;

  // search by name
  if (searchValue !== "") {
    updatedList = updatedList.filter(function (shop) {
      return shop.name.toLowerCase().includes(searchValue);
    });
  }

  // filter by city
  if (selectedCity !== "all") {
    updatedList = updatedList.filter(function (shop) {
      return shop.city === selectedCity;
    });
  }

  // sort data
  if (sortValue === "az") {
    updatedList.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
  } else if (sortValue === "za") {
    updatedList.sort(function (a, b) {
      return b.name.localeCompare(a.name);
    });
  } else if (sortValue === "high") {
    updatedList.sort(function (a, b) {
      return b.rating - a.rating;
    });
  } else if (sortValue === "low") {
    updatedList.sort(function (a, b) {
      return a.rating - b.rating;
    });
  }

  showCards(updatedList);
}

// event listeners
searchInput.addEventListener("input", updateCatalog);
cityFilter.addEventListener("change", updateCatalog);
sortSelect.addEventListener("change", updateCatalog);

// first load
document.addEventListener("DOMContentLoaded", function () {
  showCards(coffeeShops);
});
