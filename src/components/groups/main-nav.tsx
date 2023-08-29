;

import * as React from "react";
import { MainNavItem } from "@/types";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { MobileNav } from "@/components/groups/mobile-nav";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
  const { pathname } = useLocation();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  const { t } = useTranslation();
  const navItems = React.useMemo(() => {
    if (!items) return null;
    return items?.map((item, index) => {
      if (item.href.startsWith("/#")) {
        return (
          <a
            href={item.href}
            key={index}
            className={cn(
              "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
              item.href.startsWith(`${pathname}`)
                ? "text-foreground"
                : "text-foreground/60",
              item.disabled && "cursor-not-allowed opacity-80"
            )}
          >{t(item.title)}</a>);

      }
      return (
        <Link
          key={index}
          to={item.disabled ? "#" : item.href}
          className={cn(
            "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
            item.href.startsWith(`${pathname}`)
              ? "text-foreground"
              : "text-foreground/60",
            item.disabled && "cursor-not-allowed opacity-80"
          )}
        >
          {t(item.title)}
        </Link>
      );
    });
  }, [items, pathname, t]);
  return (
    <div className="flex gap-6 md:gap-10">
      <Link to="/" className="items-center hidden space-x-2 md:flex">
        <Icons.logo />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {navItems}
        </nav>
      ) : null}
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.logo />}
        <span className="font-bold">Menu</span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  );
}
