import { PropsWithChildren, HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLAnchorElement> & PropsWithChildren<{
  href: string;
}>;

export const Link = ({ children, href, ...rest }: Props) => {
  return (
    <a rel="nofollow noopener" target="_blank" href={href} {...rest}>{children}</a>
  );
};
