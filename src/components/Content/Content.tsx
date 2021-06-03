import styles from './Content.module.scss';
import Settings from "../Settings/Settings";
import Messages from "../Messages/Messages";
import Music from "../Music/Music";
import News from "../News/News";
import Profile from "../Profile/Profile";
import {Route} from "react-router-dom";
import React from "react";
import {ActionsTypes, StateType} from "../../redux/state";

export type PropsType = {
    state: StateType
    dispatch: (action: ActionsTypes) => void
}

function Content(props: PropsType) {


    return (
        <div className={styles.wrapper}>
            <Route
                path={'/profile'}
                render={() => <Profile
                    state={props.state}
                    dispatch={props.dispatch}
                />}
            />
            <Route
                path={'/messages'}
                render={() => <Messages state={props.state.messagesPage}/>}/>
            <Route path={'/music'} component={Music}/>
            <Route path={'/news'} component={News}/>
            <Route path={'/settings'} component={Settings}/>
        </div>
    )
}

export default Content;