import theme from 'tailwindcss/defaultTheme';

export const getWindowSizes = () => {
  const { screens } = theme;

  const parsedScreens = screens as any;

  return Object.keys(parsedScreens).reduce((prev, key) => {
    const { 0: value } = parsedScreens[key].split('px');
    prev[key] = Number(value);
    return prev;
  }, {} as any);
};
