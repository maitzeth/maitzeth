// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const data = [
    {
      id: 1,
      slug: "how-to-cum",
      title: "How to cum",
      subtitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      created_at: "2020/03/17",
      categories: ["tip", "javascript"],
      image:
        "https://images.unsplash.com/photo-1431887915357-68b819fae322?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    },
    {
      id: 2,
      slug: "how-to-blasfemar",
      title: "Quieres saber como blasfemar?",
      subtitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      created_at: "2020/08/17",
      categories: ["ReactJs", "javascript"],
      image:
        "https://images.unsplash.com/photo-1431887915357-68b819fae322?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    },
  ];

  res.status(200).json(data);
};
