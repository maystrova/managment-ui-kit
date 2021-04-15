import React from 'react'
import {
    StyledFilesPage,
    StyledFilesPageHeader,
    StyledFilesPageRow,
    StyledFilesPageItems,
} from './style'
import { TAG_TYPE } from '../../Components/Tag'
import { filesType } from './types'

export interface FilesPageProps {
    files?: filesType[]
}

const FilesPage = ({ files }: FilesPageProps) => {
    return (
        <StyledFilesPage>
            <StyledFilesPageHeader>
                <StyledFilesPageItems>
                    <StyledFilesPageRow>
                        <li>Image</li>
                        <li>Name</li>
                        <li>Size</li>
                        <li>Uploaded by</li>
                        <li>Tag</li>
                        <li>Date</li>
                    </StyledFilesPageRow>
                </StyledFilesPageItems>
            </StyledFilesPageHeader>

            {/*<StyledFilesPageItems>*/}
            {/*    {files.map(file => {*/}
            {/*        file.title*/}
            {/*    })}*/}
            {/*</StyledFilesPageItems>*/}
        </StyledFilesPage>
    )
}

export { FilesPage }
