import React from 'react'
import { Btn } from '../../assets/style';

interface IProps {
    title: string,
    func: () => void 
}

export const Button: React.FC<IProps> = ({title, func }) => {
    return (
        <Btn onClick={func}>
            {title}
        </Btn>
    )
}
