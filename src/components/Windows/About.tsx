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
          <Stack direction={{ mobile: 'horizontal', desktop: 'vertical' }} space={{ mobile: 10, desktop: 5 }}>
            <Title component='h1'>Hello there 👋, I'm André Iván.</Title>
            <Title component='h1'>Hello there 👋, I'm André Iván.</Title>
          </Stack>
        </section>
        <section></section>
      </div>
    </WindowLayout>
  );
};

export default About;
