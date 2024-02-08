import { PropsWithChildren, HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLAnchorElement> & PropsWithChildren;

export const Link = ({ children, ...rest }: Props) => {
  return (
    <a rel="nofollow noopener" target="_blank" {...rest}>{children}</a>
  );
};
