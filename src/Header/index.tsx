import React from "react";
import './style.css'
import {Button} from "../Button";

const Header = () => {
    return (
        <header className="Header">
            Header
            <Button title="Кнопка"/>
            <Button title="Кнопка 2"/>
        </header>
    )
}

export {Header}