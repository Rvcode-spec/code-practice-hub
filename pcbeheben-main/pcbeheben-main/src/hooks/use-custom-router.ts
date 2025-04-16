import { atom, useAtom } from 'jotai';
import { NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter as useNextRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

export const navigatingAtom = atom(false);

const useRouter = () => {
  const router = useNextRouter();
  const [navigating, setNavigating] = useAtom(navigatingAtom);
  const pathname = usePathname();

  useEffect(() => {
    const originalPush = router.push;

    router.push = async (href: string, options: NavigateOptions) => {
      if (href.split('?')[0] !== pathname?.split('?')[0]) setNavigating(true);
      return originalPush(href, options);
    };

    return () => {
      router.push = originalPush; // Cleanup on unmount
    };
  }, [router]);

  return router;
};

export default useRouter;
