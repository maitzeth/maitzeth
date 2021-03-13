import React, { useState } from "react";
import { Box } from "../MzUI";

const Collapser = ({ render, content }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => setOpen((prev) => !prev);

  return (
    <article>
      <Box cursor={content && "pointer"} onClick={toggleOpen}>
        {render({ isOpen })}
      </Box>
      {content({ isOpen })}
    </article>
  );
};

export default Collapser;
