import { getAllProducts } from "@/lib/fetchData";
import CardPage from "../Card";

const PopularProductsPage = async () => {
  const products = await getAllProducts();
  return (
    <div className="container mx-auto my-10 px-2 md:px-0">
      <h2 className="text-3xl font-bold text-slate-800">Popular Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {products.slice(0, 3).map((p) => {
          return <CardPage key={p.id} product={p} />;
        })}
      </div>
    </div>
  );
};

export default PopularProductsPage;
