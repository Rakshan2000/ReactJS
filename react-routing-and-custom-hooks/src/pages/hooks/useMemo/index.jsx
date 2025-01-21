import {useMemo, useState} from "react";
import useFetch from "../../../hooks/use-fetch";


function useMemoExample() {
    const[flag, setFlag] = useState(false);
  const { data, loading } = useFetch("https://dummyjson.com/products");
  console.log(data);

  function filterProductsByPrice(getProducts) {
    console.log("First Run")
    return getProducts?.length > 0
      ? getProducts.filter((singleProductItem) => singleProductItem.price > 10)
      : [];
  }

  const memorizedVersion = useMemo(()=> filterProductsByPrice(data?.products),[data?.products]);
  return (
    <>
      <h1 style={{color : flag ? 'Red' : 'blue'}}>Use Memo</h1>
      <button onClick={()=>{setFlag(!flag)}}>Toggle</button>
      <ul>
        {memorizedVersion.map(item => 
          <li key={item.id}>{item.title}</li>
        )}
      </ul>
    </>
  );
}

export default useMemoExample;
