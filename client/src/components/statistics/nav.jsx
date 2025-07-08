import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import clsx from 'clsx';

const ROUTES = [
  { href: '/statistics/types', label: 'Types' },
  { href: '/statistics/stats', label: 'Base Stats' },
  { href: '/statistics/misc', label: 'Misc.' },
];

export default function Nav() {
  const { pathname } = useLocation();

  return (
    <nav className="flex border-b">
      {ROUTES.map(({ href, label }) => (
        <NavLink
          key={href}
          to={href}
          className={({ isActive }) =>
            clsx(
              'block bg-opacity-60 px-4 py-3',
              isActive || pathname === href ? 'border-b-4 border-elm-electric font-semibold' : ''
            )
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
