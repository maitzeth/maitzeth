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
        title:
          "Helping multiple people and companies with great success in their problems by using React and ecosystem (like redux, react-router-dom, formik, etc) as my main tool as a front-end development.",
        items: [
          "Pixales - Helped an small startup by developing a Dashboard in React that will to manage all Settings for a videogame made in Unity",
          "Pocket - Worked with Revolt LLC by creating a Dashboard in NextJS and SPA where people can get a Loans using.",
          "Lifefy - Worked with Revolt LLC creating a Step Form Application where people can buy life insurances. (React)",
          "Potenza - Worked with Revolt LLC by creating a storefront in nextjs that will help people buying oil lubricant and more. Using Nextjs for its versatility creating pages and using api routes for server side authentication.",
          "Helped many other clients by developing Wordpress or HTML/CSS sites for their products or services.",
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
        title:
          "Manage front-end development for a technology company using React and React Native by creating cost-effective applications.",
        items: [
          "AltaSalud - Helped to define architecture, tooling and implemented an application where people can manage their payment receipts (React).",
          "Betscoop -  Worked on a PWA application and Admin Dashboard where people can make bets and administrators can manage people payments. Where Betscoop can earn money by getting taxes for any transaction and Braintly can get a maintenance contract with Betscoop.",
          "Time2Talk - Built an App on React Native and Admin Dashboard, where students can have real time conversations with coaches and you can improve or learn Spanish. I worked on the first stable version for iOS and Android.",
          "Ikorso - Created a Admin Dashboard where administrator can manage an storefront (React)",
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
          "Worked on a tool that helps Banco Santander Rio to create new users accounts into their bank system by developing new features for the legacy version and code maintenance for better performance and UX, using React.",
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
          "Worked helping EscuelaWeb by teaching HTML/CSS3 and Javascript for almost 300 students.",
        ],
      },
    },
  ];

  res.status(200).json(data);
};
