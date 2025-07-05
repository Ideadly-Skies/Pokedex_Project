import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import {
  HiOutlineColorSwatch,
  HiOutlineInformationCircle,
  HiOutlineLightBulb,
  HiOutlinePresentationChartLine,
  HiOutlineSwitchHorizontal,
  HiOutlineViewGrid,
  HiOutlineChip,
  HiOutlineBeaker,
  HiOutlineSparkles,
  HiOutlineUserGroup,
  HiOutlineCollection,
} from 'react-icons/hi';

export default function Sidebar() {
  const location = useLocation();

  const SectionTitle = ({ children }) => (
    <span className="hidden lg:block text-xs uppercase font-semibold text-slate-500 dark:text-slate-400 mt-6 mb-2 px-4">
      {children}
    </span>
  );

  return (
    <nav id="_nav">
      <div id="_nav-inner">
        <SectionTitle>MAIN MENU</SectionTitle>
        <Link to="/" className={classNames('nav-link', { 'active': location.pathname === '/' })}>
          <HiOutlineViewGrid className="text-2xl lg:text-xl" />
          <span className="text-xs lg:text-sm">Pokémons</span>
        </Link>
        
        <Link to="/compare" className={classNames('nav-link', { 'active': location.pathname === '/compare' })}>
          <HiOutlineColorSwatch className="text-2xl lg:text-xl" />
          <span className="text-xs lg:text-sm">Compare</span>
        </Link>
        
        <Link to="/statistics/types" className={classNames('nav-link', { 'active': location.pathname.startsWith('/statistics') })}>
          <HiOutlinePresentationChartLine className="text-2xl lg:text-xl" />
          <span className="text-xs lg:text-sm">Statistics</span>
        </Link>
        
        <Link to="/bookmarks" className={classNames('nav-link', { 'active': location.pathname === '/bookmarks' })}>
          <HiOutlineCollection className="text-2xl lg:text-xl" />
          <span className="text-xs lg:text-sm">Bookmarks</span>
        </Link>

        <SectionTitle>POKÉMON DATA</SectionTitle>
        <Link to="/evolutions" className={classNames('nav-link', { 'active': location.pathname === '/evolutions' })}>
            <HiOutlineSwitchHorizontal className="text-2xl lg:text-xl" />
            <span className="text-xs lg:text-sm">Evolutions</span>
        </Link>

        <Link to="/types" className={classNames('nav-link', { 'active': location.pathname === '/types' })}>
            <HiOutlineChip className="text-2xl lg:text-xl" />
            <span className="text-xs lg:text-sm">Types</span>
        </Link>

        <Link to="/egg-groups" className={classNames('nav-link', { 'active': location.pathname === '/egg-groups' })}>
            <HiOutlineUserGroup className="text-2xl lg:text-xl" />
            <span className="text-xs lg:text-sm">Egg Groups</span>
        </Link>

        <SectionTitle>Forms / Variations</SectionTitle>
        <Link to="/gmax" className={classNames('nav-link', { 'active': location.pathname === '/gmax' })}>
            <HiOutlineBeaker className="text-2xl lg:text-xl" />
            <span className="text-xs lg:text-sm">Gigantamax For...</span>
        </Link>

        <Link to="/mega" className={classNames('nav-link', { 'active': location.pathname === '/mega' })}>
            <HiOutlineSparkles className="text-2xl lg:text-xl" />
            <span className="text-xs lg:text-sm">Mega Evolutions</span>
        </Link>

        <SectionTitle>Fun & Games</SectionTitle>
        <Link to="/guess-pokemon" className={classNames('nav-link', { 'active': location.pathname === '/guess-pokemon' })}>
            <HiOutlineLightBulb className="text-2xl lg:text-xl" />
            <span className="text-xs lg:text-sm">Guess the Poké...</span>
        </Link>

        <Link to="/tcg" className={classNames('nav-link', { 'active': location.pathname === '/tcg' })}>
            <HiOutlineColorSwatch className="text-2xl lg:text-xl" />
            <span className="text-xs lg:text-sm">Trading Card Ga...</span>
        </Link>

        <SectionTitle>Misc.</SectionTitle>
        <Link to="/about" className={classNames('nav-link', { 'active': location.pathname === '/about' })}>
            <HiOutlineInformationCircle className="text-2xl lg:text-xl" />
            <span className="text-xs lg:text-sm">About</span>
        </Link>
      </div>
    </nav>
  );
}
