import { differenceInYears } from 'date-fns';
import { WindowLayout } from './Layout';
import { Stack, Title, Paragraph, Container } from '../UI';
import PhotoOfMe from '@/assets/me.png';

const About = () => {
  const workingTime = differenceInYears(new Date(), new Date(2015, 1, 1));

  return (
    <WindowLayout title="About me" centeredContent>
      <Container component="article" size={{ desktop: 'large', mobile: 'full' }} className="p-4">
        <Stack component="article" direction={{ mobile: 'vertical', desktop: 'horizontal' }} space={{ mobile: 5, desktop: 3 }} className="items-center">
          <Stack direction={{ mobile: 'vertical', desktop: 'vertical' }} space={{ mobile: 2, desktop: 2 }}>
            <Title component='h1'>Hello there 👋, I'm André Iván.</Title>
            <Paragraph>
              I'm a Software Engineer, currently based in Argentina. With over {workingTime} years of experience in web development, I have been providing expert consultancy services to numerous clients and companies.
            </Paragraph>
            <Paragraph>
              I'm a Software Engineer that's passionate about building UI's and love crafting seamless user experiences and interfaces with beautiful and developer-friendly code. Over the past couple of years, my main focus has been around Design Systems, Performance, Accessibility in Web Development using React and its ecosystem.
            </Paragraph>
            <Paragraph>
              My strongest skills are around frontend development. However, I'm a pragmatic person :) so i can also tackle backend work.
            </Paragraph>
            <Paragraph>
              I like to create software solutions that leave an impact on both users, businesses and developers.
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
