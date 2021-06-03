import './App.scss';
import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter} from "react-router-dom";
import TopSidebar from "./components/TopSidebar/TopSidebar";
import Content from "./components/Content/Content";
import {StoreType} from "./redux/state";

type AppPropsType = {
    store: StoreType
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <TopSidebar/>
                <Navbar state={props.store.getState()}/>
                <Content
                    state={props.store.getState()}
                    dispatch={props.store.dispatch.bind(props.store)}
                />
            </div>
        </BrowserRouter>
    );
}

export default App;
