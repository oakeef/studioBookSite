import Image, { StaticImageData } from "next/image";
import description1 from "../../public/description-1.png";
import description2 from "../../public/description-2.png";
import description3 from "../../public/description-3.png";

export default function Description() {
  const cards: CardProps[] = [
    {
      title: "Lists Builder",
      image: description1,
      description:
        "Its very easy to start creating email lists for your marketing actions. Just create your Tivo account",
    },
    {
      title: "Campaign Tracker",
      image: description2,
      description:
        "Campaigns is a feature we've developed since the beginning because it's at the core of Tivo's functionalities",
    },
    {
      title: "Analytics Tool",
      image: description3,
      description:
        "Tivo collects customer data in order to help you analyse different situations and take required action",
    },
  ];

  return (
    <div className="cards-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="above-heading">DESCRIPTION</div>
            <h2 className="h2-heading">
              Marketing Automation Will Bring More Qualified Leads
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            {cards.map((card) => {
              return (
                <Card
                  key={card.title}
                  title={card.title}
                  image={card.image}
                  description={card.description}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

type CardProps = {
  title: string;
  image: StaticImageData;
  description: string;
};

function Card(props: CardProps) {
  const { title, image, description } = props;
  return (
    <div className="card">
      <div className="card-image">
        <Image className="img-fluid" src={image} alt="alternative" />
      </div>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}
