import { format } from "date-fns";

export default (req, res) => {
  const data = [
    {
      alt: "Javascript Logo",
      image: "/images/javascript.svg",
    },
    {
      alt: "HTML Logo",
      image: "/images/html.svg",
    },
    {
      alt: "CSS Logo",
      image: "/images/css.svg",
    },
    {
      alt: "React Logo",
      image: "/images/react.svg",
    },
    {
      alt: "Next Logo",
      image: "/images/nextjs-3.svg",
    },
    {
      alt: "Redux Logo",
      image: "/images/redux.svg",
    },
    {
      alt: "Gatsby Logo",
      image: "/images/gatsby.svg",
    },
  ];

  res.status(200).json(data);
};
