import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import SubmitForm from './componants/articles/submit';
import Table from './componants/articles/table';
import './index.css';
import Sidebar from './componants/articles/sidebar';
import Tablep from './componants/people/tablep';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Submitc from './componants/people/submitc';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path="/" element={<Sidebar />} />
        <Route path="/" element={<Table />} />
        <Route path="/submit" element={<SubmitForm />} />
        <Route path="/submitc" element={<Submitc />} />
        <Route path="/pe" element={<Tablep/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
