import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "../config";

const ExperienceContent = ({ children, isOpen }) => {
  const variants = {
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, height: 0 },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", height: 0 }}
      animate={isOpen ? "open" : "closed"}
      transition={{
        duration: 0.2,
      }}
      variants={variants}
    >
      <SubContent>{children}</SubContent>
    </motion.div>
  );
};

ExperienceContent.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
};

const SubContent = styled.div`
  background-color: rgba(186, 186, 186, 0.1);
  border-radius: 5px;
  margin-left: 2rem;
  margin-top: 20px;
  padding: 20px;

  @media ${device.mobile} {
    margin-left: 0;
  }

  h4 {
    text-transform: uppercase;
    margin-top: 0;
  }

  ul {
    margin: 0;
    padding-left: 20px;

    li {
      margin-bottom: 0.5rem;
      font-size: 80%;
    }
  }
`;

export default ExperienceContent;
