import createStripe from "stripe-client";
import { host } from "../../utils/env";

const stripe = createStripe(
  "pk_test_51J10UBJRJClnUqK6ReRoYL1Z2CCVm0as9QXnuCEoPpuxT5Sf71rlL8eq85L6QAYkkJt6h3PcHkfUD4pvmjyxKCiU0046JBQJkr"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = (token, amount, name) => {
  return fetch(`${host}/pay`, {
    body: JSON.stringify({
      token,
      name,
      amount,
    }),
    method: "POST",
  }).then((res) => {
    if (res.status > 200) {
      return Promise.reject("something went wrong processing your payment");
    }
    return res.json();
  });
};
