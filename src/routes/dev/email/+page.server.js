import { render } from "svelte-email";
import { Email } from "$lib/emails";

export const load = async () => {
    console.log(Email);

    const { html } = Email.render(
        {
            title: "Once",
            author: "37signals",
            content: "Something happened to business software.\n\nYou used to pay for it once, install it, and run it. Whether on someone’s computer, or a server for everyone, it felt like you owned it. And you did.\n\nToday, most software is a service. Not owned, but rented. Buying it enters you into a perpetual landlord–tenant agreement. Every month you pay for essentially the same thing you had last month. And if you stop paying, the software stops working. Boom, you’re evicted.\n\nFor nearly two decades, the SaaS model benefitted landlords handsomely. With routine prayers — and payers — to the Church of Recurring Revenue, valuations shot to the moon on the backs of businesses subscribed at luxury prices for commodity services they had little control over.\n\nAdd up your SaaS subscriptions last year. You should own that shit by now.\n\nSaaS still makes sense for many products, but its grip will slip. Installation and administration used to be hopelessly complicated, but self–hosting tech is simpler now and vastly improved. Plus, IT departments are hungry to run their own IT again, tired of being subservient to Big Tech’s reign clouds.\n\nOnce upon a time you owned what you paid for, you controlled what you depended on, and your privacy and security were your own business. We think it’s that time again.\n\nIntroducing ONCE, a new line of software products from 37signals.\n\nPay one time, own forever.\nWe write the code, you get to see it.\nWe give you the software, you get to host it.\nSimple and straightforward, not enterprisey and bloated.\nFor one fixed price. Once.\nOur first ONCE product is called Campfire. It’s a group chat system similar to Slack, but simpler and without the outrageous monthly fees. More products are on the way in 2024.\n\nIn the early 2000s, we were among the early pioneers leading the industry into the SaaS revolution. Now, 20 years later, we intend to help lead the way out. The post–SaaS era is just around the corner.\n\nStay tuned."
        }
    );

    return {
        html
    }
}