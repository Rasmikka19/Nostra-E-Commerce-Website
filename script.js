// ========== OFFER BAR ==========
const offerBar = document.querySelector(".offer-bar");
const offerClose = document.getElementById("offer-close");

if (offerBar && offerClose) {
  offerClose.addEventListener("click", () => {
    offerBar.style.display = "none";
  });
}

// ========== SIDE NAVBAR ==========
const sideNavMenu = document.getElementById("side-navbar-activate");
const sideNavbar = document.querySelector(".side-navbar");
const sideNavClose = document.getElementById("side-navbar-close");

if (sideNavMenu && sideNavbar) {
  sideNavMenu.addEventListener("click", () => {
    sideNavbar.style.marginLeft = "0px";
  });

  if (sideNavClose) {
    sideNavClose.addEventListener("click", () => {
      sideNavbar.style.marginLeft = "-60%";
    });
  }
}

// ========== SLIDER ==========
const sliderLeft = document.getElementById("slider-left-activate");
const sliderRight = document.getElementById("slider-right-activate");
const sliderImage = document.querySelector(".slider-image-container");
let sliderMargin = 0;

if (sliderLeft && sliderRight && sliderImage) {
  sliderRight.addEventListener("click", () => {
    sliderMargin += 100;
    if (sliderMargin > 200) sliderMargin = 0;
    sliderImage.style.marginLeft = `-${sliderMargin}vw`;
  });

  sliderLeft.addEventListener("click", () => {
    sliderMargin = sliderMargin === 0 ? 200 : sliderMargin - 100;
    sliderImage.style.marginLeft = `-${sliderMargin}vw`;
  });
}

// ========== LIKE BUTTON ==========
const likeButtons = document.querySelectorAll(".like-button");

if (likeButtons.length > 0) {
  likeButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (e.target.src.includes("blackheart")) {
        e.target.src = "img/brands/redheart.png";
      } else {
        e.target.src = "img/brands/blackheart.png";
      }
    });
  });
}

// ========== SCROLL ANIMATION ==========
window.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".initial-scroll-animate");
  elements.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elBound = el.getBoundingClientRect();
    if (windowHeight > elBound.top - 100) {
      el.classList.remove("reveal-scroll-animate");
    }
  });
});

// ========== SEARCH AND FILTER (Collections Page Only) ==========
const searchInput = document.querySelector(".navbar-search input");
const checkboxes = document.querySelectorAll(".filter-section input[type='checkbox']");
const products = document.querySelectorAll(".product");

if (searchInput && checkboxes.length > 0 && products.length > 0) {
  function filterProducts() {
    const searchText = searchInput.value.toLowerCase();
    const selectedFilters = Array.from(checkboxes)
      .filter((cb) => cb.checked)
      .map((cb) => cb.value.toLowerCase());

    products.forEach((product) => {
      const productName = product.querySelector("h1").textContent.toLowerCase();
      const tagsEl = product.querySelector("tags");
      const productTags = tagsEl ? tagsEl.textContent.toLowerCase() : "";

      const matchesSearch = productName.includes(searchText);
      const matchesFilter =
        selectedFilters.length === 0 ||
        selectedFilters.some((filter) => productTags.includes(filter));

      product.style.display = matchesSearch && matchesFilter ? "block" : "none";
    });
  }

  searchInput.addEventListener("keyup", filterProducts);
  checkboxes.forEach((cb) => cb.addEventListener("change", filterProducts));
}
