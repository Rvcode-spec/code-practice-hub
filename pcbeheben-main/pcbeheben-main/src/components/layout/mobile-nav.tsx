'use client';

import { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronsUpDown, Menu as MenuIcon } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import Link from './custom-link';
import Routes from '@/lib/routes';
import { usePathname } from 'next/navigation';

const components: { title: string; href: string }[] = [
  {
    title: 'Firmennetzwerk einrichten',
    href: Routes.Solution.SetUpTheCompanyNetwork,
  },
  { title: 'Office 365/E-Mail', href: Routes.Solution.Office365Email },
  { title: 'Netzwerksicherheit', href: Routes.Solution.Network },
  { title: 'Firewall Schutz', href: Routes.Solution.FireWallProtection },
  { title: 'Treiber Updater', href: Routes.Solution.DriverUpdater },
  { title: 'Kassensysteme', href: Routes.Solution.POSsystem },
  { title: 'Datenrettung', href: Routes.Solution.Recovery },
  { title: 'CRM System', href: Routes.Solution.CRMsystem },
  { title: 'Antiviren Software', href: Routes.Solution.AntivirusSoftware },
  { title: 'In-store IT Helpdesk', href: Routes.Solution.InstoreItHelpDesk },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* Mobile Menu Trigger Button */}
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Mobile menu button">
          <MenuIcon className="!h-6 !w-6" />
        </Button>
      </SheetTrigger>

      {/* Mobile Menu Content */}
      <SheetContent side="left">
        <div className="flex flex-col gap-7">
          {/* Static Navigation Links */}
          <Button
            variant="ghost"
            className="w-full justify-start text-[18px] text-gray-500 md:hidden"
          >
            <Link href="/">Heim</Link>
          </Button>

          <Collapsible>
            <CollapsibleTrigger className={`w-full`} asChild>
              <Button
                variant="ghost"
                className={`flex w-full justify-between text-[18px] text-gray-500`}
              >
                Lösung
                <ChevronsUpDown />
              </Button>
            </CollapsibleTrigger>

            <CollapsibleContent>
              <div className="ml-4 mt-2 flex flex-col gap-5 text-[15px]">
                {components.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-sm text-indigo-900 hover:underline"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>

          <Button
            variant="ghost"
            className="w-full justify-start text-[18px] text-gray-500 md:hidden"
          >
            <Link href={Routes.about}>Über uns</Link>
          </Button>

          <Button
            variant="ghost"
            className="w-full justify-start text-[18px] text-gray-500 md:hidden"
          >
            <Link href={Routes.blog}>Blogs</Link>
          </Button>

          <Button
            variant="ghost"
            className="w-full justify-start text-[18px] text-gray-500 md:hidden"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
