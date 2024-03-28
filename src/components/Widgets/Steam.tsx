import axios from 'axios';
import classNames from 'classnames';
import { formatDistanceToNow, fromUnixTime } from 'date-fns';
import React, { useEffect } from 'react';
import { FiAlertTriangle } from 'react-icons/fi';
import { BarLoader } from 'react-spinners';
import { toast } from 'sonner';
import colors from 'tailwindcss/colors';
import { getSteamProfile } from '../../api';
import { Box, Paragraph, Stack, Link } from '../UI';

export const Steam = () => {
  const [
    { data: dataProfile, error: errorProfile, isFetching: loadingProfile },
    { data: dataGames, error: errorGames, isFetching: loadingGames },
  ] = getSteamProfile();

  useEffect(() => {
    if (errorProfile || errorGames) {
      if (axios.isAxiosError(errorProfile)) {
        return toast.error(errorProfile.response?.data.message);
      }

      if (axios.isAxiosError(errorGames)) {
        return toast.error(errorGames.response?.data.message);
      }
      
      return toast.error('Something weird happened, please try again.');
    }
  }, [errorProfile, errorGames]);

  if (!dataProfile && loadingProfile && loadingGames) {
    return (
      <Box component="div" paddingY={{ mobile: 'medium' }}>
        <BarLoader color={colors.white} width="100%" />
      </Box>
    )
  }

  if (errorProfile) {
    return (
      <Box component="div">
        <Stack direction={{ mobile: 'horizontal', desktop: 'horizontal' }} space={{ mobile: 2, desktop: 2 }}>
          <FiAlertTriangle color={colors.red[500]} />
          <Paragraph size="xs" color="white">Something weird happened, please try again.</Paragraph>
        </Stack>
      </Box>
    );
  }

  if (dataProfile && dataGames) {
    const lastOnline = formatDistanceToNow(
      new Date(fromUnixTime(dataProfile.lastlogoff)),
      { addSuffix: true }
    );
    
    const createdTime = formatDistanceToNow(
      new Date(fromUnixTime(dataProfile.timecreated))
    );
  
    const statusBadge = classNames('w-4 h-4 rounded-full', {
      'bg-window-red': dataProfile.personastate === 0,
      'bg-window-green': dataProfile.personastate === 1,
      'bg-yellow-600': dataProfile.personastate === 3
    });
  
    const isOffline = [0].includes(dataProfile.personastate);

    const getGamePlaytime = (minutes: number) => {
      return (minutes / 60).toFixed(1);
    };
  
    return (
      <Stack direction={{ mobile: 'vertical', desktop: 'vertical' }} space={{ mobile: 3, desktop: 3 }}>
        <Box component="div" display={{ mobile: 'flex' }} alignItems={{ mobile: 'center' }} justifyContent={{ mobile: 'between' }} className="w-full">
          <Box component="div" flex={{ mobile: 1 }} className="truncate">
            <Stack direction={{ mobile: 'vertical', desktop: 'vertical' }} space={{ mobile: 1, desktop: 1 }}>
              <Box component="div" display={{ mobile: 'flex' }} alignItems={{ mobile: 'center' }} className="space-x-3">
                <Link href={dataProfile.profileurl}>
                  <img className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" src={dataProfile.avatarfull} alt="andre's avatar" />
                </Link>
                <Paragraph size="md" color="whitesmoke" transform="bold" truncate>{dataProfile.personaname}</Paragraph>
                <div className={statusBadge}></div>
              </Box>
            </Stack>
          </Box>
        </Box>
        <Stack direction={{ mobile: 'vertical', desktop: 'vertical' }} space={{ mobile: 2, desktop: 2 }}>
          {isOffline && (
            <Stack direction={{ mobile: 'horizontal', desktop: 'horizontal' }} space={{ mobile: 2, desktop: 2 }}>
              <Paragraph size="xs" color="blue-light">Last online:</Paragraph>
              <Paragraph size="xs" color="white">{ lastOnline }</Paragraph>
            </Stack>
          )}
          <Stack direction={{ mobile: 'horizontal', desktop: 'horizontal' }} space={{ mobile: 2, desktop: 2 }}>
            <Paragraph size="xs" color="blue-light">Account time:</Paragraph>
            <Paragraph size="xs" color="white">{createdTime}</Paragraph>
          </Stack>
          <Stack direction={{ mobile: 'horizontal', desktop: 'horizontal' }} space={{ mobile: 2, desktop: 2 }}>
            <Paragraph size="xs" color="blue-light">Now playing:</Paragraph>
            <Paragraph size="xs" color="white">{ dataProfile?.gameextrainfo ?? 'Nothing' }</Paragraph>
          </Stack>
        </Stack>
        {dataGames && dataGames.length > 0 && (
          <React.Fragment>
            <Paragraph size="lg" color="white" className="oswald-font">Recently played games</Paragraph>
            <Stack direction={{ mobile: 'vertical', desktop: 'vertical' }} space={{ mobile: 3, desktop: 3 }}>
              {dataGames.map(game => {
                const gamePlayTime = getGamePlaytime(game.playtime_forever);
                return (
                  <Box component="div" key={`game-${game.appid}`}>
                    <Stack direction={{ mobile: 'horizontal', desktop: 'horizontal' }} space={{ mobile: 2, desktop: 2 }} className="items-center">
                      <img className="h-10 w-10 flex-shrink-0" src={`http://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`} alt={`game ${game.name}`} />
                      <Stack direction={{ mobile: 'vertical', desktop: 'vertical' }}>
                        <Paragraph size="xs" color="blue-light">Play time:</Paragraph>
                        <Paragraph size="xs" color="white">{ gamePlayTime } hours</Paragraph>
                      </Stack>
                    </Stack>
                  </Box>
                );
              })}
            </Stack>
          </React.Fragment>
        )}
      </Stack>
    );
  }

  return null;
};
