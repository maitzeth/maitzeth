import { format } from "date-fns";

export default (req, res) => {
  const data = [
    {
      id: 1,
      company_name: "Revolt",
      country: "New York - Buenos Aires",
      start_date: format(new Date("2020-10-28"), "LLLL yyyy"),
      end_date: "Current",
      is_current: true,
      position: "Front-End Engineer",
      content: {
        title:
          "Working as a Front-End Developer using multiple technologies like: Angular 11, React, Apollo-Client, NextJS, etc.",
      },
    },
    {
      id: 2,
      company_name: "Freelance",
      country: "Remote",
      end_date: "Current",
      is_current: true,
      position: "Web Development Consultant",
      start_date: format(new Date("2016-01-01"), "LLLL yyyy"),
      content: {
        title: "Using any web development tools needed",
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
        title:
          "Developed features for the legacy version and code maintenance, using Angular 1.5",
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
        title: "Teached HTML/CSS3 and Javascript for almost 300 students.",
      },
    },
  ];

  res.status(200).json(data);
};
