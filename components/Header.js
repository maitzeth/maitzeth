import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const Header = ({ title = "Site" }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;800&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

Header.defaultProps = {
  title: "Backoffice",
};

export default Header;
