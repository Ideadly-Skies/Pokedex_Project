// src/layouts/Layout.jsx
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import CustomStyles from './CustomStyles';

export default function Layout({ children }) {
  return (
    <>
      <CustomStyles />
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 px-3.5 pt-8 pb-20 lg:px-6 lg:py-10 overflow-y-auto">
          {children}
        </main>
      </div>
    </>
  );
}
