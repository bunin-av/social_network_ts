import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import './App.scss';
import TopSidebar from "./components/TopSidebar/TopSidebar";

function App() {
    return (
      <div className="app-wrapper">
          <Header/>
          <TopSidebar/>
          <Navbar/>
          <Content/>
      </div>
    );
}

export default App;
