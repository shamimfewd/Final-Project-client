import SectionTitle from "../../Components/SectionTitle";
import { useForm } from "react-hook-form";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <SectionTitle heading={"add an item"} subHeading={"what's new"} />
      <data
        value="
    "
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="form-control w-full MY-6">
              <div className="label">
                <span className="label-text">Recipe Name*</span>
              </div>
              <input
                type="text"
                placeholder="Recipe name"
                {...register("name", { required: true })}
                className="input input-bordered w-full "
              />
            </label>
          </div>

          <div className="flex items-center gap-x-4">
            <div className="w-full">
              <label htmlFor="">Category</label>
              <select
                {...register("category", { required: true })}
                className="select select-bordered  w-full "
              >
                <option disabled selected>
                  Select a Category
                </option>
                <option value={"salad"}>Salad</option>
                <option value={"pizza"}>Pizza</option>
                <option value={"soup"}>Soup</option>
                <option value={"dessert"}>Dessert</option>
                <option value={"drinks"}>Drinks</option>
              </select>
            </div>
            <div className="w-full">
              <label className="form-control w-full MY-6">
                <div className="label">
                  <span className="label-text">Price*</span>
                </div>
                <input
                  type="number"
                  {...register("price", { required: true })}
                  placeholder="price"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
          </div>

          <div>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Your bio</span>
              </div>
              <textarea
                {...register("recipe", { required: true })}
                className="textarea textarea-bordered h-24"
                placeholder="description"
              ></textarea>
            </label>
          </div>
          <div>
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input w-full max-w-xs my-6"
            />
          </div>
          <button className="btn">Add Item</button>
        </form>
      </data>
    </div>
  );
};

export default AddItems;
