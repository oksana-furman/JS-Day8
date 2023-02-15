let products = [{
    name: "Pink Tulips",
    image: "tulips-9.jpg",
    price: 5,
    qtty: 1
}, {
    name: "Yellow Tulips",
    image: "tulips-5.jpg",
    price: 5,
    qtty: 1
}, {
    name: "Peonies",
    image: "peonies.jpg",
    price: 6,
    qtty: 1
}, {
    name: "Lilacs",
    image: "lilacs.jpg",
    price: 7,
    qtty: 1
}, {
    name: "Red Tulips",
    image: "tulips-2.jpg",
    price: 5,
    qtty: 1
}, {
    name: "Lilac Tulips",
    image: "tulips-1.jpg",
    price: 5,
    qtty: 1
}, {
    name: "White Tulips",
    image: "tulips-3.jpg",
    price: 5,
    qtty: 1
}, {
    name: "Gerberas Bouquet",
    image: "bouquet-6.jpg",
    price: 30,
    qtty: 1
}, {
    name: "Sunflower Bouquet",
    image: "bouquet-2.jpg",
    price: 45,
    qtty: 1
}, {
    name: "Autumn Bouquet",
    image: "bouquet-3.jpg",
    price: 50,
    qtty: 1
}, {
    name: "Asters Bouquet",
    image: "bouquet-4.jpg",
    price: 30,
    qtty: 1
}, {
    name: "Gerberas and Roses Bouquet",
    image: "bouquet-5.jpg",
    price: 55,
    qtty: 1
}];

let productsRows = document.getElementById("products");
for (let val of products) {
    productsRows.innerHTML += `
<div class="card m-3 allCards" style="width: 18rem; height: 25rem">
  <img src="img/${val.image}" class="card-img-top mt-2 mb-3" style="width: 100%; height: 50%" alt="${val.name}">
  <div class="card-body text-center">
    <h5 class="card-title">${val.name}</h5>
    <p class="card-text">${val.price} €</p>
    <button class="btn btn-danger addBtn">Add to cart</button>
  </div>
</div>
`
}

let cart = [];

let addBtns = document.getElementsByClassName("addBtn");
for (let i = 0; i < addBtns.length; i++) {
    addBtns[i].addEventListener("click", function() {
        addToCart(products[i]);
        total();

    });
}



function addToCart(obj) {
    if (cart.find(function(val) { return val.name == obj.name })) {
        obj.qtty++;
    } else {
        cart.push(obj);
    }
    createCart();

}

function createCart() {
    document.getElementById("cart").innerHTML = "";
    for (let val of cart) {
        document.getElementById("cart").innerHTML += `
        <div class="cart-row row gx-0">
    <div class="cart-item col-6 ps-md-5 my-2 d-flex align-items-center justify-content-start">
                        <img class="cart-item-image" src="img/${val.image}" width="100" height="100" alt="${val.name}">
                        <div class="cart-item-title h5 ms-2">${val.name}</div>
                    </div>
                    <div class="cart-qtty-action col-2 d-flex justify-content-center align-items-center">
                        <div class="d-flex">
                            <i class="plus fs-5 bi bi-plus-circle-fill"></i>
                        </div>
                        <div class="text-center m-0 cart-quantity h4 w-25">${val.qtty}</div>
                        <div class="d-flex">
                            <i class="minus fs-5 bi bi-dash-circle-fill"></i>
                        </div>
                    </div>
                    <div class="col-1 d-flex justify-content-start align-items-center">
                    <i class="delete fs-4 bi bi-trash3-fill text-danger"></i>
                    </div>
                    <div class="cart-price col-3 h5 my-auto text-end p-2 pe-sm-5">${val.price} €</div>
                    <hr>
                    
                </div>                    
                </div>
        `
    }
    let plusBtns = document.getElementsByClassName("plus");
    let minusBtns = document.getElementsByClassName("minus");
    let deleteBtns = document.getElementsByClassName("delete");

    for (let i = 0; i < plusBtns.length; i++) {
        plusBtns[i].addEventListener("click", function() {
            cart[i].qtty++;
            document.getElementsByClassName("cart-quantity")[i].innerHTML = cart[i].qtty;
            total();
        });

        minusBtns[i].addEventListener("click", function() {
            if (cart[i].qtty == 1) {
                cart.splice(i, 1);
                createCart();
                total();
            } else {
                cart[i].qtty--;
                document.getElementsByClassName("cart-quantity")[i].innerHTML = cart[i].qtty;
                total();
            }
        });

        deleteBtns[i].addEventListener("click", function() {
            cart[i].qtty = 1;
            cart.splice(i, 1);
            createCart();
            total();
        });
    }
}

function total() {
    let total = 0;
    for (let val of cart) {
        total = total + (val.price * val.qtty);
    }
    // console.log(total);
    document.getElementById("total").innerHTML = `Total: ${total} €`

}
// document.getElementById("cartIcon").addEventListener("click", function() {

// })