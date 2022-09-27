import React from 'react';
import { differenceInYears } from 'date-fns';
import WindowLayout from './WindowLayout';
import { Stack, Title, Paragraph, Container } from '../UI';
import PhotoOfMe from '../../assets/me.png';

const About = () => {
  const workingTime = differenceInYears(new Date(), new Date(2015, 1, 1));

  return (
    <WindowLayout title="About me">
      <Container component="article" size={{ desktop: 'large', mobile: 'full' }} className="p-4">
        <Stack component="article" direction={{ mobile: 'vertical', desktop: 'horizontal' }} space={{ mobile: 5, desktop: 3 }} className="items-center">
          <Stack direction={{ mobile: 'vertical', desktop: 'vertical' }} space={{ mobile: 2, desktop: 2 }}>
            <Title component='h1'>Hello there 👋, I'm André Iván.</Title>
            <Paragraph>
              I'm a Venezuelan developer based in Argentina. I've been working as
              web development consultant for many clients and companies for the last {workingTime}{" "}
              years.
            </Paragraph>
            <Paragraph>
              My biggest engineering skill is work as a <strong>Front-end developer</strong>{" "}
              I've working with <strong>Backend technologies</strong> like NodeJS, PHP but it is not my
              strongest skill.
            </Paragraph>
            <Paragraph>
              My works in the last couple of years has been in React that I am a
              huge fan of it's technology and ecosystem.
            </Paragraph>
            <Paragraph>
              I love my cats 😼, play videogames 🎮 and drums 🥁.
            </Paragraph>
          </Stack>
          <div>
            <img src={PhotoOfMe} alt="photo of me and my cats" className="h-auto max-w-full rounded-xl shadow-2xl" />
          </div>
        </Stack>
      </Container>
    </WindowLayout>
  );
};

export default About;
