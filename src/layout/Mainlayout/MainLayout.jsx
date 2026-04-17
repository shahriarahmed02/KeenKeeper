import { Outlet } from "react-router-dom";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";

const MainLayout = () => {
  return (
    
    <div className="font-sans flex flex-col min-h-screen">
      
    
      <Navbar />

     
      <main className="flex-grow bg-slate-50">
        <Outlet />
      </main>

     
      <Footer />
      
    </div>
  );
};

export default MainLayout;