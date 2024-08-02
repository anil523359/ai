import Footer from "../Footer";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import ScrollToTop from '../../../scroll';

const LandingLayout = () => {
  return (
    <div className="w-full bg-[#050505]">
      <Header />
      <div className="mt-[100px]">
        <ScrollToTop />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default LandingLayout;
