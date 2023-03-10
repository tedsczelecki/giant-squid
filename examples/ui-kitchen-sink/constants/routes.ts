import React from 'react';

type SideNavItem = {
  label: string;
  icon?: React.ReactNode;
  href: string;
};

export const sidenav: SideNavItem[] = [
  {
    label: 'Items',
    href: '/resources/items',
  },
];
