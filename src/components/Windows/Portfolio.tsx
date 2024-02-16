import { WindowLayout } from './Layout';
import { DATE_FORMAT } from '@/utils/constants';
import { Container, Box, Paragraph, Stack } from '@/components/UI';
import { FiMapPin, FiUsers, FiCalendar } from 'react-icons/fi';
import { format, isValid } from 'date-fns';

export const WORK_EXPERIENCE = [
  {
    position: 'Web Development Consultant',
    location: 'Caracas, Venezuela',
    place: 'Freelancer',
    from_date: format(new Date('2014-08-01'), DATE_FORMAT),
    to_date: format(new Date('2018-04-01'), DATE_FORMAT),
    contract: 'Full Time',
    description: (
      <ul className="list-disc pl-5">
        <li>
          <Paragraph size="sm" color="light-gray">
            Had the opportunity to work with multiple clients by providing services of consulting and development.
          </Paragraph>
        </li>
        <li>
          <Paragraph size="sm" color="light-gray">
            Develop web applications using HTML, CSS3, PHP, Wordpress, React, Angular, jQuery.
          </Paragraph>
        </li>
        <li>
          <Paragraph size="sm" color="light-gray">
            Deliver solutions that meet the unique requirements of each project and make my clients happy :)
          </Paragraph>
        </li>
      </ul>
    ),
  },
  {
    position: 'HTML/CSS Instructor',
    location: 'Caracas, Venezuela',
    place: 'Escuela Web LLC',
    from_date: format(new Date('2016-02-01'), DATE_FORMAT),
    to_date: format(new Date('2018-04-01'), DATE_FORMAT),
    contract: 'Part-time',
    description: (
      <ul className="list-disc pl-5">
        <li>
          <Paragraph size="sm" color="light-gray">
            Helped a total of 145 people during this time, in successfully completing their graduation process by providing comprehensive guidance on the fundamental concepts of HTML5, CSS3, and JavaScript.
          </Paragraph>
        </li>
      </ul>
    ),
  },
  {
    position: 'Front-End Developer',
    location: 'Buenos Aires, Argentina',
    place: 'EGO Agency',
    from_date: format(new Date('2018-06-01'), DATE_FORMAT),
    to_date: format(new Date('2019-04-01'), DATE_FORMAT),
    contract: 'Full-time',
    description: (
      <ul className="list-disc pl-5">
        <li>
          <Paragraph size="sm" color="light-gray">
            Helped in the development of new features for an internal product at a large company, while also performing maintenance work to address bugs.
          </Paragraph>
        </li>
        <li>
          <Paragraph size="sm" color="light-gray">
            Undertook the task of redesigning old modules to improve performance and reduce load times, achieved by measuring the computation times of numerous functions.
          </Paragraph>
        </li>
        <li>
          <Paragraph size="sm" color="light-gray">
            Configured a Babel setup with Gulp to ensure new feature code using ES6 are compatible with IE11.
          </Paragraph>
        </li>
        <li>
          <Paragraph size="sm" color="light-gray">
            Improving and optimizing loading times by enhancing CSS and JS minification, setting up an automation process for building for production using Gulp.
          </Paragraph>
        </li>
      </ul>
    ),
  },
  {
    position: 'Front End Developer | React Specialist',
    location: 'Buenos Aires, Argentina',
    place: 'Braintly',
    from_date: format(new Date('2019-05-01'), DATE_FORMAT),
    to_date: format(new Date('2020-12-01'), DATE_FORMAT),
    contract: 'Full-time',
    description: (
      <ul className="list-disc pl-5">
        <li>
          <Paragraph size="sm" color="light-gray">
            Helped in the development of new products for multiple clients while also maintaining legacy applications within the React ecosystem.
          </Paragraph>
        </li>
        <li>
          <Paragraph size="sm" color="light-gray">
            Worked to develop the company's first React Native application for a client using a WebRTC SDK.
          </Paragraph>
        </li>
        <li>
          <Paragraph size="sm" color="light-gray">
            Contributed to enhancing the efficiency of component and UI development inside the company by collaborating with the team lead to establish and construct an internal UI Components library.
          </Paragraph>
        </li>
      </ul>
    ),
  },
  {
    position: 'Software Engineer',
    location: 'New York - Buenos Aires',
    place: 'Revolt',
    from_date: format(new Date('2021-02-01'), DATE_FORMAT),
    to_date: 'Current',
    contract: 'Full-time',
    description: (
        <ul className="list-disc pl-5">
          <li>
            <Paragraph size="sm" color="light-gray">
              Develop web applications using React, Next, React Native, Typescript, Node, GraphQL, CSS-In-JS, Tailwind, Angular. 
            </Paragraph>
          </li>
          <li>
            <Paragraph size="sm" color="light-gray">
              Helped build new products for multiple clients and maintain legacy applications by adding new features and fixing bugs.
            </Paragraph>
          </li>
          <li>
            <Paragraph size="sm" color="light-gray">
              Worked directly with UI/UX team to build components based on a Design Systems.
            </Paragraph>
          </li>
          <li>
            <Paragraph size="sm" color="light-gray">
              Mentor co-workers from engineering team to help them grow in their career path inside the company.
            </Paragraph>
          </li>
          <li>
            <Paragraph size="sm" color="light-gray">
              Setting up Front-End Infrastructure to improve workflow and easier for all engineers, using Vite with React, Storybook, Git Hooks with Husky, Jotai or Recoil stores, HTTP Data Fetching with SRW/ReactQuery for API Rest or Apollo Client for GraphQL projects.
            </Paragraph>
          </li>
        </ul>
    ),
  }
];

