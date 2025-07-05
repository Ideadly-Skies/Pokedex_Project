import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import {
  HiOutlineArchive,
  HiOutlineColorSwatch,
  HiOutlineInformationCircle,
  HiOutlineLightBulb,
  HiOutlineMenu,
  HiOutlinePresentationChartLine,
  HiOutlineSwitchHorizontal,
  HiOutlineViewGrid,
  HiOutlineX,
  HiOutlineChip,
  HiOutlineBeaker,
  HiOutlineSparkles,
  HiOutlineUserGroup,
  HiOutlineQuestionMarkCircle,
  HiOutlineCollection,
} from 'react-icons/hi';

export default function Sidebar() {
  const [menuExpanded, setMenuExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuExpanded(false);
  }, [location.pathname]);

  const navLinkClass =
    'nav-link flex items-center gap-2 px-4 py-2 rounded hover:bg-base-200 transition';

  const SectionTitle = ({ children }) => (
    <span className="text-xs uppercase font-semibold text-base-content/50 px-4 mt-6 mb-2 block">
      {children}
    </span>
  );

  return (
    <nav className="bg-base-100 w-full md:w-64 p-4 md:block border-r border-base-200 min-h-screen">
      <ul className="flex flex-col gap-1" id="_nav-inner">
        <SectionTitle>MAIN MENU</SectionTitle>
        <li>
          <Link to="/" className={navLinkClass}>
            <HiOutlineViewGrid className="text-2xl" />
            Pokémons
          </Link>
        </li>
        <li>
          <Link to="/compare" className={navLinkClass}>
            <HiOutlineColorSwatch className="text-2xl" />
            Compare
          </Link>
        </li>
        <li>
          <Link to="/statistics/types" className={navLinkClass}>
            <HiOutlinePresentationChartLine className="text-2xl" />
            Statistics
          </Link>
        </li>
        <li>
          <Link to="/bookmarks" className={navLinkClass}>
            <HiOutlineCollection className="text-2xl" />
            Bookmarks
          </Link>
        </li>

        <SectionTitle>POKÉMON DATA</SectionTitle>
        <li>
          <Link to="/evolutions" className={navLinkClass}>
            <HiOutlineSwitchHorizontal className="text-2xl" />
            Evolutions
          </Link>
        </li>
        <li>
          <Link to="/types" className={navLinkClass}>
            <HiOutlineChip className="text-2xl" />
            Types
          </Link>
        </li>
        <li>
          <Link to="/egg-groups" className={navLinkClass}>
            <HiOutlineUserGroup className="text-2xl" />
            Egg Groups
          </Link>
        </li>

        <SectionTitle>FORMS / VARIATIONS</SectionTitle>
        <li>
          <Link to="/gmax" className={navLinkClass}>
            <HiOutlineBeaker className="text-2xl" />
            Gigantamax Forms
          </Link>
        </li>
        <li>
          <Link to="/mega" className={navLinkClass}>
            <HiOutlineSparkles className="text-2xl" />
            Mega Evolutions
          </Link>
        </li>

        <SectionTitle>FUN & GAMES</SectionTitle>
        <li>
          <Link to="/guess-pokemon" className={navLinkClass}>
            <HiOutlineLightBulb className="text-2xl" />
            Guess the Pokémon
          </Link>
        </li>
        <li>
          <Link to="/tcg" className={navLinkClass}>
            <HiOutlineColorSwatch className="text-2xl" />
            Trading Card Game
          </Link>
        </li>

        <SectionTitle>MISC.</SectionTitle>
        <li>
          <Link to="/about" className={navLinkClass}>
            <HiOutlineInformationCircle className="text-2xl" />
            About
          </Link>
        </li>

        {/* Mobile Menu Toggle */}
        <li className="md:hidden mt-6">
          <button
            type="button"
            className={classNames(navLinkClass, menuExpanded && 'text-rose-500')}
            onClick={() => setMenuExpanded(!menuExpanded)}
          >
            {menuExpanded ? <HiOutlineX className="text-2xl" /> : <HiOutlineMenu className="text-2xl" />}
            {menuExpanded ? 'Hide Menu' : 'All Menu'}
          </button>
        </li>
      </ul>
    </nav>
  );
}
