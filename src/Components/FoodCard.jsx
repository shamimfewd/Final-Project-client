const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="image" />
        </figure>
        <p className="ml-5 -mt-10 text-2xl text-red-600"> ${price}</p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>

          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button className="btn border-b-4 btn-outline border-0">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
