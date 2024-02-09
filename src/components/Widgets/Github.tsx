import { getPublicGithubData } from '@/api';
import { Box, Stack, Paragraph, Link } from '@/components/UI';
import { BarLoader } from 'react-spinners';
import colors from 'tailwindcss/colors';

export const Github = () => {
  const { data, isLoading } = getPublicGithubData();
  
  if (!data && isLoading) {
    return (
      <Box component="div" paddingY={{ mobile: 'medium' }}>
        <BarLoader color={colors.white} width="100%" />
      </Box>
    )
  }

  if (data) {
    return (
      <Stack direction={{ mobile: 'vertical', desktop: 'vertical' }} space={{ mobile: 3, desktop: 3 }}>
        <Box component="div" display={{ mobile: 'flex' }} alignItems={{ mobile: 'center' }} justifyContent={{ mobile: 'between' }} className="w-full">
          <Box component="div" flex={{ mobile: 1 }} className="truncate">
            <Stack direction={{ mobile: 'vertical', desktop: 'vertical' }} space={{ mobile: 1, desktop: 1 }}>
              <Stack direction={{ mobile: 'horizontal', desktop: 'horizontal' }} space={{ mobile: 3, desktop: 3 }} className="items-center">
                <Link href={data?.html_url}>
                  <img className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" src={data.avatar_url} alt="andre's avatar" />
                </Link>
                <Stack direction={{ mobile: 'vertical', desktop: 'vertical' }} space={{ mobile: 1, desktop: 1 }}>
                  <Paragraph size="xs" color="whitesmoke" transform="bold" truncate>{data.name}</Paragraph>
                  <Paragraph size="xs" color="whitesmoke" transform="bold" truncate>{data.bio}</Paragraph>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Stack direction={{ mobile: 'vertical', desktop: 'vertical' }} space={{ mobile: 2, desktop: 2 }}>
          <Stack direction={{ mobile: 'horizontal', desktop: 'horizontal' }} space={{ mobile: 2, desktop: 2 }}>
            <Paragraph size="xs" color="whitesmoke" transform="bold">Followers: {data.followers}</Paragraph>
            <Paragraph size="xs" color="whitesmoke" transform="bold">Following: {data.following}</Paragraph>
            <Paragraph size="xs" color="whitesmoke" transform="bold">Public Repos: {data.public_repos}</Paragraph>
          </Stack>
          <Paragraph size="xs" color="whitesmoke" transform="bold">Location: {data.location}</Paragraph>
        </Stack>
      </Stack>
    );
  }


  return null;
};
