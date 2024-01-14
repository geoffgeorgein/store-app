const Product = ({ name, price, desc, rating, url }) => {
  return (
    <div className="p-4 m-6 max-w-40 h-42 text-left flex flex-col justify-between">
      <img src={url} className="mb-4"></img>
      <h2 className="text-gray-500">{name}</h2>

      {/* <p>{desc}</p> */}
      <h3 className="text-slate-800 font-bold">{price}</h3>
      <button className="bg-blue-700 text-white p-2 rounded-full">dd</button>
    </div>
  );
};

export default Product;
