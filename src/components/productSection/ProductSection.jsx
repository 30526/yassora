import React, { useEffect, useState } from "react";
import useAxios from "../../context/useAxios";
import { motion } from "motion/react";
import FadeUp from "../motion/FadeUp";

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
    <div>
      <div className="text-center my-20">
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
    </div>
  );
};

export default ProductSection;
