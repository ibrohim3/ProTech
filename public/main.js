const toggleBtn = document.getElementById('toggle-darkmode');
toggleBtn.addEventListener('click', () => {
  if (document.body.classList.contains('dark')) {
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    toggleBtn.classList.remove('fa-sun');
    toggleBtn.classList.add('fa-moon');
  } else {
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    toggleBtn.classList.remove('fa-moon');
    toggleBtn.classList.add('fa-sun');
  }
});
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    toggleBtn.classList.remove('fa-moon');
    toggleBtn.classList.add('fa-sun');
  } else {
    document.body.classList.remove('dark');
    toggleBtn.classList.remove('fa-sun');
    toggleBtn.classList.add('fa-moon');
  }
});
const sidebar = [
  {
    id: 1,
    title: 'Home',
    icon: './images/icon1.png',
    link: '/',
  },
  {
    id: 2,
    title: 'Discover',
    icon: './images/icon1.png',
    link: '#',
  },
  {
    id: 3,
    title: 'Popular Products',
    icon: './images/icon2.png',
    link: '#',
  },
  {
    id: 4,
    title: 'Top Authors',
    icon: './images/icon3.png',
    link: '/about',
  },
  {
    id: 5,
    title: 'Feed',
    icon: './images/icon4.png',
    link: '/contact',
  },
  {
    id: 6,
    title: 'Contact',
    icon: './images/icon5.png',
    link: '/blog',
  },
];
function generateSidebar() {
  const sidebarContainer = document.getElementById('sidebar-menu');

  if (!sidebarContainer) return;

  sidebar.forEach((item, index) => {
    const li = document.createElement('li');

    li.innerHTML = `
      <div class="div">
        <img src="${item.icon}" alt="">
        <span>${item.title}</span>
      </div>
    `;
    if (index === 1) {
      li.addEventListener('click', function (e) {
        e.preventDefault();

        const existingExtra = li.querySelector('.extra-info');

        if (existingExtra) {
          existingExtra.remove();
          return;
        }

        const extra = document.createElement('div');
        extra.className = 'extra-info';
        extra.innerHTML = `
          <div class="sub-item">Electronics</div>
          <div class="sub-item">Clothes</div>
          <div class="sub-item">Bags</div>
          <div class="sub-item">Food</div>
        `;

        li.appendChild(extra);

        const subItems = extra.querySelectorAll('.sub-item');

        subItems.forEach((sub) => {
          sub.addEventListener('click', function (e) {
            e.stopPropagation();
            subItems.forEach((el) => el.classList.remove('active'));
            sub.classList.add('active');
          });
        });
      });
    }

    sidebarContainer.appendChild(li);
  });
}

document.addEventListener('DOMContentLoaded', generateSidebar);

let category = [
  {
    id: 1,
    title: 'All',
    link: '/blog',
  },
  {
    id: 2,
    title: 'Electronics',
    link: '/blog',
  },
  {
    id: 3,
    title: 'Food',
    link: '/Food',
  },
  {
    id: 4,
    title: 'Books',
    link: '/Books',
  },
  {
    id: 5,
    title: 'Clothes',
    link: '/Clothes',
  },
  {
    id: 6,
    title: 'Grocery',
    link: '/Grocery',
  },
  {
    id: 7,
    title: 'Furniture',
    link: '/Furniture',
  },
  {
    id: 8,
    title: 'Baby care',
    link: '/Baby care',
  },
  {
    id: 9,
    title: 'Stationery',
    link: '/Stationery',
  },
  {
    id: 10,
    title: 'Beauty & Makeup',
    link: '/Beauty & Makeup',
  },
];

