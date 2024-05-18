import SectionTitle from "../../Components/SectionTitle";
import useMenu from "../../Hooks/useMenu";
import MenuItem from "../Shared/MenuItem";

const PopularMenu = () => {
const [menu]= useMenu()
const popularItems = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-12">
      <SectionTitle heading={"From Our Menu"} subHeading={"Popular Items"} />

      <div className="grid md:grid-cols-2 gap-10">
        {popularItems.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
