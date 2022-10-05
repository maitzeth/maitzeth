import theme from 'tailwindcss/defaultTheme';
import { ScreensConfig } from '../types';

export const getWindowSizes = () => {
  const { screens } = theme;
  const parsedScreens = screens as ScreensConfig<string>;

  return Object.keys(parsedScreens).reduce((prev, key) => {
    const { 0: value } = parsedScreens[key].split('px');
    prev[key] = Number(value);
    return prev;
  }, {} as ScreensConfig<number>);
};
