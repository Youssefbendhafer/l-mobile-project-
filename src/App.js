import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SubmitForm from './componants/articles/submit';
// import Table from './components/articles/table';
// import Sidebar from './components/articles/sidebar';
// import Sidebarr from './components/people/sidebarr';
// import Tablep from './components/people/tablep';
// import ClientForm from './components/people/submitc';
// import Dashboard from './components/dashboard/dashboard';
// import Header from './components/dashboard/Header';
import Appn from './componants/dashboard/Appn';
import Articles from './componants/articles/Article';
import People from './componants/people/people';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Appn />} />
        <Route path="/submit" element={<SubmitForm />} />
        <Route path="/article" element={<Articles />} />
        <Route path="/people" element={<People />} />
        {/* <Route path="/people" element={<Users />} />
        <Route path="/companies" element={<Companies />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
