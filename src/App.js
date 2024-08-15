import React from 'react';
import './App.css';
import Table  from './componants/articles/table';
import Sidebar from './componants/articles/sidebar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Tablep from './componants/people/tablep';
import Sidebarr from './componants/people/sidebarr';
import Appn from './componants/dashboard/Appn';

function App() {
  return (
    <div className="App">
        <header className="App-header">
          {/* <Table/>
          <Sidebar />
          <Tablep/>
          <Sidebarr/> */}
          <Appn/>
         </header>
      </div>
  );
}

export default App;
