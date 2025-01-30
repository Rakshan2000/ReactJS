import { useContext } from "react";
import CartItemTile from "../../components/cartItemTile";
import { ShoppingContext } from "../../components/context";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function cartList() {

  const navigate = useNavigate();
  const { cartProducts} = useContext(ShoppingContext);
  const [subtotal, setSubTotal] = useState();
  const [tax, setTax] = useState();
  const [total, setTotal] = useState();

  function SubTotal() {
    let total = 0;
    let taxAmount = 0;
    cartProducts.forEach((cartItem) => (total += cartItem?.totalPrice || 0));
    setSubTotal(total.toFixed(2));
    taxAmount = (total * 18) / 100;
    setTax(taxAmount.toFixed(2));
    setTotal((total + taxAmount).toFixed(2));
  }

  useEffect(() => {
    SubTotal();
  }, [cartProducts]);
  return (
    <>
      <h1 className="text-2xl mb-5 ">Shopping Cart</h1>
      <div className="flex justify-between max-sm:flex-col">
        <div className="flex-1 w-[70%]">
          {cartProducts.length > 0 ? cartProducts.map((cartItems) => (
            <CartItemTile key={cartItems?.id} ProductDetails={cartItems} />
          )): <h2 className="lg:mt-28 lg:text-xl lg: font-medium">Cart is Empty</h2>}
        </div>
        <div className="w-[30%] flex">
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-100 rounded-sm p-4 h-max w-max">
              <h3 className="text-xl font-extrabold text-gray-950">
                Order Summary
              </h3>
              <ul className="text-gray-700 mt-4 space-y-2">
                <p className="flex flex-wrap gap-4 text-sm font-bold">
                  SubTotal : <span>$ {subtotal}</span>
                </p>
                <p className="flex flex-wrap gap-4 text-sm font-bold">
                  Tax : <span>$ {tax}</span>
                </p>
                <p className="flex flex-wrap gap-4 text-sm font-bold">
                  Total : <span>$ {total}</span>
                </p>
              </ul>
              <div className="mt-5 flex gap-2">
                <button className="text-sm px-4 py-3 bg-black text-white rounded hover:bg-gray-700">
                  Checkout
                </button>
                <button
                  onClick={() => navigate("/products")}
                  className="text-sm px-4 py-3 bg-black text-white rounded hover:bg-gray-700"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default cartList;
