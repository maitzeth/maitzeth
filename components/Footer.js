import React from "react";
import styled from "styled-components";
import Typography from "./Typography";
import { BRAND } from "../config";

const Footer = () => {
  return (
    <Wrapper>
      <Typography fontSize={13} fontWeight="500">
        Made with ❤️ by {BRAND} © 2020
      </Typography>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.footer};

  p {
    margin: 0;
  }
`;

export default Footer;
