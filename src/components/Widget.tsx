import React from 'react';
import { Box, Paragraph, Stack } from './UI';
import { THEME } from '../types';
import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
  title: string,
  theme?: THEME;
  size?: 'sm' | 'md' | 'lg';
};

const Widget = ({ children, title = 'Widget Title', size = 'md' }: Props) => {
  const widgetClassnames = classNames('rounded-xl shadow-lg hover:shadow-xl p-6 border border-gray-900 bg-black transition duration-150', {
    'w-80': size === 'md',
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
