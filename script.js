// =====================================================
//                 PRODUCT DATA
// =====================================================

const PRODUCTS = [
  {
    id: 1,
    name: "Direct Acids AHA 30% + BHA 2% Peeling Solution",
    brand: "The Ordinary",
    price: "35,000 IQD",
    oldPrice: "40,000 IQD",
    image: "face care/ordinary.png",
    category: "facecare"
  },
  {
    id: 2,
    name: "Cicaplast Baume B5+",
    brand: "LA ROCHE-POSAY",
    price: "25,000 IQD",
    oldPrice: "30,000 IQD",
    image: "face care/LaRoche.png",
    category: "facecare"
  },
  {
    id: 3,
    name: "Adhesive Bandages Pack",
    brand: "MediCare",
    price: "4,500 IQD",
    oldPrice: "",
    image: "assets/images/firstaid1.png",
    category: "firstaid"
  },
  {
    id: 4,
    name: "Antiseptic Spray 100 ml",
    brand: "SafeSkin",
    price: "6,750 IQD",
    oldPrice: "",
    image: "assets/images/firstaid2.png",
    category: "firstaid"
  },
  {
    id: 5,
    name: "Deep Moisture Body Lotion 250 ml",
    brand: "SoftBody",
    price: "9,900 IQD",
    oldPrice: "11,500 IQD",
    image: "glamora/chgessah.jpg",
    category: "bodycare"
  },
  {
    id: 6,
    name: "Facial Cleansing Brush",
    brand: "GlowTech",
    price: "22,000 IQD",
    oldPrice: "",
    image: "assets/images/device1.png",
    category: "devices"
  },
  {
    id: 7,
    name: "Whitening Toothpaste 75 ml",
    brand: "SmilePro",
    price: "5,800 IQD",
    oldPrice: "",
    image: "assets/images/oral1.png",
    category: "oralcare"
  },
  {
    id: 8,
    name: "Refreshing Deodorant Spray",
    brand: "FreshMe",
    price: "7,200 IQD",
    oldPrice: "",
    image: "assets/images/personal1.png",
    category: "personalcare"
  },
  {
    id: 9,
    name: "Eau de Parfum 50 ml",
    brand: "Glamora",
    price: "34,500 IQD",
    oldPrice: "40,000 IQD",
    image: "perfume\chamoni\chgris.jpg",
    category: "fragrance"
  },
  {
    id: 10,
    name: "Baby Shampoo 200 ml",
    brand: "LittleCare",
    price: "6,000 IQD",
    oldPrice: "",
    image: "perfume\chamoni\chgessah.jpg",
    category: "babycare"
  },
  {
    id: 11,
    name: "Glamora Mist 120ml",
    brand: "Glamora",
    price: "22,000 IQD",
    oldPrice: "27,000 IQD",
    image: "chamoni\chgessah.jpg",
    category: "fragrance"
  },
  {
    id: 12,
    name: "Royal Oud 50ml",
    brand: "Elite Scents",
    price: "45,000 IQD",
    oldPrice: "50,000 IQD",
    image: "assets/images/fragrance3.jpg",
    category: "fragrance"
  },
  {
    id: 13,
    name: "Royal Oud 50ml",
    brand: "Elite Scents",
    price: "45,000 IQD",
    oldPrice: "50,000 IQD",
    image: "perfume\chamoni\chgessah.jpg.jpg",
    category: "fragrance"
  }
  
];


// =====================================================
//                    FAVORITES
// =====================================================

function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
}

function saveFavorites(list) {
  localStorage.setItem("favorites", JSON.stringify(list));
}

function toggleFavorite(id) {
  let favs = getFavorites();
  if (favs.includes(id)) {
      favs = favs.filter(x => x !== id);
  } else {
      favs.push(id);
  }
  saveFavorites(favs);
  updateFavoriteIcons();
}

function isFavorite(id) {
  return getFavorites().includes(id);
}

function updateFavoriteIcons() {
  document.querySelectorAll("[data-favid]").forEach(el => {
      const id = Number(el.dataset.favid);
      el.innerHTML = isFavorite(id)
        ? `<i class="fa-solid fa-heart"></i>`
        : `<i class="fa-regular fa-heart"></i>`;
  });
}


// =====================================================
//                RENDER PRODUCT CARDS
// =====================================================

