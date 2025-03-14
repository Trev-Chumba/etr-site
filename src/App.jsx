import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './general/Router.jsx';
import { Loading } from './components/Loading.jsx';
import { Navbar } from './components/Navbar.jsx';
import { Footer } from './components/Footer.jsx';
import { CartDrawer } from './components/CartDrawer.jsx';
import { useState, useEffect } from 'react';
import { CartProvider } from './general/Contexts/CartContext.jsx';
import { HelmetProvider } from 'react-helmet-async';

export const PageWithHeader = ({ children }) => (
  <div className="flex h-full flex-col">{children}</div>
);

export const App = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  useEffect(() => {
    localStorage.removeItem('savedIds');
  }, []);
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };
  return (
    <BrowserRouter>
      <CartProvider>
        <HelmetProvider>
          <Suspense
            fallback={
              <PageWithHeader>
                <Loading name="suspense" />
              </PageWithHeader>
            }
          >
            <div className="h-full bg-[var(--background)] text-[var(--text-color)]">
              <Navbar toggleDrawer={toggleDrawer} />
              <CartDrawer
                open={isDrawerOpen}
                onClose={() => setDrawerOpen(false)}
              />
              <Router />
              <Footer />
            </div>
          </Suspense>
        </HelmetProvider>
      </CartProvider>
    </BrowserRouter>
  );
};
