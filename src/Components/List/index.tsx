import React from 'react'
import './style.css'
import {ListType} from "./types";

const List = (lists: ListType) => {
    return (
        <div className='List'>
        <span className="List__title">{lists.title}</span>
            <div className='List__items'>
            {lists.items.map((item) => (<ul className='List__items-block'><li><a className='List__items-link' href="#">{lists.icon}{item}{lists.members}</a></li></ul>))}
            </div>
            <div className='List__items-addition'>
                <a href="#">{lists.addition}</a>
            </div>
        </div>
    )
}

export {List}