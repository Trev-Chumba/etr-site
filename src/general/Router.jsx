import { Route, Routes } from 'react-router-dom';

import { RoutePaths } from './RoutePaths.jsx';
import { Home } from '../home/Home.jsx';
import { NotFound } from './NotFound.jsx';
import { Layout } from './Layout.jsx';
import { About } from '../Pages/About.jsx';

export const Router = () => (
  <Routes>
    <Route
      path={RoutePaths.HOME}
      element={
        <Layout>
          <About />
        </Layout>
      }
    />
    <Route
      path={RoutePaths.PRODUCTS}
      element={
        <Layout>
          <Home />
        </Layout>
      }
    />
    <Route
      path="*"
      element={
        <Layout>
          <NotFound />
        </Layout>
      }
    />
  </Routes>
);
