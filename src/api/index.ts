import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export const getWeather = () => {
  return useQuery(["posts"], async () => {
    const { data } = await axios.get(
      "https://goweather.herokuapp.com/weather/argentina"
    );
    return data;
  });
}

export const getYuGiCard = () => {
  return useQuery(["yugioh"], async () => {
    return await axios.get("https://db.ygoprodeck.com/api/v7/randomcard.php");
  }, {
    enabled: false,
  });
}

export const getSteamStatus = () => {
  return useQuery(["steam"], async () => {
    const { data } = await axios.get('http://localhost:3000');
    return data;
  });
};
