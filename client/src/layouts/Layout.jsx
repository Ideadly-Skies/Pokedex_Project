// src/layouts/Layout.jsx
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import CustomStyles from './CustomStyles';

export default function Layout({ children }) {
  return (
    <div id="__next">
      <CustomStyles />
      <Header />
      <Sidebar />
      <main className="min-h-screen px-3.5 pt-8 pb-20  lg:py-10">
        {children}
      </main>
    </div>
  );
}