const products = [
  {
    productImg: './images/img1.png',
    avatar: './images/avatar.png',
    title: 'MacBook Pro 13” Big Discount',
    shopName: 'Eshop Spot',
    price: 2000.0,
    oldPrice: 2150,
    sold: 5,
    rating: 4.8,
    category: 'Electronics',
  },
  {
    productImg: './images/img2.png',
    avatar: './images/avatar.png',
    title: 'Joystick Game Controller',
    shopName: 'AudioMax',
    price: 29.99,
    oldPrice: 59.99,
    sold: 250,
    rating: 4.6,
  },
  {
    productImg: './images/img12.png',
    avatar: './images/avatar.png',
    title: 'TP-Link Archer AX53 AX3000 Dual Band',
    shopName: 'Eshop Spot',
    price: 37.29,
    oldPrice: 45.24,
    sold: 31,
    rating: 4.6,
    category: 'Electronics',
  },
  {
    productImg: './images/img3.png',
    avatar: './images/avatar.png',
    title: 'Mavic Air Phantom 4 pro',
    shopName: 'Eshop Spot',
    price: 609.99,
    oldPrice: 750.99,
    sold: 90,
    rating: 4.9,
    category: 'Electronics',
  },
  {
    productImg: './images/img4.png',
    avatar: './images/avatar.png',
    title: 'Nikon D7500 20.9 Mp Touchscreen',
    shopName: 'GamerPro',
    price: 1200.99,
    oldPrice: 1250.99,
    sold: 90,
    rating: 5,
    category: 'Electronics',
  },
  {
    productImg: './images/img5.png',
    avatar: './images/avatar.png',
    title: 'Apple Airpods Pro White',
    shopName: 'GamerPro',
    price: 29.99,
    oldPrice: 35.99,
    sold: 48,
    rating: 4.5,
    category: 'Electronics',
  },
  {
    productImg: './images/img6.png',
    avatar: './images/avatar.png',
    title: 'Apple iMac Retina 5K 27"',
    shopName: 'Apple Max',
    price: 1169.99,
    oldPrice: 1200.99,
    sold: 14,
    rating: 4.9,
    category: 'Electronics',
  },
  {
    productImg: './images/img7.png',
    avatar: './images/avatar.png',
    title: 'Apple iPhone X 256GB 3GB RAM',
    shopName: 'Eshop Spot',
    price: 190.0,
    oldPrice: 200.0,
    sold: 20,
    rating: 5,
    category: 'Electronics',
  },
  {
    productImg: './images/img8.png',
    avatar: './images/avatar.png',
    title: 'BEATS SOLO PRO 1 Wireless Headphone',
    shopName: 'AudioMax',
    price: 45.999,
    oldPrice: 59.999,
    sold: 450,
    rating: 4.8,
    category: 'Electronics',
  },
  {
    productImg: './images/img6.png',
    avatar: './images/avatar.png',
    title: 'Apple iMac Retina 5K 27"',
    shopName: 'Apple Max',
    price: 1169.99,
    oldPrice: 1200.99,
    sold: 14,
    rating: 4.9,
    category: 'Electronics',
  },
  {
    productImg: './images/img9.png',
    avatar: './images/avatar.png',
    title: 'TP-Link Archer AX53 AX3000 Dual Band',
    shopName: 'Eshop Spot',
    price: 450.0,
    oldPrice: 509.999,
    sold: 50,
    rating: 4.6,
    category: 'Electronics',
  },
  {
    productImg: './images/img10.png',
    avatar: './images/avatar.png',
    title: 'Apple iPhone X 256GB 3GB RAM',
    shopName: 'Eshop Spot',
    price: 19.99,
    oldPrice: 29.99,
    sold: 250,
    rating: 4.6,
    category: 'd',
  },
  {
    productImg: './images/img11.png',
    avatar: './images/avatar.png',
    title: 'BEATS SOLO PRO 1 Wireless Headphone',
    shopName: 'AudioMax',
    price: 10.99,
    oldPrice: 15.99,
    sold: 98,
    rating: 4.9,
    category: 'Electronics',
  },
  {
    productImg: './images/img12.png',
    avatar: './images/avatar.png',
    title: 'TP-Link Archer AX53 AX3000 Dual Band',
    shopName: 'Eshop Spot',
    price: 37.29,
    oldPrice: 45.24,
    sold: 31,
    rating: 4.6,
    category: 'Electronics',
  },
  {
    productImg: './images/img13.png',
    avatar: './images/avatar.png',
    title: 'Gaming PC Case – RGB Lighting',
    shopName: 'Eshop Spot',
    price: 1700.29,
    oldPrice: 1900.24,
    sold: 11,
    rating: 4.9,
    category: 'Electronics',
  },
  {
    productImg: './images/img14.png',
    avatar: './images/avatar.png',
    title: '42" Smart LED Televizor – Full HD',
    shopName: 'Eshop Spot',
    price: 400.0,
    oldPrice: 500.24,
    sold: 19,
    rating: 4.7,
    category: 'Electronics',
  },
  {
    productImg: './images/img15.png',
    avatar: './images/avatar.png',
    title: 'Electric Water Heater',
    shopName: 'Eshop Max',
    price: 39.99,
    oldPrice: 50.24,
    sold: 8,
    rating: 4.7,
    category: 'Electronics',
  },
  {
    productImg: './images/img16.png',
    avatar: './images/avatar.png',
    title: 'Men’s Running Sneakers',
    shopName: 'Nike Shop',
    price: 25.99,
    oldPrice: 30.0,
    sold: 48,
    rating: 4.5,
    category: 'Clothes',
  },
  {
    productImg: './images/img17.png',
    avatar: './images/avatar.png',
    title: 'Unisex Sports Shoes',
    shopName: 'Clothes Shop',
    price: 27.99,
    oldPrice: 35.0,
    sold: 14,
    rating: 4.6,
    category: 'Clothes',
  },
  {
    productImg: './images/img18.png',
    avatar: './images/avatar.png',
    title: 'Electric Coffee Grinder',
    shopName: 'E Shop',
    price: 55.99,
    oldPrice: 85.0,
    sold: 4,
    rating: 4.8,
    category: 'Electronics',
  },
];
function getcategory() {
  const categoryContainer = document.getElementById('category-menu');
  if (!categoryContainer) return;

  category.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${item.link}">${item.title}</a>`;
    categoryContainer.appendChild(li);
  });
}
getcategory();
// Get Products

