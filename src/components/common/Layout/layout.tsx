import React, {FC, ReactNode} from 'react'
import {Header} from "../../Header/Header"

type ProviderLayoutType = {
    children: ReactNode
    hasHeader: boolean
}

export const ProviderLayout: FC<ProviderLayoutType> = ({
                                                           children,
                                                           hasHeader
                                                       }) => {
    return (
        <>
            {hasHeader && <Header/>}
            {children}
        </>
    )
}