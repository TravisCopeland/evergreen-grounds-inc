# Evergreen Grounds, Inc.

Marketing site for Evergreen Grounds, Inc., a family-owned landscaping
company serving North Atlanta since 1983.

## Requirements

- Node.js 20 or newer
- npm

## Local development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). If that port is in use,
Next.js will select the next available port.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run the Next.js ESLint checks |
| `npm test` | Run the quote request validation tests |
| `npm run lcov-report` | Generate the LCOV coverage report |

After running `npm run lcov-report`, open
`coverage/lcov-report/index.html` in a browser to see covered and uncovered
lines.

## Quote request emails

Quote requests are sent through [Resend](https://resend.com). Create a
`.env.local` file with:

```env
RESEND_API_KEY=re_...
RESEND_FROM_EMAIL=quotes@your-verified-domain.com
```

The sending domain must be verified in Resend. The `RESEND_FROM_EMAIL` value
is the address used for owner notifications and customer confirmations.

See [docs/email-setup.md](docs/email-setup.md) for the full email setup guide.

## Deployment

The site is designed for deployment on Vercel:

1. Import the repository into Vercel.
2. Set the production environment variables listed above.
3. Configure the production domain.
4. Deploy the `main` branch.

The canonical site URL is configured in `constants.js`. Update `siteUrl` if
the production domain changes.

Before deploying, run:

```bash
npm run lint
npm test
npm run build
```

## Project structure

- `app/` — routes, page metadata, and the quote request API route
- `components/` — reusable UI and client-side interactions
- `assets/` — imported images and global styles
- `lib/` — server-side helpers, including quote email templates and rate limiting
- `public/` — static assets served from the site root
