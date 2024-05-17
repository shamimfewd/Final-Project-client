import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import hero1 from "../../../assets/home/01.jpg";
import hero2 from "../../../assets/home/02.jpg";
import hero3 from "../../../assets/home/03.png";
import hero4 from "../../../assets/home/04.jpg";
import hero5 from "../../../assets/home/05.png";
import hero6 from "../../../assets/home/06.png";

const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src={hero1} />
      </div>
      <div>
      <img src={hero2} />
      </div>
      <div>
      <img src={hero3} />
      </div>
      <div>
        <img src={hero4} />
      </div>
      <div>
      <img src={hero5} />
      </div>
      <div>
      <img src={hero6} />
      </div>
    </Carousel>
  );
};

export default Banner;
