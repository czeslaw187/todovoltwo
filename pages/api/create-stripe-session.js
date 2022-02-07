const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function CreateStripeSession(req, res) {

  const {email} = req.body

  const transformedItem = {
    price_data: {
      currency: 'gbp',
      product_data: {
        name: 'subscribe',
      },
      unit_amount: 699,
    },
    description: 'subscription',
    quantity: 1,
  };

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [transformedItem],
    mode: 'payment',
    success_url: process.env.NEXT_PUBLIC_API_URL + '/success?status=success',
    cancel_url: process.env.NEXT_PUBLIC_API_URL + '?status=cancel',
    customer_email: email
  });

  res.json({ id: session.id });
}

export default CreateStripeSession;