import { differenceInYears } from "date-fns";
// import Heading from "../components/Heading";
import Layout from "../components/Layout";
// import Image from "../components/styles/Image";
// import Text from "../components/Text";
// import { Grid, Cell } from "@mollycule/lattice";
// import styled from "styled-components";
import { Heading, Text, VStack } from "../components/MzUI";

const Home = () => {
  const startingDate = new Date(2015, 1, 1);
  const endDate = new Date();

  const workingTime = differenceInYears(endDate, startingDate);

  return (
    <Layout>
      <VStack tag="section" space="large">
        <Heading align="center" weight="xstrong">
          Hello there 👋, I'm André Iván.
        </Heading>
        <Text>
          I'm a Venezuelan developer based in Argentina. I've been working as a
          consultant for many clients and companies. Always worked as a{" "}
          <strong>Frontend Developer</strong> for the last {workingTime} years.
        </Text>
      </VStack>
    </Layout>
  );
};

export default Home;
