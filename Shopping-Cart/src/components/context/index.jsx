import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

export const ShoppingContext = createContext(null);

function ShoppingContextState({ children }) {
  const [loading, setLoading] = useState(true);
  const [listOfProducts, SetListOfProducts] = useState([]);
  const [productDetails, setProductDetails] = useState(null);
  const [cartProducts, setCartProducts] = useState([]);

  async function fetchListofProducts() {

    const apiResponse = await fetch("https://dummyjson.com/products");
    const result = await apiResponse.json();

    //console.log(result);

    if (result && result?.products) {
      SetListOfProducts(result?.products);
      setLoading(false);
    }
  }

  function handleAddToCart(getProductDetails) {
    // setCartProducts(getProductDetails);
    // console.log(getProductDetails);
    // console.log("back in context");

    let cpyExistingCartItems = [...cartProducts];
    const findIndexOfCurrentItems = cpyExistingCartItems.findIndex(
      (cartItem) => cartItem.id === getProductDetails.id
    );

    console.log(findIndexOfCurrentItems);

    if(findIndexOfCurrentItems === -1){
      cpyExistingCartItems.push({
        ...getProductDetails,
        quantity : 1,
        totalPrice: getProductDetails?.price
      }
      )
    } else{
      const existingItem = cpyExistingCartItems[findIndexOfCurrentItems]

      cpyExistingCartItems[findIndexOfCurrentItems] = {
        ...existingItem,
        quantity : existingItem.quantity + 1,
        totalPrice: existingItem.totalPrice + getProductDetails?.price,
      };
    }

    setCartProducts(cpyExistingCartItems);
    localStorage.setItem("cartItems", JSON.stringify(cpyExistingCartItems));
  }

  function deleteItem(getProductDetails){

    let cpyExistingCartItems = [...cartProducts];
    const findIndexOfCurrentItems = cpyExistingCartItems.findIndex(
      (cartItem) => cartItem.id === getProductDetails.id
    );

    cpyExistingCartItems.splice(findIndexOfCurrentItems, 1);
    
    setCartProducts(cpyExistingCartItems);
    localStorage.setItem("cartItems", JSON.stringify(cpyExistingCartItems));

  }

  useEffect(() => {
    fetchListofProducts();
  }, []);

  console.log(cartProducts);

  return (
    <ShoppingContext.Provider
      value={{
        listOfProducts,
        loading,
        setLoading,
        productDetails,
        setProductDetails,
        cartProducts,
        setCartProducts,
        handleAddToCart,
        deleteItem
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
}

export default ShoppingContextState;
