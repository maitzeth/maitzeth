import Link from "next/link";
import React from "react";
import styled from "styled-components";
import {
  Box,
  Container,
  HStack,
  Spacer,
  Subtitle,
  Text,
} from "../components/MzUI";
import { BRAND, navigation, socials, themeTransition } from "../config";
import ThemeToggler from "./ThemeToggler";

const Navbar = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      height={{ mobile: "50px", desktop: "85px" }}
      tag="nav"
    >
      <Container>
        <HStack>
          <HStack space={{ mobile: "none", desktop: "large" }}>
            <Box display={{ mobile: "none", desktop: "block" }}>
              <Link href="/">
                <a>
                  <Subtitle weight="strong" textTransform="uppercase">
                    {BRAND}
                  </Subtitle>
                </a>
              </Link>
            </Box>
            <HStack space="medium">
              {navigation.map((item, index) => (
                <Link key={index} href={item.to}>
                  <a>
                    <Text tag="span">{item.title}</Text>
                  </a>
                </Link>
              ))}
            </HStack>
          </HStack>
          <Spacer />
          <Box
            display="flex"
            alignItems="center"
            flexDirection={{ mobile: "column", desktop: "row" }}
            position={{ mobile: "fixed", desktop: "relative" }}
            right={{ mobile: "0", desktop: "auto" }}
            top={{ mobile: "50%", desktop: "auto" }}
            width={{ mobile: "30px", desktop: "auto" }}
            transform={{ mobile: "translateY(-50%)", desktop: "none" }}
          >
            {Object.keys(socials).map((item, index) => (
              <SocialNetworkLink
                tag="a"
                key={index}
                href={socials[item].url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="text"
                marginX={{ mobile: "none", desktop: "small" }}
                marginY={{ mobile: "small", desktop: "none" }}
              >
                {socials[item].component()}
              </SocialNetworkLink>
            ))}
          </Box>
          <ThemeToggler />
        </HStack>
      </Container>
    </Box>
  );
};

const SocialNetworkLink = styled(Box)`
  transition: ${themeTransition};
  color: ${(props) => props.theme.colors.text};

  &:hover {
    color: ${(props) => props.theme.colors.accent};
  }
`;

export default Navbar;
