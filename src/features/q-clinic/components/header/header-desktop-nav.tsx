import Link from 'next/link';
import { cn } from '@/lib/utils';
import { NAV_LINKS, type NavItem } from './header-constants';
import { NavDropdown } from '@/components/layout/header/nav-dropdown';

const RegularLink = ({ item }: { item: NavItem }) => (
    <Link
        href={item.href}
        className={cn(
            "flex items-center gap-2 text-[11px] font-medium xl:text-sm font-medium transition-colors  tracking-wide whitespace-nowrap",
            item.icon
                ? "text-primary px-3 py-1.5"
                : "text-text-main hover:text-primary"
        )}
    >
        {item.icon && <item.icon className="w-4 h-4" />}
        {item.name}
    </Link>
);

export function HeaderDesktopNav() {
    return (
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8 ml-8 mr-auto">
            {NAV_LINKS.map((link) => (
                link.subItems ? (
                    <NavDropdown
                        key={link.name}
                        title={link.name}
                        href={link.href}
                        variant="primary"
                        className="text-[11px] xl:text-sm font-medium  tracking-wide"
                        items={link.subItems.map(sub => ({
                            label: sub.name,
                            href: sub.href
                        }))}
                    />
                ) : (
                    <RegularLink key={link.name} item={link} />
                )
            ))}
        </nav>
    );
}