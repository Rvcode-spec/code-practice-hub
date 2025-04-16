import Link from '@/components/layout/custom-link';
import { buttonVariants } from '@/components/ui/button';
import Routes from '@/lib/routes';
import clsx from 'clsx';
import { Home } from 'lucide-react';

export default function page() {
  return (
    <div className="text-center">
      <div className="h-[50vh]">
        <img src="/not-found.png" alt="404" className="mx-auto h-full object-cover" />
      </div>
      <h1 className="text-4xl">404</h1>
      <p>Page not found</p>
      <Link
        href={Routes.home}
        className={clsx(buttonVariants({ variant: 'outline' }), 'mt-3 p-5 text-xl text-primary')}
      >
        <Home className="mr-2" />
        Go to Homepage
      </Link>
    </div>
  );
}
