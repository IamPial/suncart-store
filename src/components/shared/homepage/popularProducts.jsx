import { getAllProducts } from "@/lib/fetchData";

import React from "react";
import CardPage from "../Card";

const PopularProductsPage = async () => {
  const products = await getAllProducts();
  console.log(products);
  return (
    <div className="container mx-auto my-10">
      <h2 className="text-3xl font-bold text-slate-800">Popular Products</h2>
      <div className="grid grid-cols-3 gap-5 mt-5">
        {products.slice(0, 3).map((p) => {
          return <CardPage key={p.id} product={p} />;
        })}
      </div>
    </div>
  );
};

export default PopularProductsPage;
