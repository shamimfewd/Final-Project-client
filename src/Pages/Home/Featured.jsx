import SectionTitle from "../../Components/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg";

import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured_item bg-fixed text-white pt-10 my-20">
      <SectionTitle heading={"Check It Out"} subHeading={"Featured Items"} />

      <div className="md:flex justify-center items-center py-20 px-36 bg-slate-500 bg-opacity-40">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>May, 17, 2024</p>
          <p className="uppercase">where can i get some</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nam
            repudiandae id numquam et. Dolore assumenda molestiae eveniet. Dicta
            amet cum rerum, sequi veniam nisi aspernatur culpa hic quidem nobis
            ab. Temporibus maxime iure alias officia, dolores, quasi sed ipsa
            atque impedit adipisci maiores minus autem pariatur labore delectus!
            At?
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4 ">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
