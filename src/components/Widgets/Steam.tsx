import React, { useEffect } from 'react';
import { Box, Paragraph, Stack } from '../UI';
import classNames from 'classnames';
import { formatDistanceToNow, fromUnixTime } from 'date-fns'; 
import { getSteamStatus } from '../../api';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { BarLoader } from 'react-spinners';
import { toast } from 'sonner';
import { FiAlertTriangle } from 'react-icons/fi';
import colors from 'tailwindcss/colors';
// const data = {
// 	"response": {
// 		"players": [
// 			{
// 				"steamid": "76561198001819899",
// 				"communityvisibilitystate": 3,
// 				"profilestate": 1,
// 				"personaname": "Mz",
// 				"commentpermission": 1,
// 				"profileurl": "https://steamcommunity.com/id/maitzethmz/",
// 				"avatar": "https://avatars.akamai.steamstatic.com/84faa9285150e926157dcdecfbb76dd22cbc246e.jpg",
// 				"avatarmedium": "https://avatars.akamai.steamstatic.com/84faa9285150e926157dcdecfbb76dd22cbc246e_medium.jpg",
// 				"avatarfull": "https://avatars.akamai.steamstatic.com/84faa9285150e926157dcdecfbb76dd22cbc246e_full.jpg",
// 				"avatarhash": "84faa9285150e926157dcdecfbb76dd22cbc246e",
// 				"lastlogoff": 1666358321,
// 				"personastate": 3,
// 				"realname": "André Iván",
// 				"primaryclanid": "103582791430070599",
// 				"timecreated": 1224005166,
// 				"personastateflags": 0,
// 				"gameextrainfo": "Dota 2"
// 			}
// 		]
// 	}
// };

const Steam = () => {
  const { status, data, error, isFetching } = getSteamStatus();

  useEffect(() => {
    if (error) {
      if (axios.isAxiosError(error)) {
        return toast.error(error.response?.data.message);
      }
      
      return toast.error('Something weird happened, please try again.');
    }
  }, [error]);

  // if (isFetching) {
  //   return <BarLoader color={colors.white} width="100%" />
  // }

  if (true) {
    return (
      <Box>
        <Stack direction={{ mobile: 'horizontal', desktop: 'horizontal' }} space={{ mobile: 2, desktop: 2 }}>
          <FiAlertTriangle color={colors.red[500]} />
          <Paragraph size="xs" color="white">Last online:</Paragraph>
        </Stack>
      </Box>
    );
  }

  return <h1>qweqwe</h1>;

  // const lastOnline = formatDistanceToNow(
  //   new Date(fromUnixTime(data.response.players[0].lastlogoff)),
  //   {addSuffix: true}
  // );
  
  // const createdTime = formatDistanceToNow(
  //   new Date(fromUnixTime(data.response.players[0].timecreated)),
  //   {addSuffix: true}
  // );

  // const statusBadge = classNames({
  //   'w-4 h-4 bg-window-red rounded-full': data.response.players[0].personastate === 0,
  //   'w-4 h-4 bg-window-green rounded-full': data.response.players[0].personastate === 1,
  //   'w-4 h-4 bg-yellow-600 rounded-full': data.response.players[0].personastate === 3
  // });

  // const isOnline = data.response.players[0]?.gameextrainfo;

  // return (
  //   <Stack direction={{ mobile: 'vertical', desktop: 'vertical' }} space={{ mobile: 3, desktop: 3 }}>
  //     <Box display={{ mobile: 'flex' }} alignItems={{ mobile: 'center' }} justifyContent={{ mobile: 'between' }} className="w-full">
  //       <Box flex={{ mobile: 1 }} className="truncate">
  //         <Stack direction={{ mobile: 'vertical', desktop: 'vertical' }} space={{ mobile: 1, desktop: 1 }}>
  //           <Box display={{ mobile: 'flex' }} alignItems={{ mobile: 'center' }} className="space-x-3">
  //             <Paragraph size="md" color="whitesmoke" transform="bold" truncate>{data.response.players[0].personaname}</Paragraph>
  //             <div className={statusBadge}></div>
  //           </Box>
  //         </Stack>
  //       </Box>
  //       <img className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" src={data.response.players[0].avatarfull} alt="andre's avatar" />
  //     </Box>
  //     <Stack direction={{ mobile: 'vertical', desktop: 'vertical' }} space={{ mobile: 2, desktop: 2 }}>
  //       {!isOnline && (
  //         <Stack direction={{ mobile: 'horizontal', desktop: 'horizontal' }} space={{ mobile: 2, desktop: 2 }}>
  //           <Paragraph size="xs" color="blue-light">Last online:</Paragraph>
  //           <Paragraph size="xs" color="white">{ lastOnline }</Paragraph>
  //         </Stack>
  //       )}
  //       <Stack direction={{ mobile: 'horizontal', desktop: 'horizontal' }} space={{ mobile: 2, desktop: 2 }}>
  //         <Paragraph size="xs" color="blue-light">Account time:</Paragraph>
  //         <Paragraph size="xs" color="white">{ createdTime }</Paragraph>
  //       </Stack>
  //       <Stack direction={{ mobile: 'horizontal', desktop: 'horizontal' }} space={{ mobile: 2, desktop: 2 }}>
  //         <Paragraph size="xs" color="blue-light">Playing:</Paragraph>
  //         <Paragraph size="xs" color="white">{ data.response.players[0]?.gameextrainfo }</Paragraph>
  //       </Stack>
  //     </Stack>
  //   </Stack>
  // );
};

export default Steam;
