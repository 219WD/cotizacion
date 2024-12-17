import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const HomeScreen = lazy(() => import('./pages/HomeScreen'));

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>219Labs - Cotizacion Alejandro Martinez</title>
        <meta
          name="description"
          content="Cotizacion servicio web de Tucumán, Argentina."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "219Labs",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "25 de Mayo 123",
              "addressLocality": "Tucumán",
              "addressRegion": "T",
              "postalCode": "4000",
              "addressCountry": "AR",
            },
            "telephone": "+5493816671884",
            "description":
              "Cotizacion webservices, paginas web, landingpage, desarrollo de software.",
            "url": "https://219labs-cotizacion-alejandro.vercel.app/",
          })}
        </script>
      </Helmet>
      <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#272A29', color: '#FFA500'}}><h2>Loading...</h2></div>}>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;