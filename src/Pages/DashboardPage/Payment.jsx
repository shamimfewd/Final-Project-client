import SectionTitle from "../../Components/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";

// TODO : add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETEWAY_PK);
const Payment = () => {
  return (
    <div>
      <SectionTitle heading={"Payment"} subHeading={"Please, Pay to Eat"} />

      <div>
        <h1 className="text-4xl">payment get way</h1>
        <Elements stripe={stripePromise}>
          <CheckOut />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
