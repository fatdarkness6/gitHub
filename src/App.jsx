import { Routes, Route } from 'react-router-dom';
import HomePage from '../component/pages/homePage/homePage.jsx';
import React from 'react';
import InsideRepositories from '../component/pages/repositories/renderRepositories/insideRepositories/insideRepositories.jsx';
import LoadAllPages from '../component/components/all-pages-load-here/all-pages-load-here.jsx';
import Search from '../component/pages/search/searchRepositories.jsx';
import { reduxStore } from './store.js';
import { Provider } from 'react-redux'
import SearchAllPage from '../component/pages/search/searchAllpage.jsx';
export function App() {
  
  return (
    <>
      <Provider store={reduxStore}>
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/:username' element={<LoadAllPages />} />
        <Route
          path='/:username/:nameOfRepository'
          element={<InsideRepositories />}
        />
        <Route path="/search" element={<SearchAllPage/>} />
      </Routes>
        </Provider>
    </>
  );
}
