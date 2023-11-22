import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  'pk_test_51ODitMAcPlMxlKbzlo8SWisKGoVrxwsGy7wvXXTK8h2iNmErtwFbtBeuANH49TEHKfiWxRIHFmGiE073ARvp1lVq00I72Bb3oV'
);

export default function Stripe() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{CLIENT_SECRET}}'
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
}
