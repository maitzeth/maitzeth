import { format } from "date-fns";

export default (req, res) => {
  const data = [
    {
      id: 1,
      company_name: "Colegio Universitario de Caracas",
      country: "Caracas, Venezuela",
      end_date: "2016",
      is_current: false,
      position: "Informatic Engineering",
      start_date: "2011",
    },
  ];

  res.status(200).json(data);
};