const Portfolio = () => {
  return (
    <WindowLayout title="Portfolio">
      <Container size={{ mobile: 'full', desktop: 'large' }} className="flex-1">
        <Box component="div" overflow={{ mobile: 'hidden' }} borderRadius={{ mobile: 'medium' }} className="bg-white drop-shadow-lg">
          <Box component="ul" role="list" className="divide-y">
            {WORK_EXPERIENCE.map((work, index) => {
              const { position, location, place, from_date, to_date, contract } = work;

              const id = `work-experience-item-${index}`;
              const isValidDate = isValid(new Date(to_date));

              const fromDateTimeAcc = format(new Date(from_date), 'yyyy-MM-dd');
              const toDateTimeAcc = isValidDate ? format(new Date(to_date), 'yyyy-MM-dd') : to_date;

              return (
                <Box component="li" key={id} id={id}>
                  <div className="px-4 py-4 sm:px-6">
                    <Stack direction={{ mobile: 'vertical', desktop: 'horizontal' }} className="">
                      <Stack direction={{ mobile: 'vertical', desktop: 'vertical' }} space={{ mobile: 3, desktop: 3 }} className="flex-1">
                        <Box component="div" display={{ mobile: 'flex' }} alignItems={{ mobile: 'center' }} gap={{ mobile: 'small' }}>
                          <Paragraph size="sm" color="gray" truncate>
                            {position}
                          </Paragraph>
                          <Box component="div" flexShrink={{ mobile: 0 }}>
                            <p className="inline-flex rounded-full bg-black-light px-3 py-1 text-xs font-semibold leading-5 text-white">{contract}</p>
                          </Box>
                        </Box>
                        {work.description}
                      </Stack>
                      <Stack direction={{ mobile: 'vertical', desktop: 'vertical' }} space={{ mobile: 1, desktop: 3 }}>
                        <Box component="div" display={{ mobile: 'flex' }} alignItems={{ mobile: 'center' }} justifyContent={{ mobile: 'end' }}>
                          <Paragraph size="xs" color="gray" className="mt-2 flex items-center">
                            <span>
                              <FiMapPin size={16} className="mr-1" />
                            </span>
                            {location}
                          </Paragraph>
                        </Box>
                        <Box component="div" display={{ mobile: 'flex' }} alignItems={{ mobile: 'center' }} justifyContent={{ mobile: 'end' }}>
                          <span>
                            <FiUsers size={16} className="mr-1" />
                          </span>
                          <Paragraph size="xs" color="gray">
                            {place}
                          </Paragraph>
                        </Box>
                        <Box component="div" marginTop={{ mobile: 'small' }} display={{ mobile: 'flex' }} alignItems={{ mobile: 'center' }} justifyContent={{ mobile: 'end' }}>
                          <span>
                            <FiCalendar size={16} className="mr-1" />
                          </span>
                          <Paragraph size="xs" color="gray">
                            <time dateTime={fromDateTimeAcc}>{from_date}</time>
                            {' - '}
                            {isValidDate ? (
                              <time dateTime={toDateTimeAcc}>{to_date}</time>
                            ) : toDateTimeAcc}
                          </Paragraph>
                        </Box>
                      </Stack>
                    </Stack>
                  </div>
                </Box>
              );
            }).reverse()}
          </Box>
        </Box>
      </Container>
    </WindowLayout>
  );
};

export default Portfolio;
