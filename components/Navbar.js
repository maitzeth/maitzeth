import React from "react";
import styled from "styled-components";
import Typography from "./Typography";
import { Container } from "./styles/Grid";
import ThemeToggler from "./ThemeToggler";
import {
  fontSize,
  socialNetworks,
  navigation,
  device,
  BRAND,
  themeTransition,
} from "../config";
import { useTheme } from "../context/themeContext";
import Link from "next/link";

const Navbar = () => {
  const { theme } = useTheme();

  const renderLinks = () => {
    return (
      <LinksWrapper>
        {navigation.map((item, index) => (
          <Link key={index} href={item.to}>
            <a>{item.title}</a>
          </Link>
        ))}
      </LinksWrapper>
    );
  };

  const renderSocialMedia = () => {
    return (
      <SocialWrapper activeTheme={theme}>
        {Object.keys(socialNetworks).map((item, index) => (
          <SocialNetworkLink
            key={index}
            activeTheme={theme}
            href={socialNetworks[item].url}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            {socialNetworks[item].component()}
          </SocialNetworkLink>
        ))}
      </SocialWrapper>
    );
  };

  return (
    <Wrapper>
      <NavWrapperLeft activeTheme={theme}>
        <Link href="/">
          <a>
            <Typography fontSize={22} fontWeight="bolder" color="gray">
              {BRAND}
            </Typography>
          </a>
        </Link>
        {renderLinks()}
      </NavWrapperLeft>
      <NavWrapperRight>
        <ThemeToggler />
        {renderSocialMedia()}
      </NavWrapperRight>
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  display: flex;
  align-items: center;
  height: 85px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 0;
  padding-right: 0;
`;

const NavWrapperLeft = styled.nav`
  display: flex;
  margin-right: 30px;
  align-items: center;

  a {
    padding: 10px 15px;
    color: ${(props) => props.theme.colors.text};
    opacity: 0.65;
    transition: ${themeTransition};

    p {
      margin: 0;
    }

    &:hover {
      color: ${(props) => props.theme.colors.accent};
      text-decoration: none;
      opacity: 1;

      p {
        color: ${(props) => props.theme.colors.accent};
      }
    }
  }

  @media ${device.mobile} {
    flex-direction: column;
    align-items: flex-start;

    > a {
      padding-bottom: 0;
      padding-top: 0;
    }
  }
`;

const LinksWrapper = styled.div`
  @media ${device.mobile} {
    margin-top: 15px;
  }
`;

const SocialWrapper = styled.div`
  display: flex;

  a {
    transition: ${themeTransition};
    color: ${(props) => props.theme.colors.text};

    &:hover {
      color: ${(props) => props.theme.colors.accent};
    }
  }

  @media ${device.mobile} {
    margin-top: 15px;
  }
`;

const NavWrapperRight = styled.nav`
  display: flex;
  margin-left: auto;

  @media ${device.mobile} {
    flex-direction: column;
    align-items: flex-end;
  }
`;

const SocialNetworkLink = styled.a`
  padding: 5px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  color: ${(props) =>
    props.activeTheme === "dark"
      ? props.theme.colors.white
      : props.theme.colors.lightText};

  &:hover {
    svg {
      opacity: 1;
    }
  }

  svg {
    font-size: ${fontSize(18)};

    opacity: 0.65;
  }
`;

export default Navbar;
