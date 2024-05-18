import { Helmet } from "react-helmet-async";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle";
import Cover from "../Shared/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";

import MenuCategory from "./MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Final Project - Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"Our Menu"} />
      {/* main cover */}
      <SectionTitle subHeading="Don't Miss" heading="Today's Offer" />
      {/* offered menu items*/}
      <MenuCategory items={offered} />

      {/* dessert menu items*/}
      <MenuCategory items={dessert} title={"Dessert"} img={dessertImg} />
      {/* dessert menu items*/}
      <MenuCategory items={pizza} title={"pizza"} img={pizzaImg} />
      {/* dessert menu items*/}
      <MenuCategory items={salad} title={"Salad"} img={saladImg} />
      {/* dessert menu items*/}
      <MenuCategory items={soup} title={"soup"} img={soupImg} />
    </div>
  );
};

export default Menu;
