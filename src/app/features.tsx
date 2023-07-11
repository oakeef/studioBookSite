import Image, { StaticImageData } from "next/image";
import features1 from "../../public/features-1.png";
import features2 from "../../public/features-2.png";
import features3 from "../../public/features-3.png";

export default function Features() {
  const tabs: FeatureTabProps[] = [
    {
      number: 1,
      tabTitle: "List Builder",
      image: features1,
      title: "List Building Is Easier Than Ever",
      content: `It's very easy to start using Tivo. You just need to fill out and submit the <a className="blue page-scroll" href="sign-up.html">Sign Up Form</a> and you will receive access to the app and all of its features in no more than 24h.`,
      list: [
        "Create and embed on websites newsletter sign up forms",
        "Manage forms and landing pages for your services",
        "Add and remove subscribers using the control panel",
      ],
    },
    {
      number: 2,
      tabTitle: "Campaigns",
      image: features2,
      title: "Campaigns Monitoring Tools",
      content: `Campaigns monitoring is a feature we've developed since the beginning because it's at the core of Tivo and basically to any marketing activity focused on results.`,
      list: [
        "Easily plan campaigns and schedule their starting date",
        "Start campaigns and follow their evolution closely",
        "Evaluate campaign results and optimize future actions",
      ],
    },
    {
      number: 3,
      tabTitle: "Analytics",
      image: features3,
      title: "Analytics Control Panel",
      content: `Analytics control  panel is important for every marketing team so it's beed implemented from the begging and designed to produce reports based on very little input information.`,
      list: [
        "If you set it up correctly you will get acces to great intel",
        "Easy to integrate in your websites and landing pages",
        "The generated reports are important for your strategy",
      ],
    },
  ];
  return (
    <div id="features" className="tabs">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="above-heading">FEATURES</div>
            <h2 className="h2-heading">Marketing Automation</h2>
            <p className="p-heading">
              Take your business strategy to the next level and automatize your
              marketing tasks to save time for product development. Tivo can
              provide results in less than 2 weeks
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="nav nav-tabs" id="argoTabs" role="tablist">
              {tabs.map((item) => {
                return (
                  <li className="nav-item" key={item.number}>
                    <a
                      className="nav-link active"
                      id={`nav-tab-${item.number}`}
                      data-toggle="tab"
                      href={`#tab-${item.number}`}
                      role="tab"
                      aria-controls={`tab-${item.number}`}
                      aria-selected="true"
                    >
                      <i className="fas fa-list"></i>List Builder
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="tab-content" id="argoTabsContent">
              {tabs.map((tab) => {
                return (
                  <FeatureTab
                    key={tab.title}
                    title={tab.title}
                    image={tab.image}
                    content={tab.content}
                    list={tab.list}
                    number={tab.number}
                    tabTitle={tab.tabTitle}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type FeatureTabProps = {
  tabTitle: string;
  title: string;
  image: StaticImageData;
  content: string;
  list: string[];
  number: number;
};

function FeatureTab({ title, image, content, list, number }: FeatureTabProps) {
  return (
    <div
      className="tab-pane fade"
      id={`tab-${number}`}
      role="tabpanel"
      aria-labelledby="tab-3"
    >
      <div className="row">
        <div className="col-lg-6">
          <div className="image-container">
            <Image className="img-fluid" src={image} alt="alternative" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="text-container">
            <h3>{title}</h3>
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
            <a
              className="btn-solid-reg popup-with-move-anim"
              href={`#details-lightbox-${number}`}
            >
              LIGHTBOX
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
