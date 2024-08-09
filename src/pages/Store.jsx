import React, { useState, useEffect } from "react";
import axios from "axios";

function Store() {
  const [products, setProducts] = useState([]);

  // useEffect(()=>{
  //   getProducts()
  // },[])

  // const getProducts =async ()=>{
  //   try{
  //   const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/products`)
  //   setProducts(response.data)
  //   console.log(response.data)
  //    }catch(error){
  //    console.log(error)
  //  }
  // }

  return (
    <div className="with-layout">
      {/* {products.map(e=>{
        return(
          <div key={product.id}>
            <img src={e.img} alt={product.name} />
            <p>{e.name}</p>
            <p>{e.price}</p>
          </div>
        )
      })} */}
    </div>
  );
}

export default Store;
