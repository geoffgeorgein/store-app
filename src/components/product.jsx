const Product = ({ name, price, desc, rating, url }) => {
  return (
    <div className="p-4 m-6 max-w-40 h-42">
      <img src={url} className="mb-4"></img>
      <h2>{name}</h2>

      {/* <p>{desc}</p> */}
      <h3>{price}</h3>
    </div>
  );
};

export default Product;
