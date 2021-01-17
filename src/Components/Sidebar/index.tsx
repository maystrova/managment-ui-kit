import React from "react";
import './style.css'
import {List} from "../List";
import ownerAvatar from "../Layout/pics/userpic.svg";
import {UserInfo} from "../UserInfo";

const Sidebar = () => {
    return <aside className="Sidebar">
        <UserInfo avatar={ownerAvatar} name={'Emilee Simchenko'} profession={'Product Owner'}/>
        <List title={'Menu'} items={['Home', 'My Tasks', 'Notifications' ]}/>
    </aside>
}

export {Sidebar}