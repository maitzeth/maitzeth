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
    },
    {
      id: 2,
      company_name: "Braintly",
      country: "Buenos Aires, Argentina",
      is_current: false,
      position: "Senior Front-End Developer",
      start_date: format(new Date("2019-04-30"), "LLLL yyyy"),
      end_date: format(new Date("2020-10-19"), "LLLL yyyy"),
    },
    {
      id: 3,
      company_name: "EGO Agency",
      country: "Buenos Aires, Argentina",
      is_current: false,
      position: "Front-End Developer",
      start_date: format(new Date("2018-05-30"), "LLLL yyyy"),
      end_date: format(new Date("2019-03-30"), "LLLL yyyy"),
    },
    {
      id: 4,
      company_name: "Escuela Web LLC",
      country: "Venezuela",
      is_current: false,
      position: "HTML/CSS Instructor",
      start_date: format(new Date("2015-08-14"), "LLLL yyyy"),
      end_date: format(new Date("2018-04-08"), "LLLL yyyy"),
    },
  ];

  res.status(200).json(data);
};
