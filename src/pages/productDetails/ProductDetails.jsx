import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAxios from "../../context/useAxios";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const axios = useAxios();
  useEffect(() => {
    axios
      .get(`/product/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id, axios]);
  return <div className="min-h-screen">

  </div>;
};

export default ProductDetails;