const cart = [];

function generateProducts() {
  const container = document.getElementById('productsContainer');
  container.innerHTML = '';

  products.forEach((item, index) => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.innerHTML = `
      <div class="product-img">
         <img src="${item.productImg}" alt="${item.title}">
      </div>
      <div class="description">
        <div class="avatar">
          <img src="${item.avatar}" alt="${
      item.shopName
    }" style="width: 40px; height: 40px; border-radius: 50%;">
        </div>
        <div class="info">
          <p class="title">${item.title}</p>
          <p class="shop-name">${item.shopName}</p>
        </div>
      </div>
      <div class="prices">
        <div>
          <strong class="price">$${item.price.toFixed(2)}</strong>
          <s class="old-price" style="text-decoration: line-through;">$${item.oldPrice.toFixed(
            2
          )}</s>
        </div>
        <div>
          <s class="sale-number">${item.sold} sold</s>
          <p class="rating">⭐ ${item.rating}</p>
        </div>
      </div>
      <button class="add-cart" data-index="${index}">
        <i class="fa-solid fa-cart-shopping"></i>
      </button>
    `;

    container.appendChild(productDiv);
    // const notif2 = document.querySelector('.notif2');
    const addCartBtn = productDiv.querySelector('.add-cart');
    // notif2.style.display = 'none';
    addCartBtn.addEventListener('click', function () {
      addToCart(index);
      updateCount();

      // setTimeout(() => {
      //   notif2.style.display = 'block';
      // }, 50);
    });
  });
}

