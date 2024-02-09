import { PropsWithChildren, ReactNode } from 'react';
import { Box, Paragraph, Stack } from './UI';
import { cn } from '@/utils';

type Props = PropsWithChildren<{
  title: string,
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  icon: ReactNode;
}>;

export const Widget = ({ children, title = 'Widget Title', size = 'md', theme = 'dark', icon }: Props) => {
  const widgetClassnames = cn('rounded-md shadow-lg hover:shadow-xl p-6 transition duration-150', {
    'w-96': size === 'lg',
    'w-80': size === 'md',
    'bg-black bg-opacity-80': theme === 'dark',
    'bg-gray-200 bg-opacity-80': theme === 'light',
  });

  return (
    <Box component="article" className={widgetClassnames}>
      <Stack direction={{ mobile: 'vertical', desktop: 'vertical' }} space={{ mobile: 4, desktop: 4 }}>
        <Stack direction={{ mobile: 'horizontal', desktop: 'horizontal' }} className="items-center justify-between">
          <Paragraph size="lg" uppercase color="whitesmoke" className="oswald-font">{title}</Paragraph>
          <div>
            {icon}
          </div>
        </Stack>
        <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-[10%] bg-white bg-opacity-20"></div>
        {children}
      </Stack>
    </Box>
  );
};
