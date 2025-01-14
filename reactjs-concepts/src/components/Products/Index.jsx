import ProductItem from "./components/product-item";
import { useEffect, useState } from "react";

function ProductList({ name, city, dummyProductData }) {
  //console.log(props);
  //const {name,city} = props;
  const [flag, setFlag] = useState(false);
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('blue');

  //Function Method - 1
  // function rendorTextBlock(getFlag){
  //     return getFlag ? <h4>Customer Name is {name} and he/she belongs to {city}</h4>
  //     : <h4>Hello World</h4>;
  // }

  const rendorTextBlock = flag ? (
    <h4>
      Name is {name}, he/she is belong to this city {city}
    </h4>
  ) : (
    <h4>Hello World</h4>
  );

  function ToggleFlag() {
    setFlag(!flag);
  }

  useEffect(() => {
    setFlag(!flag);
    console.log("run only once page load");

    return () => {
      console.log('componennt is unmounted -> some side effects / prevent data leak by assigning null to a value');
    }
  }, []);
  //This will only run onn page load once
  // Replacement of componentDidMount

  function IncreaseCount(){
    setCount(count+1);
  }

  useEffect(()=>{
    if(count === 10){
        setColor('red');
    }
  },[count]);

  return (
    <div>
      <h3>ECommerse Projects</h3>

      <button onClick={/*()=>setFlag(!flag)*/ ToggleFlag}>
        {" "}
        Show User Details
      </button>

      <button style={{color : color}}onClick={IncreaseCount}>Increase Count</button>
      <h4>Count : {count}</h4>
      {/* Return Method - 1 {flag ? (
        <h4>
          Name is {name}, he/she is belong to this city {city}
        </h4>
      ) : (
        <h4>Hello World</h4>
      )} */}
      {/* Function Method - 1 {rendorTextBlock(flag)} */}
      {rendorTextBlock}
      <ul>
        {dummyProductData.map((item, index) => (
          <ProductItem item={item} index={index} />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
