import Footer from "./SharedComp/Footer";
import Header from "./SharedComp/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
