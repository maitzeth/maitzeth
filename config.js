import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";

const FONT_SIZE = 16;
const BRAND = "André Iván";

const fontSize = (px) => {
  const value = (px / FONT_SIZE) * 1;
  return `${value}rem`;
};

const mediaQuerySizes = {
  small: "545",
  large: "760",
  extraLarge: "1160",
};

const device = {
  mobile: `(max-width: 650px)`,
  desktop: `(max-width: 980px)`,
  wideScreen: `(min-width: 1200px)`,
};

const navigation = [
  {
    title: "About me",
    to: "/",
  },
  {
    title: "Work",
    to: "/work",
  },
];

const socialNetworks = {
  instagram: {
    component: FaInstagram,
    url: "https://www.instagram.com/maitzethdrummer/",
  },
  github: {
    component: FaGithub,
    url: "https://github.com/maitzeth",
  },
  linkedin: {
    component: FaLinkedinIn,
    url: "https://www.linkedin.com/in/andre-ivan-mz/",
  },
};

const themeScheme = {
  colors: {
    darkBackground: "rgba(7,9,25, 1)",
    blackFooterBackground: "rgba(164,167,193, 1)",
    black: "#000",
    white: "#fff",
    lightText: "#777",
    darkText: "#a4a7c1",
    lightAccent: "#5c61ff",
    darkAccent: "#00c58e",
  },
};

export {
  navigation,
  socialNetworks,
  BRAND,
  fontSize,
  mediaQuerySizes,
  device,
  themeScheme,
};
