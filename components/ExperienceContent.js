import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Box } from "../components/MzUI";

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
      <Box
        backgroundColor="lightWhite"
        borderRadius="5px"
        marginLeft="medium"
        marginTop="medium"
        padding="medium"
      >
        {children}
      </Box>
    </motion.div>
  );
};

ExperienceContent.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
};

export default ExperienceContent;
