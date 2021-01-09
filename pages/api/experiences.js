import { format } from "date-fns";

export default (req, res) => {
  const data = [
    {
      id: 1,
      company_name: "Freelance",
      country: "Worldwide",
      end_date: "Current",
      is_current: true,
      position: "Freelancing Web Developer",
      start_date: format(new Date("2014-12-31"), "LLLL yyyy"),
      content: {
        title: "Projects for web in React and more",
        items: [
          "Pixales - Created a Admin Dashboard, interacting with API Rest that uses Redux and Redux-thunk.",
          "Pocket - Worked for Revolt in a React Application and Admin Dashboard (nextjs) where people can get a Loan (API Rest, Redux, Redux Thunk, Nextjs)",
          "Lifefy - Worked for Revolt Build in React an SPA to buy life insurances (API Rest, Redux, Redux Thunk)",
          "Potenza - Worked for Revolt build in NextJS an storefront from scratch (API Rest, Api Routes, swr, context api)",
          "Many other works for multiple clients on Wordpress or HTML/CSS sites.",
        ],
      },
    },
    {
      id: 2,
      company_name: "Braintly",
      country: "Buenos Aires, Argentina",
      is_current: false,
      position: "Senior Front-End Developer",
      start_date: format(new Date("2019-04-30"), "LLLL yyyy"),
      end_date: format(new Date("2020-10-19"), "LLLL yyyy"),
      content: {
        items: [
          "AltaSalud- Helped to define architecture, tooling and implemented their Website and Admin Dashboard(Link Here). Built in React",
          "Beetscoop- Helped to define architecture, tooling and implemented a PWA and Admin Dashboard(Link Here). Built in Reac",
          "Time2Talk- Helped to define architecture, tooling and implemented my first React Native App and Admin Dashboard(Link Here), where youcan have real time conversations with teachers, so you can improve or learn Spanish. By releasing the first stable version for iOS and Android.",
          "Ikorso- Helped to define structure and tooling of a Admin Dashboard toLink here",
        ],
      },
    },
    {
      id: 3,
      company_name: "EGO Agency",
      country: "Buenos Aires, Argentina",
      is_current: false,
      position: "Front-End Developer",
      start_date: format(new Date("2018-05-30"), "LLLL yyyy"),
      end_date: format(new Date("2019-03-30"), "LLLL yyyy"),
      content: {
        items: [
          "Worked on an backoffice app for Banco Santander Rio, developing new features for the legacy version and code maintenance for better per-formance and UX, using AngularJS for UI Development, BEM for CSS class naming conventions and SCSS for CSS processing",
          "At the same time I worked on a small team that helps to migrate the app from AngularJS to React.",
        ],
      },
    },
    {
      id: 4,
      company_name: "Escuela Web LLC",
      country: "Venezuela",
      is_current: false,
      position: "HTML/CSS Instructor",
      start_date: format(new Date("2015-08-14"), "LLLL yyyy"),
      end_date: format(new Date("2018-04-08"), "LLLL yyyy"),
      content: {
        items: [
          "Worked teaching the basics about HTML5, CSS3 and introduction to Javascript using jQuery. Almost over 1 course per month.",
        ],
      },
    },
  ];

  res.status(200).json(data);
};
