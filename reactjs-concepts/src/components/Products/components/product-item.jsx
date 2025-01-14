function ProductItemButton(){
    return(
        <button> Next Item </button>
    );
}

function ProductItem({item,index}){
    //console.log(index);
    return(
        <div key={index}>
            <li>{item}</li>
            {/* <ProductItemButton/> */}
        </div>
    );
}


export default ProductItem;
