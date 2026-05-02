import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const MainLayoutPage = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayoutPage;
