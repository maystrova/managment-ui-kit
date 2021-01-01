import React, {useState} from "react";
import './style.css'

// @ts-ignore
const Button = (props) => {
    console.log(props)
    return (
        <button className="Button">{props.title}</button>
    )
}

export {Button}