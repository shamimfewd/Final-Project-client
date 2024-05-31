import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../Components/SectionTitle";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const UpdateItem = () => {
  const data = useLoaderData();
  const { name, category, recipe, price, _id } = data

  console.log(name, category, recipe);

  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset } = useForm();
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  const onSubmit = async (data) => {
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      reset();
      // now send the menu item data to the server image url
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };

      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);

      if (menuRes.data.modifiedCount > 0) {
        // show success popup
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is updated to the menu`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log("with image", res.data);
  };
  return (
    <div>
      <SectionTitle heading={"Update an Item"} subHeading={"Refresh Info"} />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="form-control w-full MY-6">
              <div className="label">
                <span className="label-text">Recipe Name*</span>
              </div>
              <input
                type="text"
                placeholder="Recipe name"
                defaultValue={name}
                {...register("name", { required: true })}
                className="input input-bordered w-full "
              />
            </label>
          </div>

          <div className="flex items-center gap-x-4">
            <div className="w-full">
              <label htmlFor="">Category</label>
              <select
                defaultValue={category}
                {...register("category", { required: true })}
                className="select select-bordered  w-full "
              >
                <option disabled value={"default"}>
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
                  defaultValue={price}
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
                defaultValue={recipe}
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
          <button className="btn">Update menu Item</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
