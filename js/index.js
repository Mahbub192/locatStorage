const shoppingItemList = document.getElementById("shoppingItemList");

const addItem = () => {
  const productName = document.getElementById("productName");
  const productQuantity = document.getElementById("productQuantity");
  const name = productName.value;
  const quantity = productQuantity.value;
  productName.value = "";
  productQuantity.value = "";
  console.log(name, quantity);
  displayShoppingItem(name, quantity);
  saveProductToLocalStorage(name, quantity)
};

const displayShoppingItem = (name, quantity) => {
  const li = document.createElement("li");
  li.innerHTML = `${name} ${quantity}`;
  console.log(li);
  shoppingItemList.appendChild(li);
};

const getStoredShoppingCart = () => {
  const storedCart = localStorage.getItem("cart");
  let cart = {};
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

const saveProductToLocalStorage = (name, quantity) => {
 const cart = getStoredShoppingCart();
 cart[name] =quantity;
 const cartStringified = JSON.stringify(cart);

 localStorage.setItem('cart', cartStringified);
}

const displayProductFromLocalStorage = () =>{
    const saveCart = getStoredShoppingCart();
    console.log(saveCart);
    for(const name in saveCart){
        const quantity = saveCart[name];
        console.log(name, quantity);
        displayShoppingItem(name, quantity)
    }
} 

displayProductFromLocalStorage()
