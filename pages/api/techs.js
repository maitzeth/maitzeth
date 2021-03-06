export default (req, res) => {
  const data = [
    { id: 1, alt: "Javascript Logo", image: "/images/javascript.svg" },
    { id: 2, alt: "HTML Logo", image: "/images/html.svg" },
    { id: 3, alt: "CSS Logo", image: "/images/css.svg" },
    { id: 4, alt: "React Logo", image: "/images/react.svg" },
    { id: 5, alt: "Next Logo", image: "/images/nextjs-3.svg" },
    { id: 6, alt: "Redux Logo", image: "/images/redux.svg" },
    { id: 7, alt: "Git Logo", image: "/images/git-icon.svg" },
    { id: 8, alt: "Git Logo", image: "/images/react-router.svg" },
    { id: 9, alt: "Gatsby Logo", image: "/images/gatsby.svg" },
    { id: 10, alt: "Apollo Logo", image: "/images/apollostack.svg" },
    { id: 11, alt: "Graphql Logo", image: "/images/graphql.svg" },
    { id: 12, alt: "React Spring Logo", image: "/images/react-spring.svg" },
    { id: 13, alt: "Storybook Logo", image: "/images/storybook-icon.svg" },
  ];

  res.status(200).json(data);
};
