import Image from "next/image";
import customerlogo1 from "../../public/customer-logo-1.png";
import customerlogo2 from "../../public/customer-logo-2.png";
import customerlogo3 from "../../public/customer-logo-3.png";
import customerlogo4 from "../../public/customer-logo-4.png";
import customerlogo5 from "../../public/customer-logo-5.png";
import customerlogo6 from "../../public/customer-logo-6.png";

export default function Customers() {
  return (
    <div className="slider-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="slider-container">
              <div className="swiper-container image-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <Image
                      className="img-fluid"
                      src={customerlogo1}
                      alt="alternative"
                    />
                  </div>
                  <div className="swiper-slide">
                    <Image
                      className="img-fluid"
                      src={customerlogo2}
                      alt="alternative"
                    />
                  </div>
                  <div className="swiper-slide">
                    <Image
                      className="img-fluid"
                      src={customerlogo3}
                      alt="alternative"
                    />
                  </div>
                  <div className="swiper-slide">
                    <Image
                      className="img-fluid"
                      src={customerlogo4}
                      alt="alternative"
                    />
                  </div>
                  <div className="swiper-slide">
                    <Image
                      className="img-fluid"
                      src={customerlogo5}
                      alt="alternative"
                    />
                  </div>
                  <div className="swiper-slide">
                    <Image
                      className="img-fluid"
                      src={customerlogo6}
                      alt="alternative"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
