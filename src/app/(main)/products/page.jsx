import CardPage from "@/components/shared/Card";
import { getAllProducts } from "@/lib/fetchData";

const ProductsPage = async () => {
  const allProducts = await getAllProducts();
  return (
    <div className="container mx-auto my-10 px-2 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {allProducts.map((product) => {
          return <CardPage key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default ProductsPage;
