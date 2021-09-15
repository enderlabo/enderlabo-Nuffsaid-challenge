import React from 'react'
import { Contain, Divider, Navbar, NavTitle } from '../../assets/style'
import { Button } from '../Button/Button'

//interface props
interface IProps {
    btnTextPrimary: string; 
    btnTextSecondary: string; 
    title: string;
    handleClearAllMessage: ( handleClearAllMessage: void ) => void;
    handleFetching: (handleFetching: void) => void;
}

export const Header: React.FC<IProps> = ({ btnTextPrimary,btnTextSecondary , title, handleFetching, handleClearAllMessage }) => {
    return (
      <>
        <Navbar>
          <NavTitle>{title}</NavTitle>
        </Navbar>
        <Divider />
        <Contain>
          <Button func={handleFetching} title={btnTextPrimary} />
          <Button title={btnTextSecondary} func={handleClearAllMessage} />
        </Contain>
      </>
    );
}
