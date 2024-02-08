import { format } from 'date-fns';

export const DATE_FORMAT = 'LLLL yyyy';

export const WINDOW_HEIGHT_SIZE = 'calc(100vh - 35px)';

export const WORK_EXPERIENCE = [
  {
    position: 'HTML/CSS Instructor',
    location: 'Caracas, Venezuela',
    place: 'Escuela Web LLC',
    from_date: format(new Date('2015-08-01'), DATE_FORMAT),
    to_date: format(new Date('2018-04-01'), DATE_FORMAT),
    contract: 'Part-time',
    description: 'Worked as an in-house teacher, teaching HTML5, and CSS3 and introducing Javascript using jQuery all from scratch.'
  },
  {
    position: 'Front-End Developer',
    location: 'Buenos Aires, Argentina',
    place: 'EGO Agency',
    from_date: format(new Date('2018-06-01'), DATE_FORMAT),
    to_date: format(new Date('2019-04-01'), DATE_FORMAT),
    contract: 'Full-time',
    description: 'Worked on developing new features, code maintenance, and re-writing code to get better performance and improving UX, using AngularJS'
  },
  {
    position: 'Front-End Developer and React-Native Developer',
    location: 'Buenos Aires, Argentina',
    place: 'Braintly',
    from_date: format(new Date('2019-05-01'), DATE_FORMAT),
    to_date: format(new Date('2020-11-01'), DATE_FORMAT),
    contract: 'Full-time',
    description: 'Helped to define architecture, tooling, and build UI of multiple applications, always using the ReactJS ecosystem and working with tools and technologies such as React, Formik, Redux, CSS-In-JS, React Native, and many many more.'
  },
  {
    position: 'Software Engineer',
    location: 'New York - Buenos Aires',
    place: 'Revolt',
    from_date: format(new Date('2021-02-01'), DATE_FORMAT),
    to_date: 'Current',
    contract: 'Full-time',
    description: 'Here I am a Software Engineer, building, maintaining, reviewing, and helping other developers in every way possible. Choosing and working with multiple technologies that fit on every project such as Angular, React, PHP, NodeJS, Javascript, and TypeScript in general. Leading, organizing and working with multiple developers to finish a projects/apps/tasks with the best performance and quality possible.'
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