function addToCart(index) {
  const product = products[index];

  const alreadyInCart = cart.some((item) => item.title === product.title);
  if (alreadyInCart) {
    alert('Bu mahsulot allaqachon savatda bor!');
    return;
  }

  cart.push(product);
  renderCart();
}
function renderCart() {
  const cartContainer2 = document.getElementById('cartContainer2');
  const productNum = document.querySelector('.product-num');
  if (!cartContainer2) return;

  cartContainer2.innerHTML = '';

  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="remove-modal-div">
      <div class="total-price-all">Umumiy narx: <strong id="totalPriceAll">0$</strong></div> 
      <div class="remove-modal">x</div>
    </div>
  `;
  const removeModal = modal.querySelector('.remove-modal');
  removeModal.addEventListener('click', () => {
    modal.remove();
  });
  // const cartIcon = document.querySelector('#backet'); // savat iconi
  // cartIcon.addEventListener('click', () => {
  //   document.body.appendChild(modal); // modalni qayta DOMga qo‘shadi
  // });

  let totalAll = 0;

  cart.forEach((item, i) => {
    const modalProduct = document.createElement('div');
    modalProduct.className = 'modal-product';
    modalProduct.innerHTML = `
      <div class="modal-div">
        <div class="product-img">
          <img src="${item.productImg}" alt="${item.title}">
        </div>
        <div>
          <p>${item.title}</p>
          <p class="shop-name">Sotuvchi: ${item.shopName}</p>
        </div>
      </div>
      <div class="counter">
        <button class="plus">+</button>
        <span class="count2">1</span>
        <button class="minus">-</button>
      </div>
      <div class="total-prices">
        <button class="remove">x</button>
        <strong class="total-price">${item.price.toFixed(2)}$</strong>
      </div>
    `;

    const plus = modalProduct.querySelector('.plus');
    const minus = modalProduct.querySelector('.minus');
    const countSpan = modalProduct.querySelector('.count2');
    const totalPrice = modalProduct.querySelector('.total-price');

    let productTotal = item.price;
    // Qo'shish
    plus.addEventListener('click', () => {
      let count = parseInt(countSpan.textContent);
      count++;
      countSpan.textContent = count;

      productTotal = item.price * count;
      totalPrice.textContent = productTotal.toFixed(2) + '$';

      updateTotalPriceAll();
    });
    // Ayirish
    minus.addEventListener('click', () => {
      let count = parseInt(countSpan.textContent);
      if (count > 1) {
        count--;
        countSpan.textContent = count;

        productTotal = item.price * count;
        totalPrice.textContent = productTotal.toFixed(2) + '$';

        updateTotalPriceAll();
      } else {
        cart.splice(i, 1);
        renderCart();
        updateCount();
      }
    });

    const removeBtn = modalProduct.querySelector('.remove');
    removeBtn.addEventListener('click', () => {
      cart.splice(i, 1);
      renderCart();
      updateCount();
    });

    totalAll += productTotal;
    modal.appendChild(modalProduct);
  });

  function updateTotalPriceAll() {
    const allPrices = modal.querySelectorAll('.total-price');
    let total = 0;
    allPrices.forEach((el) => {
      total += parseFloat(el.textContent.replace('$', ''));
    });
    const totalPriceAll = modal.querySelector('#totalPriceAll');
    if (totalPriceAll) {
      totalPriceAll.textContent = total.toFixed(2) + '$';
    }
  }

  const totalPriceAll = modal.querySelector('#totalPriceAll');
  if (totalPriceAll) {
    totalPriceAll.textContent = totalAll.toFixed(2) + '$';
  }
  cartContainer2.appendChild(modal);
  modal.style.display = 'none';
  // Mahsulot sonini ko‘rsatish
  updateCount();
}
generateProducts();
function updateCount() {
  const productNum = document.querySelector('.product-num');
  if (!productNum) return;
  if (cart.length === 0) {
    productNum.style.display = 'none';
  } else {
    productNum.style.display = 'block';
    productNum.textContent = cart.length;
  }
}
// Modalni ochish
const backet = document.querySelector('.backet');
const cartContainer2 = document.getElementById('cartContainer2');

if (backet && cartContainer2) {
  backet.addEventListener('click', function () {
    const modals = document.querySelectorAll('.modal');
    modals.forEach((modal) => {
      modal.style.display = 'block';
    });
  });
}

// Search filter
const searchInput = document.getElementById('searchInput');
const noResult = document.getElementById('noResult');

searchInput.addEventListener('input', function () {
  const filter = searchInput.value.toLowerCase();
  const productCards = document.querySelectorAll('#productsContainer .product');

  let anyVisible = false;

  productCards.forEach((card) => {
    const titleEl = card.querySelector('.title');
    const shopNameEl = card.querySelector('.shop-name');
    const text =
      `${titleEl.textContent} ${shopNameEl.textContent}`.toLowerCase();

    if (text.includes(filter)) {
      card.style.display = '';
      anyVisible = true;
    } else {
      card.style.display = 'none';
    }
  });

  if (!anyVisible) {
    noResult.style.display = 'block';
  } else {
    noResult.style.display = 'none';
  }
});

// Register Modal
const overlay = document.getElementById('overlay');
const registerBtn = document.querySelector('.register-btn');
const closeBtn = document.getElementById('modal-close');
const registerModal = document.querySelector('.register-modal');
registerBtn.addEventListener('click', () => {
  overlay.style.display = 'flex';
  registerModal.style.display = 'block';
});
closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});

// Inputlar
const firstName = document.querySelector('.name');
const lastName = document.querySelector('.last-name');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const confirmPassword = document.querySelector('.confirm-password');
const submit = document.querySelector('.submit-btn');

// Message elementlar
const msgFirst = document.querySelector('.name-msg');
const msgLast = document.querySelector('.lastname-msg');
const msgEmail = document.querySelector('.email-msg');
const msgPass = document.querySelector('.pass-msg');
const msgConfirm = document.querySelector('.confirm-msg');

// Regexlar
const nameReg = /^[A-Za-z]{2,}$/;
const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passReg = /^(?=.*[a-zA-Z])(?=.*\d).{6,12}$/;

// Submit hodisasi
submit.addEventListener('click', function (event) {
  event.preventDefault();

  const fName = firstName.value.trim();
  const lName = lastName.value.trim();
  const mail = email.value.trim();
  const pass = password.value.trim();
  const confirm = confirmPassword.value.trim();

  let isValid = true;

  // First Name
  if (nameReg.test(fName)) {
    firstName.style.border = '2px solid green';
    msgFirst.textContent = '✅ Good first name';
    msgFirst.style.color = 'green';
  } else {
    firstName.style.border = '2px solid red';
    msgFirst.textContent = '❌ At least 2 letters, no numbers';
    msgFirst.style.color = 'red';
    isValid = false;
  }

  // Last Name
  if (nameReg.test(lName)) {
    lastName.style.border = '2px solid green';
    msgLast.textContent = '✅ Good last name';
    msgLast.style.color = 'green';
  } else {
    lastName.style.border = '2px solid red';
    msgLast.textContent = '❌ At least 2 letters, no numbers';
    msgLast.style.color = 'red';
    isValid = false;
  }

  // Email
  if (emailReg.test(mail)) {
    email.style.border = '2px solid green';
    msgEmail.textContent = '✅ Valid email';
    msgEmail.style.color = 'green';
  } else {
    email.style.border = '2px solid red';
    msgEmail.textContent = '❌ Invalid email format';
    msgEmail.style.color = 'red';
    isValid = false;
  }

  // Password
  if (passReg.test(pass)) {
    password.style.border = '2px solid green';
    msgPass.textContent = '✅ Strong password';
    msgPass.style.color = 'green';
  } else {
    password.style.border = '2px solid red';
    msgPass.textContent = '❌ 6–12 chars, at least one letter and number';
    msgPass.style.color = 'red';
    isValid = false;
  }

  // Confirm Password
  if (pass === confirm && passReg.test(confirm)) {
    confirmPassword.style.border = '2px solid green';
    msgConfirm.textContent = '✅ Passwords match';
    msgConfirm.style.color = 'green';
  } else {
    confirmPassword.style.border = '2px solid red';
    msgConfirm.textContent = '❌ Passwords do not match';
    msgConfirm.style.color = 'red';
    isValid = false;
  }

  // Barchasi to‘g‘ri bo‘lsa localStorage ga yoziladi
  if (isValid) {
    const user = {
      firstName: fName,
      lastName: lName,
      email: mail,
      password: pass,
    };
    localStorage.setItem('user', JSON.stringify(user));
    alert('✅ Successfully registered and saved to localStorage!');
    registerModal.style.display = 'none';
    overlay.style.display = 'none';
  }
});
