import { WindowLayout } from './Layout';
import { DATE_FORMAT } from '@/utils/constants';
import { Container, Box, Paragraph, Stack } from '@/components/UI';
import { FiMapPin, FiUsers, FiCalendar, FiChevronDown, FiChevronUp } from 'react-icons/fi';
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
      <Paragraph size="sm" color="light-gray">
        I had the opportunity to work with HTML5, CSS3, PHP, Wordpress and a lots of technologies. For over 4 years, I had successfully provided my services for numerous clients, bringing their ideas to life and deliver solutions that meet the unique requirements of each project and make my clients happy :)
      </Paragraph>
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
      <Paragraph size="sm" color="light-gray">
        I helped a total of 145 people during this time, in successfully completing their graduation process by providing comprehensive guidance on the fundamental concepts of HTML5, CSS3, and JavaScript. Actively helping them with the finalization of a final project, ensuring the attainment of required grades and enabling successful acquisition of their degrees.
      </Paragraph>
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
      <Paragraph size="sm" color="light-gray">
        Using AngularJS 1.6, I contributed to building new features while also performing maintenance on legacy code. Additionally, I took the tasks of re-doing old modules to enhance performance and reduce load times. Through refactoring CSS, improving caching mechanisms, and optimizing functions for faster calculations, I achieved a significant improvement of almost 20% in performance. These efforts directly translated into a better user experience for the application.
      </Paragraph>
    ),
  },
  {
    position: 'Front End Developer | React Specialist',
    location: 'Buenos Aires, Argentina',
    place: 'Braintly',
    from_date: format(new Date('2019-05-01'), DATE_FORMAT),
    to_date: format(new Date('2020-11-01'), DATE_FORMAT),
    contract: 'Full-time',
    description: (
      <Paragraph size="sm" color="light-gray">
        Experienced in Front-End Developer focused on optimizing UI development processes for successful product delivery. I am proficient in the ReactJS ecosystem like Formik, Redux, CSS-In-JS, and React Native. Skilled int building UIs while collaborating on cross-functional architectural decisions. My proactive problem-solving approach and unwavering commitment to best practices consistently streamline development, resulting in enhanced user experiences.
      </Paragraph>
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
      <Paragraph size="sm" color="light-gray">
        <ul className="list-disc pl-5">
          <li>Helped build new products for multiple clients and maintaining legacy applications.</li>
          <li>Build Design Systems for multiple projects.</li>
          <li>Develop web applications using React, Next, React Native, Typescript, Node, GraphQL, CSS-In-JS, Tailwind, Angular. </li>
          <li>Mentor engineers to help them grow in their carrers inside the company.</li>
          <li>Setup Front-End Infrastructure to improve workflow and make all process easier for all engineers, using Vite, Storybook and using tools like husky to enhance the commit messages and pre-push/pre-commit options.</li>
        </ul>
      </Paragraph>
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
