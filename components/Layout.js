import Navbar from './Navbar';

const Layout = ({ children }) => {
  // Wrapper to provide consistent layout and navbar
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-r from-gray-800 via-black to-gray-900 text-white p-5 sm:p-6 md:p-8 lg:p-10">
        {children}
      </main>
    </div>
  );
};

export default Layout;
