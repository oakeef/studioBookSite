import Image from "next/image";
import Navigation from "./nav";
import Footer from "./footer";
import Header from "./header";
import Customers from "./customers";
import Description from "./description";
import Features from "./features";
import Details from "./details";
import Lightboxes from "./lightboxes";
import Copyright from "./copyright";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Header />

      <Customers />
      <Description />
      <Features />
      <Lightboxes />
      <Details />

      <Footer />
      <Copyright />
    </main>
  );
}
