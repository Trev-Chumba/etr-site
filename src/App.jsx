import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './general/Router.jsx';
import { Loading } from './components/Loading.jsx';
import { Navbar } from './components/Navbar.jsx';
import { Footer } from './components/Footer.jsx';
import { CartDrawer } from './components/CartDrawer.jsx';
import { useState } from 'react';

export const PageWithHeader = ({ children }) => (
  <div className="flex h-full flex-col">{children}</div>
);

export const App = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
    console.log('hello');
  };
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <PageWithHeader>
            <Loading name="suspense" />
          </PageWithHeader>
        }
      >
        <div className="h-full bg-[var(--background)] text-[var(--text-color)] p-4 lg:p-24">
          <Navbar toggleDrawer={toggleDrawer} />
          <CartDrawer
            open={isDrawerOpen}
            onClose={() => setDrawerOpen(false)}
          />
          <Router />
          <Footer />
        </div>
      </Suspense>
    </BrowserRouter>
  );
};
