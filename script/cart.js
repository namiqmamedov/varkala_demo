$(document).ready(function(){

    showCartItems();
    updateBadgeNumber();

    

    $('.product-hover-overlay .add-to-cart').click(function(e) {
        e.preventDefault();

        const productName = $(this).closest('.product').find('.product-name').text();
        const productPrice = $(this).closest('.product').find('.product-price').text();
        const productImage = $(this).closest('.product').find('.product-front').attr('src');

        let cartItems = [];
        let existingCart = getCookie('cartItems');

        if (existingCart) {
            cartItems = JSON.parse(existingCart);
        }

        let foundItem = cartItems.find(item => item.productName === productName);

        if (foundItem) {
            foundItem.quantity++;
            updateCartItem(foundItem.productName, foundItem.quantity, foundItem.productPrice);
        } else {
            let newItem = {
                productName: productName,
                productPrice: productPrice,
                productImage: productImage,
                quantity: 1
            };

            cartItems.push(newItem);
            createCartItem(newItem);
        }

        document.cookie = `cartItems=${JSON.stringify(cartItems)}`;


        updateCartItem(productName, foundItem ? foundItem.quantity : 1, productPrice); 

        let subtotal = calculateTotal(cartItems);
        $('.price-total h5 span').text(`$${subtotal}`);

    });

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    function calculateTotal(cartItems) {
        let total = 0;
        cartItems.forEach(item => {
            let itemPrice = parseFloat(item.productPrice.slice(1));
            total += itemPrice * item.quantity;
        });
        return total.toFixed(2);
    }


    function showCartItems() {
        let existingCart = getCookie('cartItems');
        if (existingCart) {
            let cartItems = JSON.parse(existingCart);
            let subtotal = calculateTotal(cartItems);

            $('.price-total h5 span').text(`$${subtotal}`);

            cartItems.forEach(item => {
                createCartItem(item);
            });
        }
    }

    function updateCartItem(productName, quantity, productPrice) {
        let quantityElem = $('.list-menu').find(`.title.product-name:contains('${productName}')`).siblings('.quantity');
        let priceElem = $('.list-menu').find(`.title.product-name:contains('${productName}')`).siblings('.price');
        quantityElem.text(`Quantity: ${quantity}`);
        priceElem.text(`${productPrice}`);
    }

    function createCartItem(item) {
        const newCartItem = `
            <li class="card-item">
                    <div class="card-main">
                        <div class="card-thumbail">
                            <img class="product-front" src="${item.productImage}" alt="Image">
                        </div>
                        <div class="card-info">
                            <a class="title link product-name">${item.productName}</a>
                            <p class="quantity">Quantity: ${item.quantity}</p>
                            <strong class="price product-price">${item.productPrice}</strong>
                        </div>
                    </div>
                 <div id="del-card">&times;</div>
            </li>
        `;
        $('.list-menu').append(newCartItem);
    }
 
    $('.list-menu').on('click', '#del-card', function() {
        const productName = $(this).siblings('.card-main').find('.title.product-name').text();
        removeItemFromCart(productName);
        $(this).closest('.card-item').remove();
    
        let existingCart = getCookie('cartItems');
        if (existingCart) {
            let cartItems = JSON.parse(existingCart);
            let subtotal = calculateTotal(cartItems);
            $('.price-total h5 span').text(`$${subtotal}`);
        }

        updateBadgeNumber();

    });

    function removeItemFromCart(productName) {
        let existingCart = getCookie('cartItems');
        if (existingCart) {
            let cartItems = JSON.parse(existingCart);
            const updatedCartItems = cartItems.filter(item => item.productName !== productName);
            document.cookie = `cartItems=${JSON.stringify(updatedCartItems)}`;
        }


        let existingItems = JSON.parse(getCookie('badgeItems')) || {};
        if (existingItems[productName]) {
            delete existingItems[productName];

            document.cookie = `badgeItems=${JSON.stringify(existingItems)}; path=/`;
        }

        updateBadgeNumber();
    }


        const existingItems = JSON.parse(getCookie('badgeItems')) || {};
        let itemCount = Object.keys(existingItems).length;
        $('.badge-number').text(itemCount);
    
        $('.product-hover-overlay .add-to-cart').click(function(e) {
            const productName = $(this).closest('.product').find('.product-name').text();
            let existingItems = JSON.parse(getCookie('badgeItems')) || {};
    
            if (!existingItems[productName]) {
                existingItems[productName] = true;
    
                document.cookie = `badgeItems=${JSON.stringify(existingItems)}; path=/`;
    
                let itemCount = Object.keys(existingItems).length;
                $('.badge-number').text(itemCount);
                
            }
        });

        function updateBadgeNumber() {
            const existingItems = JSON.parse(getCookie('badgeItems')) || {};
            let itemCount = Object.keys(existingItems).length;
            $('.badge-number').text(itemCount);
        }
    
        function getCookie(name) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
            return null;
        }
});
    
    
