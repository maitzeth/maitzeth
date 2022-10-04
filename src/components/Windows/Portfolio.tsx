import React from 'react';
import WindowLayout from './WindowLayout';
import { WORK_EXPERIENCE, DATE_FORMAT } from '../../utils/constants';
import { format, isValid } from 'date-fns';
import { Container, Stack, Paragraph } from '../UI';
import { FiMapPin, FiUsers, FiCalendar } from 'react-icons/fi';

const Portfolio = () => {
  return (
    <WindowLayout title="Portfolio">
      <Container size={{ mobile: 'full', desktop: 'large' }}>
        <div className="overflow-hidden bg-white drop-shadow-lg sm:rounded-md">
          <ul role="list" className="divide-y divide-gray-200">
            {WORK_EXPERIENCE.map((work, index) => {
              const isValidDate = isValid(new Date(work.to_date));

              const fromDate = format(new Date(work.from_date), DATE_FORMAT);
              const toDate = isValidDate ? format(new Date(work.from_date), DATE_FORMAT) : work.to_date;

              const fromDateTimeAcc = format(new Date(work.from_date), 'yyyy-MM-dd');
              const toDateTimeAcc = isValidDate ? format(new Date(work.to_date), 'yyyy-MM-dd') : work.to_date;

              return (
                <li key={`work-experience-item-${index}`}>
                  <div className="px-4 py-4 sm:px-6">
                    <Stack direction={{ mobile: 'vertical', desktop: 'horizontal' }} className="items-center justify-between">
                      <div className="flex items-center">
                        <p className="truncate text-sm font-bold text-light-black uppercase">{work.position}</p>
                        <div className="ml-2 flex flex-shrink-0">
                          <p className="inline-flex rounded-full bg-light-black px-3 py-1 text-xs font-semibold leading-5 text-white">{work.contract}</p>
                        </div>
                      </div>
                      <Stack direction={{ mobile: 'vertical', desktop: 'vertical' }} space={{ mobile: 1, desktop: 3 }}>
                        <Paragraph size="xs" color="gray" className="mt-2 flex items-center sm:mt-0 sm:ml-6 lg:justify-end">
                          <FiMapPin size={16} className="mr-1" />
                          {work.location}
                        </Paragraph>
                        <Paragraph size="xs" color="gray" className="flex items-center lg:justify-end">
                          <FiUsers size={16} className="mr-1" />
                          {work.place}
                        </Paragraph>
                        <div className="mt-2 flex items-center sm:mt-0 lg:justify-end">
                          <FiCalendar size={16} className="mr-1" />
                          <Paragraph size="xs" color="gray">
                            <time dateTime={fromDateTimeAcc}>{fromDate}</time>
                            {' - '}
                            {isValidDate ? (
                              <time dateTime={toDateTimeAcc}>{toDate}</time>
                            ) : toDateTimeAcc}
                          </Paragraph>
                        </div>
                      </Stack>
                    </Stack>
                  </div>
                </li>
              );
            }).reverse()}
          </ul>
        </div>
      </Container>
    </WindowLayout>
  );
};

export default Portfolio;
