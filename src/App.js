import Banner from "./Components/Banner";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";
import FooterNav from "./Components/FooterNav";
import GoogleMap from "./Components/GoogleMap";
import Header from "./Components/Header";
import Join from "./Components/Join";
import LearnMore from "./Components/LearnMore";
import Navbar from "./Components/Navbar";
import Partnar from "./Components/Partnar";
import Service from "./Components/Service";
import Supplier from "./Components/Supplier";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <Supplier />
      <Service />
      <LearnMore />
      <Partnar />
      <Blog />
      <GoogleMap />
      <Join />
      <FooterNav />
      <Footer />
    </>
  );
}

export default App;
