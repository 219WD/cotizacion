import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const HomeScreen = lazy(() => import('./pages/HomeScreen'));

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Alisos Club - Asociación Civil | Cannabis Medicinal</title>
        <meta
          name="description"
          content="Asociación Civil comprometida con el bienestar y la salud en la provincia de Tucumán, Argentina."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Alisos Club",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "25 de Mayo 123",
              "addressLocality": "Tucumán",
              "addressRegion": "T",
              "postalCode": "4000",
              "addressCountry": "AR",
            },
            "telephone": "+5493816492599",
            "description":
              "Asociación Civil comprometida con el bienestar y la salud en la provincia de Tucumán, Argentina. Ofrecemos información, asistencia y productos de cannabis medicinal de alta calidad.",
            "url": "https://alisosclub.vercel.app/",
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