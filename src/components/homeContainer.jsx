import { useEffect, useState } from "react";
import Product from "./product"
import axios from 'axios';


const HomeContainer = () => {

  const [data,setdata]=useState();

  useEffect(()=>{

    async function fetchData(){

        const request=await axios.get('https://fakestoreapi.com/products');
        setdata(request.data);
        console.log("req",request.data);

        return request;
    }
    fetchData();
},[])
  return (
    <div className="p-4 mt-20 flex  justify-center flex-wrap">
      {
        data.map((item)=>{

          return(<Product key={item.id} name={item.title} price={item.price} desc={item.description} rating={item.rating} url={item.image} />)
          
        })
      }
      
    </div>
  )
}

export default HomeContainer