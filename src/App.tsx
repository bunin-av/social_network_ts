import './App.scss';
import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter} from "react-router-dom";
import TopSidebar from "./components/TopSidebar/TopSidebar";
import Content from "./components/Content/Content";
import {StateType} from "./redux/state";

type AppPropsType = {
    state: StateType
    addPost: () => void
    addNewPostText: (text: string) => void
}

function App(props: AppPropsType) {
    return (
      <BrowserRouter>
          <div className="app-wrapper">
              <Header/>
              <TopSidebar/>
              <Navbar state={props.state}/>
              <Content state={props.state}
                       addPost={props.addPost}
                       addNewPostText={props.addNewPostText}
              />
          </div>
      </BrowserRouter>
    );
}

export default App;
