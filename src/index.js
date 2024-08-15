import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SubmitForm from './componants/articles/submit';
import Table from './componants/articles/table';
import './index.css';
import Sidebar from './componants/articles/sidebar';
import Sidebarr from './componants/people/sidebarr';
import Tablep from './componants/people/tablep';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ClientForm from './componants/people/submitc';
import Dashboard from './componants/dashboard/dashboard';
import Header from './componants/dashboard/Header';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path="/" element={<Sidebar />} />
      <Route path="/pe" element={<Sidebarr />} />
        <Route path="/" element={<Table />} />
        <Route path="/submit" element={<SubmitForm />} />
        <Route path="/submitc" element={<ClientForm />} />
        <Route path="/pe" element={<Tablep />} />
        <Route path="/da" element={<Dashboard />} />
        <Route path="/da" element={<Header />} />
        <Route path="/da" element={<Dashboard />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
