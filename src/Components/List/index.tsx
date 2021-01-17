import React from 'react'
import './style.css'
import {ListType} from "./types";

const List = ({title, addition, icon, items, members}: ListType) => {
    return (
        <div className='List'>
        <h4 className="List__title">{title}</h4>
            <div className='List__items'>
            {items.map((item) => (<ul className='List__items-ul'><li className='List__items-li'><a href="#">{icon}{item}{members}</a></li></ul>))}
            </div>
            <div className='List__items-addition'>
                <a href="#">{addition}</a>
            </div>
        </div>
    )
}

export {List}