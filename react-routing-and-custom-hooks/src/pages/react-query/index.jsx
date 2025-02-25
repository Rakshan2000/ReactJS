import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchListOfProducts, addNewProduct } from "./api";
import { useState } from "react";

function ReactQuery() {
    const [productTitle, setProductTitle] = useState("");
    const getQueryClient = useQueryClient();

    const {data, isLoading} = useQuery({
        queryKey : ['productList'],
        queryFn: ()=> fetchListOfProducts(),
    })

    const {mutateAsync: handleAddNewProductMutaition} = useMutation({
        mutationFn: addNewProduct,
        onSuccess: ()=>{
            getQueryClient.invalidateQueries(["productList"]);
        }

    })

   async function handleAddNewProduct(){
    await handleAddNewProductMutaition(productTitle),
    setProductTitle("");
    }

    if(isLoading) return <h1>Please wait, data is Loading</h1> 

    return(<>
        <div>React query Example</div>
        <input
        name="name"
        value={productTitle}
        onChange={(event)=> setProductTitle(event.target.value)}
        placeholder="Enter Product title"
        />
        <button onClick={handleAddNewProduct} disabled={productTitle.trim() === ""}>Submit</button>
        <ul>
            {
                data?.length>0 ? data.map(item => <li key={item.id}>{item.title}</li>): <h1>Data is Not Available</h1>
            }
        </ul>
    </>);
}

export default ReactQuery;