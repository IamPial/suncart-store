import Banner from "@/components/shared/homepage/Banner";
import PopularProductsPage from "@/components/shared/homepage/popularProducts";
import SummerCarePage from "@/components/shared/homepage/Summer";
import TopBrandPage from "@/components/shared/homepage/TopBrand";

export default function Home() {
  return (
    <div>
      <Banner />
      <PopularProductsPage />
      <SummerCarePage />
      <TopBrandPage />
    </div>
  );
}
