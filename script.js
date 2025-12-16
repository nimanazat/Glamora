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
    price: "30,000 IQD",
    oldPrice: "35,000 IQD",
    image: "haircare/1.jpg",
    category:"haircare"
  },
  {
    id: 7,
    name: "Whitening Toothpaste 75 ml",
    brand: "SmilePro",
    price: "30,000 IQD",
    oldPrice: "35,000 IQD",
    image: "haircare/2.jpg",
    category:"haircare"
  },
  {
    id: 7,
    name: "Whitening Toothpaste 75 ml",
    brand: "SmilePro",
    price: "30,000 IQD",
    oldPrice: "35,000 IQD",
    image: "haircare/3.jpg",
    category:"haircare"
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
    name: "RED TOBACO 110ml",
    brand: "CHAMONI PARIS",
    price: "35,000 IQD",
    oldPrice: "40,000 IQD",
    image: "perfume/chamoni/chredtobaco.jpg",
    category: "perfume"
  },
  {
    id: 10,
    name: "OUD WOOD 110ml",
    brand: "CHAMONI PARIS",
    price: "35,000 IQD",
    oldPrice: "40,000 IQD",
    image: "perfume/chamoni/choudwood.jpg",
    category: "perfume"
  },
  {
    id: 11,
    name: "GRIS 110ml",
    brand: "CHAMONI PARIS",
    price: "35,000 IQD",
    oldPrice: "40,000 IQD",
    image: "perfume/chamoni/chgris.jpg",
    category: "perfume"
  },
  {
    id: 12,
    name: "GESSAH 110ml",
    brand: "CHAMONI PARIS",
    price: "35,000 IQD",
    oldPrice: "40,000 IQD",
    image: "perfume/chamoni/chgessah.jpg",
    category: "perfume"
  },
  {
    id: 13,
    name: "BLACK ORCHID 110ml",
    brand: "CHAMONI PARIS",
    price: "35,000 IQD",
    oldPrice: "40,000 IQD",
    image: "perfume/chamoni/chblackorchid.jpg",
    category: "perfume"
  },
  {
    id: 14,
    name: " LA LONA 110ml",
    brand: "CHAMONI PARIS",
    price: "35,000 IQD",
    oldPrice: "40,000 IQD",
    image: "perfume/chamoni/lalona.jpg",
    category: "perfume"
  }
  ,
  {
    id: 15,
    name: " LV OMBER 110ml",
    brand: "CHAMONI PARIS",
    price: "35,000 IQD",
    oldPrice: "40,000 IQD",
    image: "perfume/chamoni/lvomber.jpg",
    category: "perfume"
  } ,
  {
    id: 16,
    name: " BACARAT 110ml",
    brand: "CHAMONI PARIS",
    price: "35,000 IQD",
    oldPrice: "40,000 IQD",
    image: "perfume/chamoni/Bacarat.jpg",
    category: "perfume"
  } ,
  {
    id: 14,
    name: " BLACK AFGANO 110ml",
    brand: "CHAMONI PARIS",
    price: "35,000 IQD",
    oldPrice: "40,000 IQD",
    image: "perfume/chamoni/BlackAfgano.jpg",
    category: "perfume"
  }
  ,
  {
    id: 14,
    name: " LV NAUVAU 110ml",
    brand: "CHAMONI PARIS",
    price: "35,000 IQD",
    oldPrice: "40,000 IQD",
    image: "perfume/chamoni/lvNauvau.jpg",
    category: "perfume"
  } ,
  {
    id: 14,
    name: " TOBACO VANIL 110ml",
    brand: "CHAMONI PARIS",
    price: "35,000 IQD",
    oldPrice: "40,000 IQD",
    image: "perfume/chamoni/tobacoVanil.jpg",
    category: "perfume"
  } ,
  {
    id: 14,
    name: "  110ml",
    brand: "CHAMONI PARIS",
    price: "35,000 IQD",
    oldPrice: "40,000 IQD",
    image: "",
    category: "perfume"
  } ,
  {
    id: 14,
    name: "  110ml",
    brand: "CHAMONI PARIS",
    price: "35,000 IQD",
    oldPrice: "40,000 IQD",
    image: "",
    category: "perfume"
  } ,
  {
    id: 14,
    name: "  110ml",
    brand: "CHAMONI PARIS",
    price: "35,000 IQD",
    oldPrice: "40,000 IQD",
    image: "",
    category: "perfume"
  } ,
  {
    id: 14,
    name: "  110ml",
    brand: "CHAMONI PARIS",
    price: "35,000 IQD",
    oldPrice: "40,000 IQD",
    image: "",
    category: "perfume"
  } ,
  {
    id: 14,
    name: "  110ml",
    brand: "CHAMONI PARIS",
    price: "35,000 IQD",
    oldPrice: "40,000 IQD",
    image: "",
    category: "perfume"
  } ,
  {
    id: 14,
    name: "  110ml",
    brand: "CHAMONI PARIS",
    price: "35,000 IQD",
    oldPrice: "40,000 IQD",
    image: "",
    category: "perfume"
  } ,
  {
    id: 14,
    name: "  110ml",
    brand: "CHAMONI PARIS",
    price: "35,000 IQD",
    oldPrice: "40,000 IQD",
    image: "",
    category: "perfume"
  } ,
  {
    id: 14,
    name: "  110ml",
    brand: "CHAMONI PARIS",
    price: "35,000 IQD",
    oldPrice: "40,000 IQD",
    image: "",
    category: "perfume"
  } ,
  {
    id: 14,
    name: "  110ml",
    brand: "CHAMONI PARIS",
    price: "35,000 IQD",
    oldPrice: "40,000 IQD",
    image: "",
    category: "perfume"
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
  document.getElementById("add-to-cart-btn").addEventListener("click", () => {
    addToCart(product);
    alert("Added to cart!");
});

function addToCart(product) {
  let cart = getCart();

  let existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: 1
    });
  }

  saveCart(cart);
  alert("Added to cart!");
}
function loadCartPage() {
  const container = document.getElementById("cart-items");
  let cart = getCart();
  let total = 0;

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    document.getElementById("cart-total").textContent = "";
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item" style="
      display:flex;
      gap:15px;
      margin-bottom:20px;
      padding:10px;
      border-radius:12px;
      background:var(--card-bg);
      box-shadow:var(--shadow-soft);
    ">
      <img src="${item.image}" style="width:80px;height:80px;border-radius:12px;object-fit:cover;">

      <div style="flex:1;">
        <h3 style="margin:0;font-size:16px;">${item.name}</h3>
        <p style="margin:4px 0;color:var(--text-soft);">${item.price}</p>

        <div style="display:flex;align-items:center;gap:10px;margin-top:8px;">
          <button onclick="changeQty(${item.id}, -1)">–</button>
          <span>${item.qty}</span>
          <button onclick="changeQty(${item.id}, 1)">+</button>
        </div>

        <button onclick="removeFromCart(${item.id})"
                style="margin-top:10px;font-size:12px;color:red;">
          Remove
        </button>
      </div>
    </div>
  `).join("");

  // Calculate total
  cart.forEach(item => {
    let price = parseInt(item.price.replace(/[^0-9]/g, ""));
    total += price * item.qty;
  });

  document.getElementById("cart-total").textContent =
    "Total: " + total.toLocaleString() + " IQD";
}
function changeQty(id, amount) {
  let cart = getCart();
  let item = cart.find(i => i.id === id);

  if (!item) return;

  item.qty += amount;

  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== id);
  }

  saveCart(cart);
  loadCartPage();
}

function removeFromCart(id) {
  let cart = getCart().filter(item => item.id !== id);
  saveCart(cart);
  loadCartPage();
}


  // FIX: Load image into the big frame
  const imgBox = document.querySelector(".product-page-img");
  imgBox.innerHTML = `<img src="${product.image}" alt="${product.name}">`;

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

function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// =====================================================
//                    INIT ON PAGE LOAD
// =====================================================

document.addEventListener("DOMContentLoaded", () => {
  updateFavoriteIcons();

  const page = document.body.dataset.page || "";
  loadBottomNav(page);
});
