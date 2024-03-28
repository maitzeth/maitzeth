import { differenceInYears } from 'date-fns';
import { WindowLayout } from './Layout';
import { Stack, Title, Paragraph, Container } from '../UI';
import PhotoOfMe from '@/assets/me.png';

const About = () => {
  const workingTime = differenceInYears(new Date(), new Date(2015, 1, 1));

  return (
    <WindowLayout title="About me">
      <Container component="article" size={{ desktop: 'large', mobile: 'full' }} className="p-4">
        <Stack component="article" direction={{ mobile: 'vertical', desktop: 'horizontal' }} space={{ mobile: 5, desktop: 3 }} className="items-center">
          <Stack direction={{ mobile: 'vertical', desktop: 'vertical' }} space={{ mobile: 2, desktop: 2 }}>
            <Title component='h1'>Hello there 👋, I'm André Iván.</Title>
            <Paragraph>
              I'm a Software Engineer who loves building software with NodeJS, PHP, TypeScript, React, React Native, WordPress, Angular (plus some cool tools like Redux, Next, Jotai, CSS-IN-JS, ReactQuery, SWR, GIT, Storybook, Apollo Client and many more).
            </Paragraph>
            <Paragraph>
              With over {workingTime} years of experience, I'm all about software development. Every day, I'm learning and improving how to make my work better.  
            </Paragraph>
            <Paragraph>
              My strongest skills are around frontend, However, I'm a pragmatic person :) so I can also tackle backend work.
            </Paragraph>
            <Paragraph>
              I'm good at communicating, love learning new things quickly, and enjoy solving software problems.
            </Paragraph>
            <Paragraph>
              My passion? Making UIs that not only look great but also feel amazing to use, with clean and easy-to-understand code. I'm particularly passionate about making websites fast, accessible (A11y), and easy to use.
            </Paragraph>
            <Paragraph>
              Lately, I've been all about making websites fast and easy to use, especially with ReactJS.
            </Paragraph>
            <Paragraph>
              I love my cats 😼, play videogames 🎮 and drums 🥁.
            </Paragraph>
          </Stack>
          <div className="w-[800px]">
            <img src={PhotoOfMe} alt="photo of me and my cats" className="h-auto max-w-full rounded-xl shadow-2xl" />
          </div>
        </Stack>
      </Container>
    </WindowLayout>
  );
};

export default About;
