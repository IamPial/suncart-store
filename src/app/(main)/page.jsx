import Banner from "@/components/shared/homepage/Banner";
import PopularProductsPage from "@/components/shared/homepage/popularProducts";
import SummerCarePage from "@/components/shared/homepage/Summer";

export default function Home() {
  return (
    <div>
      <Banner />
      <PopularProductsPage />
      <SummerCarePage />
    </div>
  );
}
