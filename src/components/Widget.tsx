import React from 'react';
import { Box, Paragraph, Stack } from './UI';
import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
  title: string,
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
};

const Widget = ({ children, title = 'Widget Title', size = 'md', theme = 'dark' }: Props) => {
  const widgetClassnames = classNames('rounded-xl shadow-lg hover:shadow-xl p-6 transition duration-150', {
    'w-96': size === 'lg',
    'w-80': size === 'md',
    'bg-black': theme === 'dark',
    'bg-gray-200': theme === 'light',
  });

  return (
    <Box component="article" className={widgetClassnames}>
      <Stack direction={{ mobile: 'vertical', desktop: 'vertical' }} space={{ mobile: 2, desktop: 2 }}>
        <Paragraph uppercase color="blue-light">{title}</Paragraph>
        {children}
      </Stack>
    </Box>
  );
};

export default Widget;
