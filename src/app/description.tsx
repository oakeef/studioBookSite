import Image, { StaticImageData } from "next/image";
import description1 from "../../public/description-1.png";
import description2 from "../../public/description-2.png";
import description3 from "../../public/description-3.png";

export default function Description() {
  const cards: CardProps[] = [
    {
      title: "Seamless Self-Scheduling",
      image: description1,
      description:
        "Empower your clients with the ability to effortlessly schedule appointments through our user-friendly interface. With just a few taps, they can view your availability, choose a suitable time slot, and book their appointment.",
    },
    {
      title: "Streamline Your Schedule",
      image: description2,
      description:
        "Effortlessly manage your appointments and take control of your valuable time. Our intuitive interface and advanced scheduling tools empower you to organize, reschedule, and cancel appointments with ease. ",
    },
    {
      title: "Time Efficiency Redefined",
      image: description3,
      description:
        "No more wasted hours going back and forth to find a mutually suitable time. Studio Book streamlines the appointment scheduling process, allowing clients to book their preferred slots instantly.",
    },
  ];

  return (
    <div className="cards-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="above-heading">Studio Book</div>
            <h2 className="h2-heading">
              Empowering Clients, Liberating Professionals
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
