import { differenceInYears } from "date-fns";
import Box from "../components/Box";
import Heading from "../components/Heading";
import Layout from "../components/Layout";
import { VStack, HStack } from "../components/Stack";
import Image from "../components/styles/Image";
import Text from "../components/Text";
import { Grid, Cell } from "@mollycule/lattice";
import styled from "styled-components";

const Home = () => {
  const startingDate = new Date(2015, 1, 1);
  const endDate = new Date();

  const workingTime = differenceInYears(endDate, startingDate);

  return (
    <Box maxWidth={{ mobile: "200px", desktop: "300px" }} marginY="medium">
      <h1>Layout component</h1>
    </Box>
  );
};

export default Home;
