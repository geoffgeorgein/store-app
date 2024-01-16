import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CartContext from "../cartContext";

const ProductPage = () => {
  const [data, setdata] = useState();
  const { id } = useParams();
  console.log("id", id);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("https://fakestoreapi.com/products");
      setdata(request.data);
      console.log("req", request.data);

      return request;
    }
    fetchData();
  }, []);

  const cartctx=useContext(CartContext);

  // const price=data[id - 1]?.price;

  const CartItemAddHandler=()=>{
    console.log("hi2")
    cartctx.addItem({id:id,name:data[id - 1]?.title,price:data[id - 1]?.price,amount:1});
    console.log("crtx",cartctx)
}
  return (
    <div className="product mt-10 p-8 flex flex-col items-center justify-center flex-wrap max-w-[500px] mx-auto">
      {data && (
        <>
          <h2 className="font-semibold text-3xl">{data[id - 1]?.title}</h2>
          <img src={data[id - 1]?.image} className="max-w-[240px] p-4 mt-4 mb-4"></img>
          <p>{data[id - 1]?.description}</p>
          <h4 className="price text-slate-600 font-semibold">Price : ₹ {data[id - 1]?.price}</h4>
          <button className="bg-blue-700 text-white p-2 rounded-full px-10 mt-2" onClick={CartItemAddHandler}>Add</button>
        </>
      )}
    </div>
  );
};

export default ProductPage;
