import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

export default function NotFound() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen px-4 text-center ${isDarkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-800'}`}>
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! The page you're looking for does not exist.</p>
      <Link
        to="/"
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition duration-200"
      >
        Go Back Home
      </Link>
    </div>
  );
}