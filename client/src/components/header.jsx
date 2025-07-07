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
            className="relative ml-2 inline-flex items-center w-14 h-8 rounded-full bg-gray-300 dark:bg-slate-600 transition-colors"
            title="Toggle dark mode"
          >
            <input
              type="checkbox"
              id="darkmode-toggle"
              className="sr-only peer"
              checked={isDarkMode}
              onChange={(e) => toggleTheme(e.target.checked)}
            />

            {/* Knob */}
            <div
              className={`absolute top-0.5 left-0.5 h-7 w-7 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
                isDarkMode ? 'translate-x-6' : 'translate-x-0'
              }`}
            />

            {/* Icons inside knob */}
            <div className="absolute top-1.5 left-1.5 h-5 w-5 text-yellow-400 transition-opacity duration-300 ease-in-out opacity-100 peer-checked:opacity-0">
              <HiSun />
            </div>
            <div className="absolute top-1.5 left-1.5 h-5 w-5 text-gray-800 transition-opacity duration-300 ease-in-out opacity-0 peer-checked:opacity-100">
              <HiMoon />
            </div>
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
