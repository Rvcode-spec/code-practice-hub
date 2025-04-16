'use client';
import NextLink, { LinkProps } from 'next/link';
import { forwardRef } from 'react';
import { useSetAtom } from 'jotai';
import { usePathname } from 'next/navigation';
import { navigatingAtom } from '@/hooks/use-custom-router';

interface CustomLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

const Link = forwardRef<HTMLAnchorElement, CustomLinkProps>((props, ref) => {
  const setNavigating = useSetAtom(navigatingAtom);
  const pathname = usePathname();
  const handleClick = () => {
    const normalizePath = (url: string) => url.split(/[?#]/)[0].replace(/\/+$/, '');

    if (normalizePath(props.href.toString()) !== normalizePath(pathname!)) {
      setNavigating(true);
    }
  };
  return (
    <NextLink {...props} ref={ref} className={props.className} onClick={() => handleClick()}>
      {props.children}
    </NextLink>
  );
});

Link.displayName = 'Link';
export default Link;
