import { format } from 'date-fns';
import { Paragraph } from '@/components/UI';

export const DATE_FORMAT = 'LLLL yyyy';

export const WINDOW_HEIGHT_SIZE = 'calc(100vh - 35px)';

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

export const TW_CONFIG = {
  extend: {
    backgroundImage: {
      app: "url('/src/assets/background.webp')",
    },
    colors: {
      "window-header": "#393939",
      silver: "#abacae",
      navbar: "#1d1d1d",
      window: {
        red: "#e5635b",
        green: "#39ac48",
      },
      black: {
        DEFAULT: "#333333",
        light: "#4d4d4d",
      },
      blue: {
        light: "#6693e8",
      },
    },
    width: {
      desktop: "768px",
    },
    height: {
      navbar: "35px",
    },
  },
}
