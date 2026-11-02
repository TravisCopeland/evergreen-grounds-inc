# Quote request email setup

Quote requests are sent from the Next.js server through Resend. The Resend API
key is server-only and must never use a `NEXT_PUBLIC_` prefix.

## Local development

1. Create a Resend account and add `evergreengrounds.com` as a sending domain.
2. Add the DNS records Resend provides at your domain's DNS host, then wait for
   Resend to verify the domain.
3. Create a Resend API key with permission to send email.
4. Copy `.env.example` to `.env.local` and set `RESEND_API_KEY`. Set
   `RESEND_FROM_EMAIL` to an address at the verified domain, such as
   `Evergreen Grounds <quotes@evergreengrounds.com>`.
5. Run `npm run dev` and submit a test quote request using an email address you
   can check.

The owner notification is delivered to `evergreengroundsinc@gmail.com`. Its
Reply-To is set to the requester's email. A separate branded receipt is sent to
the requester. The quote form requires an email address for this confirmation.

## Vercel deployment

Add `RESEND_API_KEY` and `RESEND_FROM_EMAIL` to the Vercel project's Environment
Variables for Production (and Preview if you want to test previews). Keep the
API key secret, then redeploy. Remove the old `NEXT_PUBLIC_SERVICE_ID`,
`NEXT_PUBLIC_TEMPLATE_ID`, and `NEXT_PUBLIC_KEY` variables after the new
deployment has been verified.

The free Resend plan currently includes 3,000 emails per month and is limited
to 100 emails per day. Each successful quote sends two messages. Check Resend's
current plan limits before relying on them.
