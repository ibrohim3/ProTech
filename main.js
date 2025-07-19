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
    <a href="${item.link}">${item.title}</a>
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
        <div class="div">
        Electronics
        </div>
          <div class="div">
        Clothes
        </div>
          <div class="div">
        Bags
        </div>
          <div class="div">
        Food
        </div>
        `;
        li.appendChild(extra);
      });
    }

    sidebarContainer.appendChild(li);
    // const div = document.querySelector('div')
    // div.addEventListener('click', function() {
    //   div.style = 'border-left: 5px solid #ffc831'
    // })
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
    title: 'Blog',
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

function getcategory() {
  const categoryContainer = document.getElementById('category-menu');

  if (!categoryContainer) return;
  category.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = `
     <a href="#"  ">${item.title}</a>
    `;
    categoryContainer.appendChild(li);
  });
}
getcategory();

// Get Cards

const products = [
  {
    productImg: './images/img1.png',
    avatar: './images/avatar.png',
    title: 'MacBook Pro 13” Big Discount',
    shopName: 'Eshop Spot',
    price: 1.999552,
    oldPrice: 5415,
    sold: 5,
    rating: 4.8,
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
    productImg: './images/img3.png',
    avatar: './images/avatar.png',
    title: 'Gaming Headset',
    shopName: 'GamerPro',
    price: 69.99,
    oldPrice: 89.99,
    sold: 90,
    rating: 4.9,
  },
  {
    productImg: './images/img4.png',
    avatar: './images/avatar.png',
    title: 'Gaming Headset',
    shopName: 'GamerPro',
    price: 69.99,
    oldPrice: 89.99,
    sold: 90,
    rating: 4.9,
  },
  {
    productImg: './images/img5.png',
    avatar: './images/avatar.png',
    title: 'Gaming Headset',
    shopName: 'GamerPro',
    price: 69.99,
    oldPrice: 89.99,
    sold: 90,
    rating: 4.9,
  },
  {
    productImg: './images/img6.png',
    avatar: './images/avatar.png',
    title: 'Gaming Headset',
    shopName: 'GamerPro',
    price: 69.99,
    oldPrice: 89.99,
    sold: 90,
    rating: 4.9,
  },
];

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
  });
}

document.addEventListener('DOMContentLoaded', generateProducts);
