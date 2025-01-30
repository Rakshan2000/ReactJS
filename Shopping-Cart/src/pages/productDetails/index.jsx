import { useContext, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { ShoppingContext } from "../../components/context";
import { FaStar } from "react-icons/fa";

function productDetails() {
  const { id } = useParams();
  const { productDetails, setProductDetails, handleAddToCart } = useContext(ShoppingContext);
  const navigate = useNavigate();

  async function getSingleProductDetails() {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const result = await response.json();

    if (result) {
      setProductDetails(result);
    }
  }

  function handleNavigateAddToCart(productDetails){
    navigate('/cartlist');
    handleAddToCart(productDetails);
  }

  useEffect(() => {
    getSingleProductDetails();
  }, [id]);

  return (
    <>
      <div className="flex h-[100%] w-[100%] m-auto p-2 font-[Roboto]">
        {/* <!-- Left Column / Headphones Image --> */}
        <div className="w-[65%] relative">
          <img data-image="black" src={productDetails?.images[0]} alt="" className="w-[70%] absolute right-40 items-center top-0 opacity-1 transition-all hover:opacity-50" />
        </div>

        {/* <!-- Right Column --> */}
        <div className="w-[35%] mt-16">
          {/* <!-- Product Description --> */}
          <div className="border-b-[#E1E8EE] mb-6">
            <span className="text-xs #358ED7 uppercase">{productDetails?.category}</span>
            <h1 className="font-light text-5xl #43484D tracking-tighter mt-2 mb-3">{productDetails?.title}</h1>
            <p className="font-light text-xl #86939E">
              {productDetails?.description}
            </p>
          </div>

          {/* <!-- Product Configuration --> */}
          <div className="flex gap-8 mb-5">

            {/* <!-- Cable Configuration --> */}
              <div className={`${productDetails?.availabilityStatus === "In Stock"? "bg-green-400":"bg-red-400" } w-[30%] rounded-sm`}>
                <h4 className="text-white font-semibold font-sans">{productDetails?.availabilityStatus}</h4>
              </div>
                <div className="bg-yellow-300 w-[50%] rounded-sm">
                <h4 className="font-sans font-semibold">{productDetails?.warrantyInformation}</h4>
                </div>
                <div className="grid grid-flow-col gap-1 items-center">
                    <h4 className="font-sans">Rating  </h4>
                    {productDetails?.rating && 
                        [...Array(Math.round(productDetails.rating))].map((_, index) => (
                            <FaStar key={index} color="yellow" className="content-center"/>
                        ))
                    }
                </div>
              </div>

          {/* <!-- Product Pricing --> */}
          <div className="flex items-center">
            <span className="text-2xl font-light #43474D mr-5">{productDetails?.price} $</span>
            <a onClick={()=>handleNavigateAddToCart(productDetails)}className=" w-[70%] h-8 inline-block bg-[#7DC855] rounded-md text-[16px] text-white font-semibold font-sans transition-all content-center hover:bg-green-600 hover:text-white">
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default productDetails;
