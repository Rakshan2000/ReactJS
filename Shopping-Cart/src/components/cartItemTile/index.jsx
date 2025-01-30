import { IoTrashBinOutline } from "react-icons/io5";
import { CiHeart, CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { useState } from "react";
import { useContext} from "react";
import { ShoppingContext } from "../context";

function cartItemTile({ ProductDetails }) {
  

  const { cartProducts, setCartProducts, deleteItem } = useContext(ShoppingContext);
  const [toggle, setToggle] = useState(false);
  const [count, setCount] = useState(ProductDetails.quantity);
  const [TotalPrice, setTotalPrice] = useState(ProductDetails.totalPrice);

  console.log(count);

  function ItemAddorSubtract(func) {
    console.log(func);

    if (func === "Add") {
      console.log(ProductDetails.quantity, count);

      const updatedProductDetails = {
        ...ProductDetails,
        quantity: (ProductDetails?.quantity || 0) + 1,
        totalPrice:
          (ProductDetails?.totalPrice || 0) + (ProductDetails?.price || 0),
      };

      setCartProducts((prevCartProducts) => {
        return prevCartProducts.map((item) =>
          item.id === ProductDetails.id ? updatedProductDetails : item
        );
      });

      setCount(updatedProductDetails.quantity);
      setTotalPrice(updatedProductDetails.totalPrice);
    } else {
      console.log(ProductDetails.quantity, count);

      const updatedProductDetails = {
        ...ProductDetails,
        quantity:
          ProductDetails?.quantity <= 0
            ? 0
            : (ProductDetails?.quantity || 0) - 1,
        totalPrice:
          ProductDetails?.quantity <= 0
            ? 0
            : (
                (ProductDetails?.totalPrice || 0) - (ProductDetails?.price || 0)
              ).toFixed(2),
      };

      setCartProducts((prevCartProducts) => {
        return prevCartProducts.map((item) =>
          item.id === ProductDetails.id ? updatedProductDetails : item
        );
      });

      setCount(updatedProductDetails.quantity);
      setTotalPrice(updatedProductDetails.totalPrice);
    }
  }

  return (
    <>
      <div className="w-full mb-3 bg-[#FFFFFF] rounded-md flex flex-col">
        {/* <!-- Product #1 --> */}
        <div className="h-28 flex space-x-20">
          <div className="relative pt-7 content-center">
            <span
              onClick={() => setToggle(!toggle)}
              className="inline-block cursor-pointer absolute top-2 w-14 h-14 text-2xl bg-no-repeat"
            >
              <CiHeart color={toggle ? "red" : "black"} />
            </span>
            <span
              onClick={()=> deleteItem(ProductDetails)}
              className="inline-block cursor-pointer w-5 h-5 text-2xl mt-2"
            >
              <IoTrashBinOutline />
            </span>
          </div>

          <div>
            <img
              className="w-full h-full object-cover"
              src={ProductDetails?.images[0]}
              alt=""
            />
          </div>

          <div className="pt-3 w-28 flex flex-col items-center">
            <span className="mb-1 whitespace-nowrap">
              {ProductDetails?.title}
            </span>
            <span>{ProductDetails?.brand}</span>
            <span>{ProductDetails?.category}</span>
          </div>

          <div>
            <button
              onClick={() => ItemAddorSubtract("Add")}
              className="mt-1 p-2 text-2xl"
              type="button"
              name="AddItem"
            >
              <CiSquarePlus />
            </button>
            <h5>{ProductDetails.quantity}</h5>
            <button
              onClick={() => ItemAddorSubtract("Sub")}
              className="mb-1 text-2xl"
              type="button"
              name="DeleteItem"
            >
              <CiSquareMinus />
            </button>
          </div>

          <div className="w-20 pt-7 text-center size-4 text-[#43484D] font-light flex items-center">
            <h5 className="mr-1">$</h5>
            {TotalPrice}
          </div>
        </div>
      </div>
    </>
  );
}

export default cartItemTile;
