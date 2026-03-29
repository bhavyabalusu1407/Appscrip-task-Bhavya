"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ClientProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  if (products.length === 0) {
    return <p>Loading products...</p>;
  }

  return products.map((item) => (
    <ProductCard
      key={item.id}
      title={item.title}
      price={item.price}
      image={item.image}
    />
  ));
}