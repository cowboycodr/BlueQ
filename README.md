![[Logo.png]]
BlueQ simplifies product launches by helping businesses build an audience early. It offers customized waitlist pages for collecting customer emails and a straightforward way to send bulk updates to everyone interested. At its core, BlueQ is about making sure businesses can keep their potential customers engaged and informed with minimal effort, right up until launch.

### Mission

> BlueQ's mission is to empower businesses to seamlessly connect with their future customers, creating anticipation and engagement from announcement to launch through simple, effective waitlist and communication tools.

### Features

| Feature                               | Description                                                                                                |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Waitlist Pages**                    | Create pages to collect email addresses from interested customers.                                         |
| **Bulk Email Sending**                | Send updates, news, and announcements to all subscribers at once.                                          |
| **Custom Domains**                    | Use custom subdomains (e.g., `acme.blueq.com`) for brand consistency.                                      |
| **Analytics Dashboard**               | Gain insights into subscriber growth, engagement rates, and other metrics. As well as user geometric data. |
| **Automated Communication Workflows** | Automate certain emails based on specific triggers or milestones.                                          |
| **Referral System**                   | Encourage and track referrals to organically increase sign-ups.                                            |
| **Feedback Collection**               | Collect early feedback or inquiries from potential customers.                                              |

### Stack

We **need** to ship fast. To do this we are building a stack with the minimum amount of overhead as possible. However, we plan on implementing this in a way where we can migrate easily in the future.

- [ ] **Bun**
- [ ] **Cloudflare**
- [ ] **Geist + Tailwindcss**
- [ ] **Supabase**
- [ ] **SvelteKit**
- [ ] **Vercel**

We call this **Supernova**.

### Monetization

BlueQ will have two pricing plans with two tiers. _Free_, being the first tier, which will support 90% of the users. However, popular projects will **require** the _Pro_ (potentially _enterprise_) tier.

I'm thinking of only allowing the _free_ tier to view or interact with 200-1000 individual emails addresses (determined once I get test users) while the _pro/enterprise_ tier will have access to all of the emails.

Pricing is TBD. Really dependent on how much these emailing APIs will charge me

| Feature                   | Free  | Pro      |
| ------------------------- | ----- | -------- |
| Waitlist Pages            | ✓     | ✓        |
| Bulk Email Sending        | ✓     | ✓        |
| Custom Domains            | -     | ✓        |
| Analytics Dashboard       | Basic | Advanced |
| Subscriber Segmentation   | -     | ✓        |
| Conversion Tracking       | -     | ✓        |
| Email Templates           | -     | ✓        |
| Automated Email Sequences | -     | ✓        |
| Integrations              | -     | ✓        |
| API Access                | -     | ✓        |
| Priority Support          | -     | ✓        |
| Referral System           | -     | ✓        |
| Feedback Collection       | -     | ✓        |
| A/B Testing               | -     | ✓        |
| Team Collaboration        | -     | ✓        |
