import { WindowLayout } from './Layout';
import { WORK_EXPERIENCE } from '@/utils/constants';
import { Container, Box, Paragraph, Stack } from '@/components/UI';
import { FiMapPin, FiUsers, FiCalendar, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { format, isValid } from 'date-fns';

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
