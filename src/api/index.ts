import axios from 'axios';
import { useQueries, useQuery } from '@tanstack/react-query';

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

interface GithubData {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  hireable: boolean;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export const getSteamProfile = () => {
  return useQueries({
    queries: [
      {
        queryKey: ['steamProfile', 1],
        queryFn: async (): Promise<SteamProfile> => {
          const { data } = await axios.get('https://andre-me-api.onrender.com/profile');
          return data.data;
        },
        refetchOnWindowFocus: false,
      },
      {
        queryKey: ['steamGames', 2],
        queryFn: async (): Promise<SteamGames[]>  => {
          const { data } = await axios.get('https://andre-me-api.onrender.com/games');
          return data.data;
        },
        refetchOnWindowFocus: false,
      }
    ],
  });
};

export const getPublicGithubData = () => {
  return useQuery(['githubData'], async (): Promise<GithubData> => {
    const response = await axios.get<GithubData>('https://api.github.com/users/maitzeth');
    return response.data;
  }, {
    refetchOnWindowFocus: false,
  });
};
