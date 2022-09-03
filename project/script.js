const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerIcon.addEventListener('click', toggleMobileMenu);
shoppingCartIcon.addEventListener('click', toggleShoppingCartContainer);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);


function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

function toggleShoppingCartContainer() {
    shoppingCartContainer.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

function openProductDetailAside() {
    productDetailContainer.classList.remove('inactive');
    shoppingCartContainer.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
});
productList.push({
    name: 'Monitor',
    price: 240,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
});
productList.push({
    name: 'Computador',
    price: 480,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside)
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
        
        const productFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productFigure.appendChild(productImgCart);
        
        productInfo.append(productInfoDiv, productFigure);
        
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);