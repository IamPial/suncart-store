import { getAllProducts } from "@/lib/fetchData";

const ProductsPage = async () => {
  const allData = await getAllProducts();
  console.log(allData);
  return (
    <div>
      <h2>This is product page</h2>
    </div>
  );
};

export default ProductsPage;
