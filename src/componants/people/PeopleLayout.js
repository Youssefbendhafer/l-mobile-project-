import React from 'react';
import Sidebar from '../articles/sidebar'; // Import Sidebar from the articles folder
import Tablep from './tablep'; // Import Tablep from the people folder

const PeopleLayout = () => (
  <div style={{ display: 'flex' }}>
    <Sidebar />
    <Tablep />
  </div>
);

export default PeopleLayout;
