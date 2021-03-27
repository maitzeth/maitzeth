import React from "react";
import { BRAND } from "../config";
import { Text, Box } from "./MzUI";

const Footer = () => {
  return (
    <Box
      height="60px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      backgroundColor="footer"
    >
      <Text>Coded with ❤️ by {BRAND} © 2020</Text>
    </Box>
  );
};

export default Footer;
