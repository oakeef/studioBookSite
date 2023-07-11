import Image from "next/image";
import lightbox from "../../public/details-lightbox.png";

export default function Lightboxes() {
  const boxes: LightboxProps[] = [
    {
      number: 1,
      title: "List Building",
      content:
        "It's very easy to start using Tivo. You just need to fill out and submit the Sign Up Form and you will receive access to the app.",
      list: ["thing1", "thing2", "thing3"],
    },
    {
      number: 2,
      title: "Campaign Monitoring",
      content:
        "It's very easy to start using Tivo. You just need to fill out and submit the Sign Up Form and you will receive access to the app.",
      list: ["thing1", "thing2", "thing3"],
    },
    {
      number: 3,
      title: "Analytics Tools",
      content:
        "It's very easy to start using Tivo. You just need to fill out and submit the Sign Up Form and you will receive access to the app.",
      list: ["thing1", "thing2", "thing3"],
    },
  ];
  return (
    <>
      {boxes.map((box) => {
        return (
          <Lightbox
            key={box.number}
            title={box.title}
            content={box.content}
            list={box.list}
            number={box.number}
          />
        );
      })}
    </>
  );
}

type LightboxProps = {
  title: string;
  content: string;
  list: string[];
  number: number;
};
export function Lightbox({ title, content, list, number }: LightboxProps) {
  return (
    <div
      id={`details-lightbox-${number}`}
      className="lightbox-basic zoom-anim-dialog mfp-hide"
    >
      <div className="container">
        <div className="row">
          <button
            title="Close (Esc)"
            type="button"
            className="mfp-close x-button"
          >
            ×
          </button>
          <div className="col-lg-8">
            <div className="image-container">
              <Image className="img-fluid" src={lightbox} alt="alternative" />
            </div>
          </div>
          <div className="col-lg-4">
            <h3>{title}</h3>
            <hr />
            <h5>Core service</h5>
            <p>{content}</p>
            <ul className="list-unstyled li-space-lg">
              {list.map((item) => {
                return (
                  <li className="media" key={item}>
                    <i className="fas fa-square"></i>
                    <div className="media-body">{item}</div>
                  </li>
                );
              })}
            </ul>
            <a className="btn-solid-reg mfp-close" href="sign-up.html">
              SIGN UP
            </a>
            <a
              className="btn-outline-reg mfp-close as-button"
              href="#screenshots"
            >
              BACK
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
