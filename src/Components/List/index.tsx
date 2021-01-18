import React from 'react'
import './style.css'

import {ListType} from './types'

const List = ({items, addition, title}: ListType) => {
    return (
        <div className='List'>
            <span className="List__title">{title}</span>
            <div className='List__items'>
                <ul className='List__items-block'>
                    {items.map((item) => (
                        <li className='List__items-string'>
                            <a className='List__items-link' href="#">
                                {item.icon && <img className='List__items-link-icon' src={item.icon} alt="icon"/>}
                                {item.title}
                                {item.avatars?.map((avatar) => <img className='List__items-link-avatar' src={avatar} alt="avatar"/>)}
                                {item.count && <span className='List__items-count'>3</span>}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <a  className='List__items-addition' href="#">{addition}</a>
            </div>
        </div>
    )
}

export {List}