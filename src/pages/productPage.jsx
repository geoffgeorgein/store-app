import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
  return (
    <div className="product mt-10 p-8 flex flex-col items-center justify-center flex-wrap max-w-[500px] mx-auto">
      {data && (
        <>
          <h2 className="font-semibold text-3xl">{data[id - 1]?.title}</h2>
          <img src={data[id - 1]?.image} className="max-w-[250px] p-4 mt-4 mb-4"></img>
          <p>{data[id - 1]?.description}</p>
          <h4 className="price text-slate-600 font-semibold">Price : ₹ {data[id - 1]?.price}</h4>
        </>
      )}
    </div>
  );
};

export default ProductPage;
