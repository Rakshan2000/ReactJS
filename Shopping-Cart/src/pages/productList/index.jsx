import { useContext } from "react";
import { ShoppingContext } from "../../components/context";
import ProductTile from "../../components/productTile";

function productList(){
    const {listOfProducts, loading} = useContext(ShoppingContext);
    //console.log(listOfProducts);

    if(loading) return (
        <div className="flex items-center justify-center h-screen">
            <h3 className="text-center">Products are still loading. Please wait...</h3>
        </div>
    );

    return(
        <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto sm:px-16 lg:px-8 max-w-7xl">
                <div className="max-w-md mx-auto text-center">
                    <h1 className="text-3xl text-gray-950 sm:text-xl sm:text-gray-600 lg:text-4xl lg:text-black">Our Featured Products</h1>
                </div>
                <div className="grid grid-cols-2 gap-5 mt-10 text-[5px] lg:mt-16 lg:gap-8 lg:grid-cols-6 lg:text-[5px]">
                    {
                        listOfProducts && listOfProducts.length && listOfProducts.length >0 ?
                            listOfProducts.map(singleProductTitle => <ProductTile key={singleProductTitle.id} Product={singleProductTitle}/>) : <h1>Products Not Found</h1>
                    }
                </div>
            </div>
        </section>
    );
}

export default productList;