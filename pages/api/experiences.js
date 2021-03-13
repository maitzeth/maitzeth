import { format } from "date-fns";

export default (req, res) => {
  const data = [
    {
      id: 1,
      company_name: "Revolt.digital",
      country: "Buenos Aires, Argentina",
      start_date: format(new Date("2020-10-28"), "LLLL yyyy"),
      end_date: "Current",
      is_current: true,
      position: "Front-End Engineering",
      content: {
        title:
          "Solving problems by using React and their ecosystem (like redux, react-router-dom, formik, apollo-client, etc) as my main tool as a front-end development.",
        items: [
          "Pocket - Creating a Dashboard in NextJS and a SPA where people can get Loans.",
          "Lifefy - Creating a 'Step By Step Form' where people can buy life insurances.",
          "Potenza - Creating a storefront in nextjs that will help people buying oil lubricants and more. Using Nextjs for its versatility creating pages and using API routes for server-side authentication.",
          "SimplEstate - Creating a portal where people can invest in real states projects. Here is where i was able to create my very first Design System.",
        ],
      },
    },
    {
      id: 2,
      company_name: "Freelance",
      country: "Remote",
      end_date: "Current",
      is_current: true,
      position: "Front-End Consultant",
      start_date: format(new Date("2014-12-31"), "LLLL yyyy"),
      content: {
        title: "Using any web development tools needed",
        items: [
          "Pixales - Helped a small startup by developing a Dashboard in React that will manage all Settings for a videogame made in Unity",
          "Helped many other clients by developing Wordpress or HTML/CSS sites for their products or services.",
        ],
      },
    },
    {
      id: 3,
      company_name: "Braintly",
      country: "Buenos Aires, Argentina",
      is_current: false,
      position: "Front-End Developer and React-Native Developer",
      start_date: format(new Date("2019-04-30"), "LLLL yyyy"),
      end_date: format(new Date("2020-10-19"), "LLLL yyyy"),
      content: {
        title:
          "MANAGE FRONT-END DEVELOPMENT FOR A TECHNOLOGY COMPANY USING REACT AND REACT NATIVE BY CREATING COST-EFFECTIVE APPLICATIONS.",
        items: [
          "AltaSalud - Helped to define architecture, tooling, and implemented an application where people can manage their payment receipts (React).",
          "Betscoop -  Worked on a PWA application and Admin Dashboard where people can make bets and administrators can manage people's payments. Where Betscoop can earn money by getting taxes for any transaction and Braintly can get a maintenance contract with Betscoop.",
          "Time2Talk - Built an App on React Native and Admin Dashboard, where students can have real-time conversations with coaches and you can improve or learn Spanish. I worked on the first stable version for iOS and Android.",
          "Ikorso - Created an Admin Dashboard where the administrator can manage a storefront (React)",
        ],
      },
    },
    {
      id: 4,
      company_name: "EGO Agency",
      country: "Buenos Aires, Argentina",
      is_current: false,
      position: "Front-End Developer",
      start_date: format(new Date("2018-05-30"), "LLLL yyyy"),
      end_date: format(new Date("2019-03-30"), "LLLL yyyy"),
      content: {
        items: [
          "Worked on a tool that helps Banco Santander Rio to create new users accounts into their bank system by developing new features for the legacy version and code maintenance for better performance and UX, using React.",
        ],
      },
    },
    {
      id: 5,
      company_name: "Escuela Web LLC",
      country: "Caracas, Venezuela",
      is_current: false,
      position: "HTML/CSS Instructor",
      start_date: format(new Date("2015-08-14"), "LLLL yyyy"),
      end_date: format(new Date("2018-04-08"), "LLLL yyyy"),
      content: {
        items: [
          "Worked helping EscuelaWeb by teaching HTML/CSS3 and Javascript for almost 300 students.",
        ],
      },
    },
  ];

  res.status(200).json(data);
};
