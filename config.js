import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";

const FONT_SIZE = 16;
const BRAND = "André Iván";

const API_URL = process.env.API_URL;

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
    title: "Blog",
    to: "/blog",
  },
  {
    title: "Contact",
    to: "/contact",
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

const lightTheme = {
  colors: {
    background: "#fff",
    text: "#777",
    accent: "#5c61ff",
    black: "#000",
    white: "#fff",
    postItem: "#fff",
    footer: "#80808008",
  },
};

const darkTheme = {
  colors: {
    background: "#070919",
    text: "#a4a7c1",
    accent: "#00c58e",
    black: "#000",
    white: "#fff",
    postItem: "#0d1131",
    footer: "#0d1131",
  },
};

const themeTransition = "all 100ms ease-in";

export {
  navigation,
  socialNetworks,
  BRAND,
  fontSize,
  mediaQuerySizes,
  device,
  lightTheme,
  darkTheme,
  themeTransition,
  API_URL,
};
