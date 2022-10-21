import React from 'react';
import { Stack, Paragraph, Box } from './UI';
import { FiMapPin, FiUsers, FiCalendar, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { DATE_FORMAT } from '../utils/constants';
import { format, isValid } from 'date-fns';

type Props = {
  onClick: (tabId: number) => void;
  position: string;
  contract: string;
  location: string;
  place: string;
  from_date: string;
  to_date: string;
  id: number;
  isSelected: boolean;
}

const WorkExperienceTab = ({ onClick, to_date, from_date, position, contract, location, place, id, isSelected }: Props) => {
  const isValidDate = isValid(new Date(to_date));
  const fromDate = format(new Date(from_date), DATE_FORMAT);
  const toDate = isValidDate ? format(new Date(from_date), DATE_FORMAT) : to_date;
  const fromDateTimeAcc = format(new Date(from_date), 'yyyy-MM-dd');
  const toDateTimeAcc = isValidDate ? format(new Date(to_date), 'yyyy-MM-dd') : to_date;

  return (
    <div tabIndex={0} role="button" aria-pressed="false" className="px-4 py-4 sm:px-6" onClick={() => onClick(id)}>
      <Stack direction={{ mobile: 'vertical', desktop: 'horizontal' }} className="items-center justify-between">
        <Box display={{ mobile: 'flex' }} alignItems={{ mobile: 'center' }} gap={{ mobile: 'small' }}>
          <Box>
            {isSelected ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}
          </Box>
          <Paragraph size="sm" color="gray" truncate>
            {position}
          </Paragraph>
          <Box flexShrink={{ mobile: 0 }}>
            <p className="inline-flex rounded-full bg-black-light px-3 py-1 text-xs font-semibold leading-5 text-white">{contract}</p>
          </Box>
        </Box>
        <Stack direction={{ mobile: 'vertical', desktop: 'vertical' }} space={{ mobile: 1, desktop: 3 }}>
          <Paragraph size="xs" color="gray" className="mt-2 flex items-center sm:mt-0 sm:ml-6 lg:justify-end">
            <FiMapPin size={16} className="mr-1" />
            {location}
          </Paragraph>
          <Box display={{ mobile: 'flex' }} alignItems={{ mobile: 'center' }} justifyContent={{ mobile: 'end' }}>
            <FiUsers size={16} className="mr-1" />
            <Paragraph size="xs" color="gray">
              {place}
            </Paragraph>
          </Box>
          <Box marginTop={{ mobile: 'small' }} display={{ mobile: 'flex' }} alignItems={{ mobile: 'center' }} justifyContent={{ mobile: 'end' }}>
            <FiCalendar size={16} className="mr-1" />
            <Paragraph size="xs" color="gray">
              <time dateTime={fromDateTimeAcc}>{fromDate}</time>
              {' - '}
              {isValidDate ? (
                <time dateTime={toDateTimeAcc}>{toDate}</time>
              ) : toDateTimeAcc}
            </Paragraph>
          </Box>
        </Stack>
      </Stack>
    </div>
  )
}

export default React.memo(WorkExperienceTab);
