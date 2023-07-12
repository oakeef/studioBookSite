import { BsFillRecord2Fill } from "react-icons/bs";
export default function Footer() {
  return (
    <div>
      <svg
        className="footer-frame"
        data-name="Layer 2"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1920 79"
      >
        <defs>
          <style>{`.cls-2{fill:#393E46;}`}</style>
        </defs>
        <title>footer-frame</title>
        <path
          className="cls-2"
          d="M0,72.427C143,12.138,255.5,4.577,328.644,7.943c147.721,6.8,183.881,60.242,320.83,53.737,143-6.793,167.826-68.128,293-60.9,109.095,6.3,115.68,54.364,225.251,57.319,113.58,3.064,138.8-47.711,251.189-41.8,104.012,5.474,109.713,50.4,197.369,46.572,89.549-3.91,124.375-52.563,227.622-50.155A338.646,338.646,0,0,1,1920,23.467V79.75H0V72.427Z"
          transform="translate(0 -0.188)"
        />
      </svg>
      <div className="footer">
        <div className="container">
          <div className="row">
            <FooterSection
              title=" Impress with Professionalism"
              content="We're passionate about designing and developing one of the best
        booking apps on the market"
            />
            <FooterSection
              title="App currently in development"
              content="Studio Book is currently in beta testing and will be available to the public soon"
            />
            <FooterSection
              title="Contact Information"
              content=""
              contact={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

type FooterSectionProps = {
  title: string;
  content: string;
  list?: string[];
  contact?: boolean;
};

function FooterSection({ title, content, list, contact }: FooterSectionProps) {
  let section = (
    <>
      <p className="p-small">{content}</p>
    </>
  );
  if (list) {
    section = (
      <ul className="list-unstyled li-space-lg p-small">
        {list.map((item) => {
          return (
            <li key={item} className="media">
              <BsFillRecord2Fill />
              <div className="media-body">{item}</div>
            </li>
          );
        })}
      </ul>
    );
  } else if (contact) {
    section = (
      <ul className="list-unstyled li-space-lg p-small">
        <li className="media">
          <i className="fas fa-map-marker-alt"></i>
          <div className="media-body">Halifax, NS</div>
        </li>
        <li className="media">
          <i className="fas fa-envelope"></i>
          <div className="media-body">
            {/* <a className="white" href="mailto:contact@tivo.com">
              contact@tivo.com
            </a> */}
            <i className="fas fa-globe"></i>
            <a className="white" href="#your-link">
              www.studiobook.app
            </a>
          </div>
        </li>
      </ul>
    );
  }

  return (
    <div className="col-md-4">
      <div className="footer-col">
        <h4>{title}</h4>
        {section}
      </div>
    </div>
  );
}
