import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalStyles from "./assets/js/GlobalStyles";

// 레이아웃
import MainLayout from "./layout/CommonLayout";

// 페이지
import MainHome from "./pages/main";
import DrFlomos from "./pages/product/flomos";
import TobMask from "./pages/product/mask";
import TobCleanser from "./pages/product/cleanser";
import TobSunCream from "./pages/product/suncream";
import TobStory from "./pages/tobStory";

function App() {
  return (
      <>
          <GlobalStyles/>
          <Routes>
              <Route element={<MainLayout />}>
                <Route path="/" element={<MainHome/>}/>
                  <Route path="/product/flomos" element={<DrFlomos />}/>
                  <Route path="/product/mask" element={<TobMask />}/>
                  <Route path="/product/cleanser" element={<TobCleanser />}/>
                  <Route path="/product/suncream" element={<TobSunCream />}/>
                  <Route path="/story" element={<TobStory />}/>
              </Route>
            </Routes>

      </>
  );
}

export default App;
