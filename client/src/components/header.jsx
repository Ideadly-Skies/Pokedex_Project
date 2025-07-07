// src/components/Header.jsx
import { BsGithub } from 'react-icons/bs';
import { FaProductHunt } from 'react-icons/fa';
import { HiMoon, HiSun } from 'react-icons/hi';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

export default function Header() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header id="_header">
      <div id="_header-inner">
        {/* Logo + Label */}
        <Link to="/" className="-ml-px inline-flex flex-col items-end">
          <img
            src="/images/pokemon-logo.png"
            width={154}
            height={56}
            alt="Pokemon logo"
            className="h-auto w-20 lg:w-[154px]"
          />
          <div className="-mt-1 inline-block -rotate-6 border border-white bg-gradient-to-br from-sky-600 to-pink-600 px-1.5 text-[9px] font-bold tracking-widest text-white lg:px-3 lg:text-base">
            AWESOME
          </div>
        </Link>

        {/* Icons */}
        <div className="flex items-center gap-2">
          <a
            href="https://www.producthunt.com/posts/pokemon-awesome"
            target="_blank"
            rel="noreferrer"
            title="Pokemon Awesome on Product Hunt"
            className="p-2 text-2xl text-[#ea532a]"
          >
            <span className="sr-only">Product Hunt</span>
            <FaProductHunt />
          </a>
          <a
            href="https://github.com/Foco-forca-e-fe/Pokedex_Project"
            title="Pokedex Project on GitHub"
            className="p-2 text-2xl dark:text-white"
          >
            <span className="sr-only">GitHub</span>
            <BsGithub />
          </a>

          {/* Dark mode toggle */}
          <label
            htmlFor="darkmode-toggle"
            className="relative ml-2 inline-flex cursor-pointer items-center text-2xl"
            title="Toggle dark mode"
          >
            <input
              type="checkbox"
              id="darkmode-toggle"
              className="sr-only"
              checked={isDarkMode}
              onChange={(e) => toggleTheme(e.target.checked)}
            />
            <div className="h-7 w-11 rounded-full bg-gray-300 dark:bg-slate-500 transition-colors" />
            <div className="absolute left-0 top-0 m-0.5 h-6 w-6 rounded-full bg-white transition-all dark:left-4" />
            <HiSun className="absolute top-0 left-0 m-0.5 opacity-100 transition-all dark:opacity-0" />
            <HiMoon className="absolute top-0 left-0 m-0.5 opacity-0 transition-all dark:left-4 dark:text-gray-800 dark:opacity-100" />
          </label>
        </div>
      </div>

      {/* Helmet: meta theme color */}
      <Helmet>
        <meta name="theme-color" content={isDarkMode ? '#25303f' : '#ffffff'} />
      </Helmet>
    </header>
  );
}
