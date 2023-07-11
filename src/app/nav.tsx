import Image from "next/image";
import logo from "../../public/logo.svg";
export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
      <div className="container">
        {/* <!-- Text Logo - Use this if you don't have a graphic logo -->
            <!-- <a className="navbar-brand logo-text page-scroll" href="index.html">Tivo</a> --> */}

        <a className="navbar-brand logo-image" href="index.html">
          <Image src={logo} alt="alternative" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-awesome fas fa-bars"></span>
          <span className="navbar-toggler-awesome fas fa-times"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#header">
                HOME <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#features">
                FEATURES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#details">
                DETAILS
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle page-scroll"
                href="#video"
                id="navbarDropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                VIDEO
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="article-details.html">
                  <span className="item-text">ARTICLE DETAILS</span>
                </a>
                <div className="dropdown-items-divide-hr"></div>
                <a className="dropdown-item" href="terms-conditions.html">
                  <span className="item-text">TERMS CONDITIONS</span>
                </a>
                <div className="dropdown-items-divide-hr"></div>
                <a className="dropdown-item" href="privacy-policy.html">
                  <span className="item-text">PRIVACY POLICY</span>
                </a>
              </div>
            </li>

            <li className="nav-item">
              <a className="nav-link page-scroll" href="#pricing">
                PRICING
              </a>
            </li>
          </ul>
          <span className="nav-item">
            <a className="btn-outline-sm" href="log-in.html">
              LOG IN
            </a>
          </span>
        </div>
      </div>
    </nav>
  );
}