function renderProducts(containerSelector, category = null) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  container.innerHTML = "";

  const list = category
    ? PRODUCTS.filter(p => p.category === category)
    : PRODUCTS;

  list.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
      <div class="product-fav" data-favid="${product.id}">
          <i class="fa-regular fa-heart"></i>
      </div>
  
      <div class="product-img">
          <img src="${product.image}" alt="${product.name}">
      </div>
  
      <div class="product-brand">${product.brand}</div>
      <div class="product-name">${product.name}</div>
      <div class="product-price-now">${product.price}</div>
      ${product.oldPrice ? `<div class="product-price-old">${product.oldPrice}</div>` : ""}
  `;
  
    

      card.addEventListener("click", (e) => {
          if (e.target.closest("[data-favid]")) return;
          localStorage.setItem("productView", JSON.stringify(product));
          window.location.href = "product.html";
      });

      const favBtn = card.querySelector("[data-favid]");
      favBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          toggleFavorite(product.id);
      });

      container.appendChild(card);
  });

  updateFavoriteIcons();
}


// =====================================================
//                 RENDER FAVORITES PAGE
// =====================================================

function renderFavorites(containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const favIds = getFavorites();
  container.innerHTML = "";

  if (!favIds.length) {
      container.innerHTML = `
      <div class="placeholder-block">
          <h3>No favorite products yet</h3>
          <p>Tap the heart icon on a product to add it.</p>
      </div>`;
      return;
  }

  const grid = document.createElement("div");
  grid.className = "category-grid";

  PRODUCTS.filter(p => favIds.includes(p.id)).forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";

      card.innerHTML = `
      <div class="product-fav" data-favid="${product.id}">
        <i class="fa-regular fa-heart"></i>
      </div>
    
      <div class="product-img">
        <img src="${product.image}" alt="${product.name}">
      </div>
    
      <div class="product-brand">${product.brand}</div>
      <div class="product-name">${product.name}</div>
      <div class="product-price-now">${product.price}</div>
      ${product.oldPrice ? `<div class="product-price-old">${product.oldPrice}</div>` : ""}
    `;
    

      card.addEventListener("click", (e) => {
          if (e.target.closest("[data-favid]")) return;
          localStorage.setItem("productView", JSON.stringify(product));
          window.location.href = "product.html";
      });

      const favBtn = card.querySelector("[data-favid]");
      favBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          toggleFavorite(product.id);
          renderFavorites(containerSelector);
      });

      grid.appendChild(card);
  });

  container.appendChild(grid);
  updateFavoriteIcons();
}


// =====================================================
//                         SEARCH
// =====================================================

function enableSearch(inputSelector, listSelector) {
  const input = document.querySelector(inputSelector);
  const container = document.querySelector(listSelector);

  if (!input || !container) return;

  input.addEventListener("input", () => {
      const value = input.value.toLowerCase();
      container.querySelectorAll(".product-card").forEach(card => {
          const name = card.querySelector(".product-name").textContent.toLowerCase();
          card.style.display = name.includes(value) ? "flex" : "none";
      });
  });
}


// =====================================================
//                  PRODUCT PAGE LOADER
// =====================================================

function loadProductPage() {
  const product = JSON.parse(localStorage.getItem("productView"));
  if (!product) return;

  document.getElementById("p-name").textContent = product.name;
  document.getElementById("p-brand").textContent = product.brand;
  document.getElementById("p-price").textContent = product.price;

  updateFavoriteIcons();
}


// =====================================================
//         BOTTOM NAV (FONT AWESOME ICONS)
// =====================================================

function loadBottomNav(active = "") {
  const navHTML = `
    <div class="bottom-nav-inner">

        <a href="index.html" class="nav-item ${active === "home" ? "active" : ""}">
          <span class="icon"><i class="fa-solid fa-house"></i></span>
          <span>Home</span>
        </a>

        <a href="categories.html" class="nav-item ${active === "categories" ? "active" : ""}">
          <span class="icon"><i class="fa-solid fa-list"></i></span>
          <span>Categories</span>
        </a>

        <div class="nav-center-wrapper">
            <button class="nav-center-btn" id="scanBtn">
                <i class="fa-solid fa-qrcode"></i>
            </button>
        </div>

        <a href="favorites.html" class="nav-item ${active === "favorites" ? "active" : ""}">
          <span class="icon"><i class="fa-regular fa-heart"></i></span>
          <span>Favorites</span>
        </a>

        <a href="profile.html" class="nav-item ${active === "profile" ? "active" : ""}">
          <span class="icon"><i class="fa-regular fa-user"></i></span>
          <span>Account</span>
        </a>

    </div>
  `;

  // Inject HTML
  const navContainer = document.querySelector(".bottom-nav");
  if (navContainer) navContainer.innerHTML = navHTML;

  // Fix: Add click event AFTER HTML is created
  const scanBtn = document.getElementById("scanBtn");
  if (scanBtn) {
    scanBtn.addEventListener("click", () => {
      window.location.href = "scan.html";
    });
  }
}


// =====================================================
//                    INIT ON PAGE LOAD
// =====================================================

document.addEventListener("DOMContentLoaded", () => {
  updateFavoriteIcons();

  const page = document.body.dataset.page || "";
  loadBottomNav(page);
});
