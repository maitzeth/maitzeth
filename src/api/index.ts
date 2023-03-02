import axios from 'axios';
import { useQueries, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';

interface SteamProfile {
  steamid: string;
  communityvisibilitystate: number;
  profilestate: number;
  personaname: string;
  commentpermission: number;
  profileurl: string;
  avatar: string;
  avatarmedium: string;
  avatarfull: string;
  avatarhash: string;
  lastlogoff: number;
  personastate: number;
  realname: string;
  primaryclanid: string;
  timecreated: number;
  personastateflags: number;
  gameextrainfo?: number;
}

interface SteamGames {
  appid: number;
  name: string;
  playtime_2weeks: number;
  playtime_forever: number;
  img_icon_url: string;
  playtime_windows_forever: number;
  playtime_mac_forever: number;
  playtime_linux_forever: number;
}

export const getSteamProfile = () => {
  return useQueries({
    queries: [
      {
        queryKey: ['steamProfile', 1],
        queryFn: async (): Promise<SteamProfile> => {
          const { data } = await axios.get('https://andre-me-api.onrender.com/profile');
          return data.data;
        }
      },
      {
        queryKey: ['steamGames', 2],
        queryFn: async (): Promise<SteamGames[]>  => {
          const { data } = await axios.get('https://andre-me-api.onrender.com/games');
          return data.data;
        }
      }
    ]
  });
};
