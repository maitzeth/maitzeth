import { format } from 'date-fns';

export const DATE_FORMAT = 'LLLL yyyy';

export const WORK_EXPERIENCE = [
  {
    position: 'HTML/CSS Instructor',
    location: 'Caracas, Venezuela',
    place: 'Escuela Web LLC',
    from_date: format(new Date('2015-08-01'), DATE_FORMAT),
    to_date: format(new Date('2018-04-01'), DATE_FORMAT),
    contract: 'Part-time'
  },
  {
    position: 'Front-End Developer',
    location: 'Buenos Aires, Argentina',
    place: 'EGO Agency',
    from_date: format(new Date('2018-06-01'), DATE_FORMAT),
    to_date: format(new Date('2019-04-01'), DATE_FORMAT),
    contract: 'Full-time'
  },
  {
    position: 'Front-End Developer and React-Native Developer',
    location: 'Buenos Aires, Argentina',
    place: 'Braintly',
    from_date: format(new Date('2019-05-01'), DATE_FORMAT),
    to_date: format(new Date('2020-11-01'), DATE_FORMAT),
    contract: 'Full-time'
  },
  {
    position: 'Web Development Consultant',
    location: 'Remote',
    place: 'Freelance',
    from_date: format(new Date('2016-07-01'), DATE_FORMAT),
    to_date: 'Current',
    contract: 'Full-time'
  },
  {
    position: 'Software Engineer',
    location: 'New York - Buenos Aires',
    place: 'Revolt',
    from_date: format(new Date('2021-02-01'), DATE_FORMAT),
    to_date: 'Current',
    contract: 'Full-time'
  }
];
