import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { env } from '@/lib/env';


export async function POST(){
const session = await stripe.checkout.sessions.create({
mode: 'subscription',
line_items: [{ price: env.STRIPE_PRICE_MONTHLY_299, quantity: 1 }],
subscription_data: { trial_period_days: 30 },
success_url: `${env.NEXT_PUBLIC_APP_URL}/dashboard?checkout=success`,
cancel_url: `${env.NEXT_PUBLIC_APP_URL}/dashboard?checkout=cancel`,
});
return NextResponse.json({ url: session.url });
}
