import React from 'react';
import Sidebar from '.componants/articles/Sidebar';
import Table from '.componants/articles/Table';
import './sidebar.css'; 

const Layout = () => {
  return (
    <><div className="user--info">
          <input type="text" placeholder="search" />
      </div><section className="content">
              <h1>Articles</h1>
              <Table />
          </section></>
  );
};

export default Layout;
