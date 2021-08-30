import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51J10UBJRJClnUqK6ReRoYL1Z2CCVm0as9QXnuCEoPpuxT5Sf71rlL8eq85L6QAYkkJt6h3PcHkfUD4pvmjyxKCiU0046JBQJkr"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });
