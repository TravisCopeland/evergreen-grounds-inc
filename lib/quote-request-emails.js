import { phoneNumber } from "@/constants/content";

const escapeHtml = (value) =>
	value.replace(
		/[&<>"']/g,
		(character) =>
			({
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				'"': "&quot;",
				"'": "&#39;",
			})[character]
	);

const emailLayout = (content) => `<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="color-scheme" content="light">
		<title>Evergreen Grounds</title>
	</head>
	<body style="margin:0;background:#f4f6f4;color:#252a26;font-family:Arial,Helvetica,sans-serif;">
		<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4f6f4;padding:32px 16px;">
			<tr>
				<td align="center">
					<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;">
						<tr>
							<td bgcolor="#ffffff" style="background-color:#ffffff;border-bottom:4px solid #11823b;padding:22px 32px;">
								<img src="cid:evergreen-grounds-logo" width="220" height="66" alt="Evergreen Grounds" style="display:block;width:220px;max-width:100%;height:auto;background-color:#ffffff;">
								<p style="margin:10px 0 0;color:#526157;font-size:13px;">Landscape care, rooted in experience</p>
							</td>
						</tr>
						<tr>
							<td style="padding:32px;">${content}</td>
						</tr>
						<tr>
							<td style="border-top:1px solid #e7ece8;padding:20px 32px;color:#68736b;font-size:12px;line-height:1.6;">
								Evergreen Grounds, Inc. · Proudly serving North Atlanta since 1983<br>
								<a href="tel:${phoneNumber.replaceAll("-", "")}" style="color:#176b38;text-decoration:none;">${phoneNumber}</a>
								&nbsp;·&nbsp;
								<a href="mailto:evergreengroundsinc@gmail.com" style="color:#176b38;text-decoration:none;">evergreengroundsinc@gmail.com</a>
							</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>
	</body>
</html>`;

export const quoteRequestEmail = ({
	name,
	phone,
	address,
	email,
	description,
}) =>
	emailLayout(`
		<p style="margin:0 0 8px;color:#176b38;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Website inquiry</p>
		<h1 style="margin:0 0 20px;color:#18241c;font-size:26px;line-height:1.3;">New quote request</h1>
		<p style="margin:0 0 24px;color:#4c574f;font-size:15px;line-height:1.6;">A visitor has requested a free quote. Reply directly to this email to contact them.</p>
		<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;font-size:14px;">
			<tr><td style="padding:12px 0;border-bottom:1px solid #e7ece8;color:#68736b;width:100px;">Name</td><td style="padding:12px 0;border-bottom:1px solid #e7ece8;color:#252a26;font-weight:600;">${escapeHtml(name)}</td></tr>
			<tr><td style="padding:12px 0;border-bottom:1px solid #e7ece8;color:#68736b;">Phone</td><td style="padding:12px 0;border-bottom:1px solid #e7ece8;"><a href="tel:${escapeHtml(phone)}" style="color:#176b38;">${escapeHtml(phone)}</a></td></tr>
			<tr><td style="padding:12px 0;border-bottom:1px solid #e7ece8;color:#68736b;">Address</td><td style="padding:12px 0;border-bottom:1px solid #e7ece8;color:#252a26;">${escapeHtml(address)}</td></tr>
			<tr><td style="padding:12px 0;border-bottom:1px solid #e7ece8;color:#68736b;">Email</td><td style="padding:12px 0;border-bottom:1px solid #e7ece8;"><a href="mailto:${escapeHtml(email)}" style="color:#176b38;">${escapeHtml(email)}</a></td></tr>
			<tr><td colspan="2" style="padding:18px 0 6px;color:#68736b;">Project details</td></tr>
			<tr><td colspan="2" style="padding:0 0 12px;color:#252a26;line-height:1.6;white-space:pre-wrap;">${escapeHtml(description || "No additional details provided.")}</td></tr>
		</table>
	`);

export const confirmationEmail = (name) =>
	emailLayout(`
		<p style="margin:0 0 8px;color:#176b38;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Request received</p>
		<h1 style="margin:0 0 16px;color:#18241c;font-size:26px;line-height:1.3;">Thanks for reaching out, ${escapeHtml(name)}.</h1>
		<p style="margin:0 0 16px;color:#4c574f;font-size:15px;line-height:1.7;">Your quote request is safely in our hands. Our team will review the details and get back to you as soon as possible.</p>
		<p style="margin:0 0 24px;color:#4c574f;font-size:15px;line-height:1.7;">Need help sooner? Give us a call and we’ll be happy to talk through your project.</p>
		<table role="presentation" cellspacing="0" cellpadding="0">
			<tr><td style="background:#11823b;border-radius:6px;"><a href="tel:${phoneNumber.replaceAll("-", "")}" style="display:inline-block;padding:13px 20px;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;">Call ${phoneNumber}</a></td></tr>
		</table>
		<p style="margin:26px 0 0;color:#4c574f;font-size:15px;line-height:1.7;">We appreciate the opportunity to help with your outdoor space.</p>
	`);
