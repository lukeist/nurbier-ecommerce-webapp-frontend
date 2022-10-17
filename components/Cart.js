import getStripe from "../lib/getStripe";

// payment
const handleCheckout = async () => {
  const stripe = await getStripe();
  const response = await fetch("/api/stripe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cartItems),
  });

  const data = await response.json();
  await stripe.redirectToCheckout({ sessionId: data.id });
};
