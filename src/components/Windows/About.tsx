import React from 'react';
import { differenceInYears } from 'date-fns';
import WindowLayout from './WindowLayout';
import { Stack, Title, Paragraph } from '../UI';

const About = () => {
  const workingTime = differenceInYears(new Date(), new Date(2015, 1, 1));

  return (
    <WindowLayout title="About me">
      <div>
        <section>
          <Stack direction={{ mobile: 'vertical' }} space={{ mobile: 3 }}>
            <Title component='h1'>Hello there 👋, I'm André Iván.</Title>
            <Stack direction={{ mobile: 'vertical' }} space={{ mobile: 3 }}>
              <Paragraph>
                I'm a Venezuelan developer based in Argentina. I've been working as
                a consultant for many clients and companies. Always worked as a{" "}
                <strong>Frontend Developer</strong> for the last {workingTime}{" "}
                years.
              </Paragraph>
              <Paragraph>
                In my main focus is work as a <strong>Frontend developer</strong>{" "}
                but I have some experience with{" "}
                <strong>Backend technologies</strong> like node but is not my
                strongest skill.
              </Paragraph>
              <Paragraph>
                My works in the last couple of years has been in React that I am a
                huge fan of it's technology and ecosystem. (This site was made with
                Next.js 💕).
              </Paragraph>
            </Stack>
          </Stack>
        </section>
        <section></section>
      </div>
    </WindowLayout>
  );
};

export default About;
