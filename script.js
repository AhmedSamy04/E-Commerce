// script.js

document.addEventListener("DOMContentLoaded", function () {
  var menuIcon = document.getElementById("menu-icon");
  var menu = document.getElementById("menu");

  menuIcon.addEventListener("click", function () {
    menu.classList.toggle("show");
  });

  var products = document.querySelectorAll(".product");

  products.forEach(function (product) {
    product.addEventListener("mouseenter", function () {
      var overlay = this.querySelector(".overlay");
      overlay.style.display = "block";
    });

    product.addEventListener("mouseleave", function () {
      var overlay = this.querySelector(".overlay");
      overlay.style.display = "none";
    });
  });

  var searchInput = document.getElementById("search-input");
  var searchResults = document.getElementById("search-results");

  searchInput.addEventListener("input", function () {
    var searchTerm = this.value.toLowerCase();
    var matchingProducts = [];

    products.forEach(function (product) {
      var productName = product.querySelector("h3").textContent.toLowerCase();
      if (productName.includes(searchTerm)) {
        matchingProducts.push(product.outerHTML);
      }
    });

    if (matchingProducts.length > 0) {
      searchResults.innerHTML = matchingProducts.join("");
    } else {
      searchResults.innerHTML = "<p>No matching products found.</p>";
    }
  });
});
