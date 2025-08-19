import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { env } from '@/lib/env';


export async function POST(req: Request){
const sig = headers().get('stripe-signature');
const raw = await req.text(); // raw body for signature verification
try {
const event = await stripe.webhooks.constructEventAsync(raw, sig!, env.STRIPE_WEBHOOK_SECRET);
// TODO: handle events (trial started, subscription active, etc.)
return NextResponse.json({ received: event.type });
} catch (e: any) {
return new NextResponse(`Webhook Error: ${e.message}`, { status: 400 });
}
}
