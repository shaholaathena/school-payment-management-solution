import { lazy, Suspense } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import LinearProgress from '@mui/material/LinearProgress';
import { ThemeProvider } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import ScrollManager from './components/layout/ScrollManager';
import Home from './pages/Home';
import theme from './theme';
import { zIndex } from './theme/tokens';

// Home ships in the initial bundle; the rest are split so a first visit does
// not download the whole site.
const Features = lazy(() => import('./pages/Features'));
const HowItWorks = lazy(() => import('./pages/HowItWorks'));
const Faq = lazy(() => import('./pages/Faq'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

/** Thin progress bar under the navbar while a route chunk loads. */
function RouteFallback() {
  return (
    <Box sx={{ position: 'fixed', top: 72, left: 0, right: 0, zIndex: zIndex.sticky }}>
      <LinearProgress sx={{ height: 2 }} />
    </Box>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ScrollManager />
      <Navbar />

      <Box component="main" sx={{ flexGrow: 1 }}>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Box>

      <Footer />
    </ThemeProvider>
  );
}
