import React from 'react'
import { IMessage } from '../../context/types'


interface IPropsSB {
    messages: IMessage[]
}

export const SnackError = ({messages}: IPropsSB) => {
    return (
        <>
           <p>{messages}</p> 
        </>
    )
}