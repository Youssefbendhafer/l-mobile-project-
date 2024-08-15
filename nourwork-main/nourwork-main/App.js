import React from 'react';
import Header from './component/header/Header';
import Sidebar from './component/sidebar/sidebar';
import Dashboard from './component/Dashboard/Dashboard';
import ServiceOrder from './component/ServiceOrder/ServiceOrder';
import TopCreators from './component/TopCreators/TopCreators';
import './App.css';

function App() {
    return (
        <div className="container">
            <Sidebar />
            <main className="main-content">
                <Header />
                <Dashboard />
                <ServiceOrder />
                <TopCreators />
            </main>
        </div>
    );
}

export default App;
