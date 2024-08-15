import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
import Table from './table'; 

const Sidebar = () => {
  return (
    <div className="container">
      <aside className="sidebar">
        <div className="logo">
          <img src="L-mobile-logo-transparent.png" style={{ width: '150px', height: 'auto' }} />
        </div>
        <nav className='sidetext'>
          <ul>
          <li><a href="#"><i className="fas fa-home"></i> Dashboard</a></li>
          <li><a href="#"><i className="fas fa-tasks"></i> Service order</a></li>
          <li><a href="#"><i className="fas fa-users"></i> Users</a></li>
          <li><a href="/pe"><i className="fas fa-user-friends"></i> People</a></li>
          <li><a href="#"><i className="fas fa-building"></i> Companies</a></li>
          <li><a href="#"><i className="fas fa-newspaper"></i> Articles</a></li>
          </ul>
        </nav>
      </aside>
      <main>
        
        <div className="user--info">
          <input type="text" placeholder="search"  />
        </div>
        <section className="content">
          <h1>Articles</h1>
          {/* <Table /> */}
        </section>
      </main>
    </div>
  );
};

export default Sidebar;
