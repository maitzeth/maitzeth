import axios from 'axios';
import classNames from 'classnames';
import { formatDistanceToNow, fromUnixTime } from 'date-fns';
import { useEffect } from 'react';
import { FiAlertTriangle } from 'react-icons/fi';
import { BarLoader } from 'react-spinners';
import { toast } from 'sonner';
import colors from 'tailwindcss/colors';
import { getSteamStatus } from '../../api';
import { Box, Paragraph, Stack } from '../UI';

const Steam = () => {
  const { data, error, isFetching } = getSteamStatus();

  useEffect(() => {
    if (error) {
      if (axios.isAxiosError(error)) {
        return toast.error(error.response?.data.message);
      }
      
      return toast.error('Something weird happened, please try again.');
    }
  }, [error]);

  if (!data && isFetching) {
    return (
      <Box paddingY={{ mobile: 'medium' }}>
        <BarLoader color={colors.white} width="100%" />
      </Box>
    )
  }

  if (error) {
    return (
      <Box>
        <Stack direction={{ mobile: 'horizontal', desktop: 'horizontal' }} space={{ mobile: 2, desktop: 2 }}>
          <FiAlertTriangle color={colors.red[500]} />
          <Paragraph size="xs" color="white">Something weird happened, please try again.</Paragraph>
        </Stack>
      </Box>
    );
  }

  const lastOnline = formatDistanceToNow(
    new Date(fromUnixTime(data.lastlogoff)),
    { addSuffix: true }
  );
  
  const createdTime = formatDistanceToNow(
    new Date(fromUnixTime(data.timecreated)),
    { addSuffix: true }
  );

  const statusBadge = classNames({
    'w-4 h-4 bg-window-red rounded-full': data.personastate === 0,
    'w-4 h-4 bg-window-green rounded-full': data.personastate === 1,
    'w-4 h-4 bg-yellow-600 rounded-full': data.personastate === 3
  });

  const isOnline = !data?.gameextrainfo || data.personastate !== 1;

  return (
    <Stack direction={{ mobile: 'vertical', desktop: 'vertical' }} space={{ mobile: 3, desktop: 3 }}>
      <Box display={{ mobile: 'flex' }} alignItems={{ mobile: 'center' }} justifyContent={{ mobile: 'between' }} className="w-full">
        <Box flex={{ mobile: 1 }} className="truncate">
          <Stack direction={{ mobile: 'vertical', desktop: 'vertical' }} space={{ mobile: 1, desktop: 1 }}>
            <Box display={{ mobile: 'flex' }} alignItems={{ mobile: 'center' }} className="space-x-3">
              <Paragraph size="md" color="whitesmoke" transform="bold" truncate>{data.personaname}</Paragraph>
              <div className={statusBadge}></div>
            </Box>
          </Stack>
        </Box>
        <img className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" src={data.avatarfull} alt="andre's avatar" />
      </Box>
      <Stack direction={{ mobile: 'vertical', desktop: 'vertical' }} space={{ mobile: 2, desktop: 2 }}>
        {isOnline && (
          <Stack direction={{ mobile: 'horizontal', desktop: 'horizontal' }} space={{ mobile: 2, desktop: 2 }}>
            <Paragraph size="xs" color="blue-light">Last online:</Paragraph>
            <Paragraph size="xs" color="white">{ lastOnline }</Paragraph>
          </Stack>
        )}
        <Stack direction={{ mobile: 'horizontal', desktop: 'horizontal' }} space={{ mobile: 2, desktop: 2 }}>
          <Paragraph size="xs" color="blue-light">Account time:</Paragraph>
          <Paragraph size="xs" color="white">{ createdTime }</Paragraph>
        </Stack>
        <Stack direction={{ mobile: 'horizontal', desktop: 'horizontal' }} space={{ mobile: 2, desktop: 2 }}>
          <Paragraph size="xs" color="blue-light">Playing:</Paragraph>
          <Paragraph size="xs" color="white">{ data?.gameextrainfo ?? 'Nothing' }</Paragraph>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Steam;
