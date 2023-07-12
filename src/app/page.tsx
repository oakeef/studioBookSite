import Navigation from "./nav";
import Footer from "./footer";
import Header from "./header";
import Description from "./description";
import Copyright from "./copyright";
import "../css/bootstrap.css";
import "../css/styles.css";

// COLOR Palette
// #222831
// #393E46
// #00ADB5
// #EEEEEE
export default function Home() {
  return (
    <main>
      <Navigation />
      <Header />
      <Description />
      <Footer />
      <Copyright />
    </main>
  );
}
