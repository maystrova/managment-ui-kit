import React from "react";
import './style.css';
import {FileType} from "../File/type";
import {Button} from "../Button";

interface FileProps extends FileType {
    onFileDelete: (fileId: number) => void
}

const File = ({title, onFileDelete, size, preview, format, id}: FileProps) => {
    return (
        <div className='addFile'>
            <div className='addFile__preview'>
                <img src={preview} alt="preview"/>
            </div>
            <div className="addFile__information">
                <span className='addFile__information-header'>{title}{format}</span>
                <div className="addFile__information-footer">
                    <span className='addFile__information-size'>{size}</span>
                    <Button onClick={() => onFileDelete(id)} text={'Delete'} size={"small"}/>
                </div>
            </div>

        </div>
    )
}


export {File}