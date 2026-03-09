import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

export async function POST(req: Request) {

  const { plan } = await req.json()

  let price = ""

  if (plan === "pro") price = "price_pro_monthly"
  if (plan === "lifetime") price = "price_lifetime"

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [{ price, quantity: 1 }],
    mode: plan === "pro" ? "subscription" : "payment",
    success_url: "https://your-site/success",
    cancel_url: "https://your-site"
  })

  return Response.json({ url: session.url })
}