import React, { useEffect, useState } from "react";
import useAxios from "../../context/useAxios";
import FadeUp from "../motion/FadeUp";
import ProductCard from "../productCard/ProductCard";

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  const axios = useAxios();
  useEffect(() => {
    axios
      .get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, [axios]);

  return (
    <div className="my-20 container mx-auto">
      <div className="text-center">
        <FadeUp>
          <h2 className="text-6xl">Our Fragrances</h2>
        </FadeUp>
        <FadeUp>
          <p className="mt-6">
            Discover our wide range of fragrances designed to meet your needs.
          </p>
        </FadeUp>
        <FadeUp>
          <span className="block w-24 h-1 bg-amber-500 mx-auto mt-4"></span>
        </FadeUp>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-20">
        {products.map((product) => (
          <FadeUp key={product._id}>
            <ProductCard product={product} />
          </FadeUp>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
