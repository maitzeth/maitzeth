import React from "react";

import { Heading } from "../components/MzUI";

export default {
  title: "MzUI/Typographies",
  component: Heading,
};

const Template = (args) => <Heading {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: "This is a heading",
};
