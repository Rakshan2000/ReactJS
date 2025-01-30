import { useContext } from "react";
import {useNavigate} from "react-router-dom"
import { ShoppingContext } from "../context";

function ProductTile({ Product }) {

const navigate =  useNavigate();
const {handleAddToCart} = useContext(ShoppingContext);

  function handleNavigatgeToProductDeatilsPage(Product){
    //console.log(Product?.title);
    navigate(`/productdetails/${Product?.id}`);
  }
  
  return (
    <>
      <div key={Product?.id} className="card" >
        <div onClick={()=>handleNavigatgeToProductDeatilsPage(Product)}>
        <div className="overflow-hidden aspect-square">
          <img
            src={Product?.images[0]}
            alt="Denim Jeans"
            className="object-cover w-full"
          />
        </div>
        <h1 className="m-2 text-black font-bold">{Product?.title}</h1>
        <p className="text-gray-600 text-xl">${Product?.price}</p>
        <p className="hover:text-[10px] hover:transition-opacity hover:duration-300 hover:delay-350">
          {Product?.description}
        </p>
        </div>
        <button onClick={()=>{handleAddToCart(Product)}}className="bg-black border-spacing-1 text-white h-6 w-[100%] rounded-sm mt-2 text-[8px] hover:opacity-70">
          Add to Cart
        </button>
      </div>
    </>
  );
}
export default ProductTile;
