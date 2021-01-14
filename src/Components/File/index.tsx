import React from "react";
import './style.css';
import {FileType} from "../File/type";
import {Button} from "../Button";


const File = ({preview, title, format, size}: FileType) => {
    return (
     <div className='addFile'>
         <div className='addFile__preview'>
             <img src={preview} alt="preview"/>
         </div>
         <div className="addFile__information">
             <span className='addFile__information-header'>{title}{format}</span>
             <div className="addFile__information-footer">
             <span className='addFile__information-size'>{size}</span>
             <Button text={'Delete'} size={"small"}/>
             </div>
         </div>

     </div>
 )
}


export {File}