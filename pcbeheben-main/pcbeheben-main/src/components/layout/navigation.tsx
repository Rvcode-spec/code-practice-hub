'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { navigatingAtom } from '@/hooks/use-custom-router';
import { useAtom } from 'jotai';

export function NavigationContainer() {
  const pathname = usePathname();
  const [navigating, setNavigating] = useAtom(navigatingAtom);

  useEffect(() => {
    setNavigating(false);
  }, [pathname]);

  return (
    <>
      {navigating && (
        <div className="fixed left-0 top-0 z-[99999] flex h-screen w-screen items-center justify-center bg-black bg-opacity-60">
          <div className="absolute h-28 w-28 animate-bounce">
            <img
              src="/favicon.ico"
              alt="steinteppich loader"
              className="h-full w-full"
            />
          </div>
        </div>
      )}
    </>
  );
}
