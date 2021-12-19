import type { EventType } from "types";

const events: EventType[] = [
  {
    image: "images/timeline/welcome-email.png",
    date: "February 15, 2021",
    title: "Herzlich willkommen!",
    location: "Bangalore, India",
    summary:
      "Having applied to Grover already back in 2020, but having the offer redacted only days later due to COVID, it was a sight for sore eyes to read this email, to know that I would get the chance to work with Grover once again.\n\n_It's not everyday that a golden opportunity presents itself twice._",
  },
  {
    image: "images/timeline/x-squad.jpg",
    date: "April 6, 2021",
    title: "Joined Grover",
    location: "Bangalore, India",
    summary:
      "Finally inducted into the Grover family and into one of the best teams _(opinionated)_ led by [Jason Efstathiou](https://www.linkedin.com/in/jason-efstathiou) (PM) and [Phillipe Moreira](https://www.linkedin.com/in/phillipemoreira) (EM). We were unclear about our OKRs at this point, but working on anything related to Your Tech, Your Profile, Your Payments and the Admin Panel.",
  },
  {
    image: "images/timeline/purchase-option.png",
    date: "April 26, 2021",
    title: "First Feature: Purchase Option on PDP",
    location: "Bangalore, India",
    summary:
      "The first feature I worked on, displaying purchase option tooltip on the PDP which successfully increased subscription rates by a substantial number.",
  },
  {
    image: "images/timeline/crashed.png",
    date: "April 27, 2021 (1 day later)",
    title: "Caused an outage from my first contribution",
    location: "Bangalore, India",
    summary:
      "Like the legend, I spectacularly caused the main PDP to crash for all users by making a silly error. Thankfully, it was resolved within minutes and I miraculously kept my job.",
  },
  {
    image: "images/timeline/purchase-option-analytics.png",
    date: "April 30, 2021",
    title: "First Data Driven Decision: Purchase Option Statistics",
    location: "Bangalore, India",
    summary:
      "Making decisions through data driven procedures was a new experience, but a fulfilling one. Was able to understand the complex ecosystem through which we send analytics events from the frontend, through Kafka, Confluent etc, and finally to Amplitude.",
  },
  {
    image: "images/timeline/spain-launch.png",
    date: "May 25, 2021",
    title: "Grover launches in Spain",
    location: "Bangalore, India",
    summary:
      "Played a really small part in the big transition of Grover launching in a new market, Spain. Being a tiny cog, having played in the company's huge success gave me a lot of pride to boast out loud that I worked towards making it happen.",
  },
  {
    image: "images/timeline/switch-facelift.png",
    date: "May 28, 2021",
    title: "First Creative Design Task: Switches",
    location: "Bangalore, India",
    summary:
      "I love working on anything that stimulates me creatively, and this was a nice experiment to see how to get the most out of my CSS chops. An animated, smooth reusable switch component to use within the platform to toggle on/off settings.",
  },
  {
    image: "images/timeline/wrong-date-format.png",
    date: "June 23, 2021",
    title: "First Bugfix: Wrong Date Format",
    location: "Bangalore, India",
    summary:
      "Worked on a bug fix to get accustomed to the monolithic codebase that is **frontshop**, to fix the format in which dates are displayed for users from different countries.",
  },
  {
    image: "images/timeline/notifications.png",
    date: "July 6, 2021",
    title: "Notifications on Your Profile",
    location: "Bangalore, India",
    summary:
      "Worked with Braze (Customer Engagement Platform) and notification-center to implement notification management for each user on the Grover Profile Dashboard.",
  },
  {
    image: "images/timeline/mix-landing-page.png",
    date: "July 8, 2021",
    title: "Introducing Grover Mix",
    location: "Bangalore, India",
    summary:
      "By far the most favorite product spec I've worked on at Grover, the Mix Landing Page. Designed by the all-knowing [Jason Efstathiou](https://www.linkedin.com/in/jason-efstathiou), having to build this from scratch using CSS grids and responsive media queries while keeping in mind optimization techniques, this was one of the most challenging but rewarding sections I've ever designed.\n\n[Go to Grover Mix](https://www.grover.com/de-en/mix)",
  },
  {
    image: "images/timeline/permissions.png",
    date: "July 13, 2021",
    title: "Admin Panel: Permissions Management",
    location: "Bangalore, India",
    summary:
      "Also one of the cool projects where I had the privilege to contribute which resulted in a direct impact on business operations. Assigning permissions to internal operations teams and new engineers onboarded to Grover is as easy as a toggle. Also had the opportunity to explore [Ant Design](https://ant.design/s) for the very first time, pretty cool UI library indeed.",
  },
  {
    image: "images/timeline/landed-in-berlin.jpg",
    date: "September 4, 2021",
    title: "Relocated to Berlin! ✈️",
    location: "Berlin, Germany",
    summary:
      "When I applied to Grover 2 years ago, this was my dream and main intention: to work in the EU, to explore the world, and as any immigrant from another country would want, to belong here. After knocking on a couple of doors, Grover finally allowed me this opportunity and brought this dream to a reality. I've been enjoying my time here so much, that I just can't seem to stop clicking pictures.\n\nIf you'd like to follow my photography, head on over to my [Instagram](https://pillai.xyz/instagram).",
  },
  {
    image: "images/timeline/first-time-at-office.jpg",
    date: "September 10, 2021",
    title: "First Time at the Office",
    location: "Berlin, Germany",
    summary:
      "It was my first time in an office in almost 2 years, thanks to the Coronavirus. We still had to follow all kinds of precautions, quarantines and the likes, but I finally made my way to the office and got to meet so many of the people I was only acquainted with through Google Meet and Zoom video calls.",
  },
  {
    image: "images/timeline/grover-card.png",
    date: "September 14, 2021",
    title: "Introducing Grover Card",
    location: "Berlin, Germany",
    summary:
      "Hands down to the insane design chops by [Joaquín Lluis](https://www.linkedin.com/in/joaquinlluis) for having created this landing page from scratch. To implement this, I had to learn new (and scary) technologies like [GSAP](https://greensock.com/gsap/) to construct these animation timelines. **Also, a huge shoutout to the Grover Card squad for allowing me the opportunity to work on this.**\n\n[Go to Grover Card](https://www.grover.com/de-en/card)",
  },
  {
    image: "images/timeline/droidcon.jpg",
    date: "October 21, 2021",
    title: "Represented Grover at DroidCon Berlin 21",
    location: "Berlin, Germany",
    summary:
      "It was a great experience to attend an event in years, also representing one of the fastest growing startups in Berlin. A ton of people reached out to me at the event, wanting to know more about Grover, wanting to join the cause for sustainable ecosystems and help build the product.",
  },
  {
    image: "images/timeline/bank-account-snapshot.png",
    date: "November 18, 2021",
    title: "Second Chance Bank Account Snapshots",
    location: "Berlin, Germany",
    summary:
      "We all deserve a second chance in life, and so do Grover's customers. If they were declined initially from renting, because of their dodgy credit history, we give them another try at showing us that they can afford to pay their rent. Another monumental feature pushed, which I played a small part in.",
  },
  {
    image: "images/timeline/goodbye-grover-care.png",
    date: "November 22, 2021",
    title: "Increasing Retention",
    location: "Berlin, Germany",
    summary:
      "Designed by the insanely talented [Alexandra Haiduk](https://www.linkedin.com/in/alexandra-haiduk-b6b9a113b) in an attempt to retain users on our platform from not outright purchasing their devices, but to continue renting and being a part of the sustainable ecosystem. How did she do this? With the help of a deadly shark of course.",
  },
  {
    image: "images/timeline/first-rental-roomba.jpg",
    date: "December 4, 2021",
    title: "Rented my first tech with Grover",
    location: "Berlin, Germany",
    summary:
      "The Roomba, the simplest thing you can add to your home to make you feel like you're a character from [The Jetsons](https://en.wikipedia.org/wiki/The_Jetsons). I've thought about getting one of these for quite a while, but just never felt like making that commitment. In comes Grover with the value prop that I can give a product a test run before having to make my decision, and it does seem like I'll continue renting it.",
  },
  {
    image: "images/timeline/christmas-party.jpg",
    date: "December 10, 2021",
    title: "Christmas Party",
    location: "Berlin, Germany",
    summary:
      "Like most experiences that have been taken away by COVID, going to a party and talking shop with anyone and everyone was just not something I thought we could do this year, but despite the odds, we had the best damn party in Berlin that night, and for nights to come.",
  },
  {
    image: "images/timeline/auf-wiedersehen.jpg",
    date: "December 31, 2021",
    title: "Auf Wiedersehen, Grover!",
    location: "Berlin, Germany",
    summary:
      "All good things must come to an end, and while my time here at Grover was nothing short of a journey, I find myself already having to prepare myself for the next one. It truly was one of the most interesting and life-changing experiences to have been a part of the Grover Roller Coaster that keeps going up.",
  },
];

export default events;
