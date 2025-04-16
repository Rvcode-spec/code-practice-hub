'use client';
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Routes from '@/lib/routes';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Link from './custom-link';
import { usePathname } from 'next/navigation';
import MobileNav from './mobile-nav';

const components: { title: string; href: string }[] = [
  {
    title: 'Firmennetzwerk einrichten',
    href: Routes.Solution.SetUpTheCompanyNetwork,
  },
  {
    title: 'Office 365/E-Mail',
    href: Routes.Solution.Office365Email,
  },
  {
    title: 'Netzwerksicherheit',
    href: Routes.Solution.Network,
  },
  {
    title: 'Firewall Schutz',
    href: Routes.Solution.FireWallProtection,
  },
  {
    title: 'Treiber Updater',
    href: Routes.Solution.DriverUpdater,
  },
  {
    title: 'Kassensysteme',
    href: Routes.Solution.POSsystem,
  },
  {
    title: 'Datenrettung',
    href: Routes.Solution.Recovery,
  },
  {
    title: 'CRM System',
    href: Routes.Solution.CRMsystem,
  },
  {
    title: 'Antiviren Software',
    href: Routes.Solution.AntivirusSoftware,
  },
  {
    title: 'In-store IT Helpdesk',
    href: Routes.Solution.InstoreItHelpDesk,
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed top-0 z-40 flex w-screen items-center justify-around gap-10 bg-white p-2 md:fixed md:top-0 md:z-40 md:flex md:h-20 md:w-full md:items-center md:justify-around md:bg-transparent`}
    >
      {/* div for blur */}

      <div
        className={` ${isScrolled ? 'hidden animate-in slide-in-from-top md:absolute md:inset-0 md:-z-10 md:block md:bg-white/70 md:bg-cover md:bg-center md:bg-no-repeat md:backdrop-blur-md' : 'hidden duration-300 ease-in-out'} `}
      ></div>

      {/* header logo starts*/}

      <div className="">
        <Link href={Routes.home}>
          <img src="/images/pc-beheben-logo-black.svg" alt="no-image" className="block md:hidden" />
        </Link>
        <Link href={Routes.home}>
          <img
            src={
              !isScrolled && pathname == '/'
                ? '/images/pc-beheben-logo-white.svg'
                : '/images/pc-beheben-logo-black.svg'
            }
            alt="no-image"
            className="hidden duration-300 ease-in-out md:block"
          />
        </Link>
      </div>

      {/* menu header starts */}

      <div className="block md:hidden">
        <MobileNav />
      </div>

      {/* header links starts */}
      <div className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList className="md:m-4 md:gap-2 md:text-xl lg:gap-5">
            {' '}
            {/*start nav */}
            <NavigationMenuItem>
              <Link href={Routes.home}>Heim</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent md:text-lg">
                Lösung
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[600px]">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    ></ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={Routes.about}>Über uns</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={Routes.blog}>Blogs</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href={Routes.contact}
                className="rounded-xl border-2 !bg-primary text-white duration-300 ease-in-out hover:border-black hover:!bg-white hover:text-black md:px-2 md:py-2 md:text-sm"
              >
                Kontaktieren Sie uns
              </Link>
              {/* </NavigationMenuLink> */}
            </NavigationMenuItem>
          </NavigationMenuList>{' '}
          {/*end nav */}
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Header;

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <Link
          href={props.href!}
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </Link>
      </li>
    );
  },
);
ListItem.displayName = 'ListItem';
