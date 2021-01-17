import React from 'react'
import './style.css'

import {ListType} from './types';

const List = ({items, addition, title}: ListType) => {
    return (
        <div className='List'>
            <span className="List__title">{title}</span>
            <div className='List__items'>
                <ul className='List__items-block'>
                    {items.map((item) => (
                        <li>
                            <a className='List__items-link' href="#">
                                {item.icon && <img src={item.icon} alt=""/>}
                                {item.title}
                                {item.avatars?.map((avatar) => <img src={avatar} alt=""/>)}
                                {item.count && <span className='List__items-count'>3</span>}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='List__items-addition'>
                <a href="#">{addition}</a>
            </div>
        </div>
    )
}

export {List}