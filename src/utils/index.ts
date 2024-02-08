import theme from 'tailwindcss/defaultTheme';
import { ScreensConfig } from '../types';
import classNames, { type ArgumentArray } from 'classnames';
import { twMerge } from 'tailwind-merge';

export const getWindowSizes = () => {
  const { screens } = theme;
  const parsedScreens = screens as ScreensConfig<string>;

  return Object.keys(parsedScreens).reduce((prev, key) => {
    const { 0: value } = parsedScreens[key].split('px');
    prev[key] = Number(value);
    return prev;
  }, {} as ScreensConfig<number>);
};

export const cn = (...inputs: ArgumentArray) => {
  return twMerge(classNames(inputs));
};
