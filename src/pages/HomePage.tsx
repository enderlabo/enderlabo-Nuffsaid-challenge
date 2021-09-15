import { FC, useEffect, useReducer, useState } from 'react';
import { Button, Container, Grid } from '@material-ui/core';
import ObservableReducer from '../context/reducer/observableReducer'
import { INITIAL_STATE } from '../context/ObservableProvider';
import { Header } from '../components/layout/Header'
import { useHomeStyles } from '../hooks/useStyles';
import { useSelectors } from '../hooks/useSelectors'
import { CardMessage } from '../components/CardMessage/CardMessage';
import { Priority } from '../context/types';
import { useSnackbar, SnackbarKey } from 'notistack'

import {
  subscribe,
  clearMessage,
  clearMessages,
  setFetching,
  addIncomingError
} from "../context/context";


export const HomePage: FC<{}> = () => {
  //useReducer
  const observableReducer = useReducer(ObservableReducer, INITIAL_STATE);
  //Custom hooks useSelector
  const {
    getMessagesType,
    getFetching,
    getMessage,
    getNextError,
    getIncomingError,
  } = useSelectors(observableReducer, (state) => ({
    getMessagesType: (type: Priority) =>
      state[type].map((id: string) => state.messages[id]),
    getMessage: (id: string) => state.messages[id],
    getFetching: () => state.fetching,
    getNextError: () => state.nextError,
    getIncomingError: () => state.incomingError,
  }));
  //Dispatch from reducer
  const [, dispatch] = observableReducer;
  //Flag from stop Observable.susbcribe
  const fetching = getFetching();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  ////Data Destructuring from store/observable
  const errorMessages = getMessagesType(Priority.Error);
  const warningMessages = getMessagesType(Priority.Warning);
  const infoMessages = getMessagesType(Priority.Info);
  const incomingError = getIncomingError();
  const nextError = getNextError();

   //Call the Observable
   useEffect(() => subscribe(dispatch), [dispatch]);
  //remove one message from array
  const handleRemoveMessage = (id: string) => {
    dispatch(clearMessage(id));
  };
  //Stop or Start Observable.Subscribe
  const handleFetching = () => {
    dispatch(setFetching(!fetching));
  };
  //clear all message
  const handleClearAllMessage = () => {
    dispatch(clearMessages(undefined));
  };
 

  const [key, setKey] = useState<SnackbarKey>()

  const action = (key: any) => (
    <Button variant="outlined" color="primary" 
      onClick={
        () => { 
          closeSnackbar(key);
          dispatch(addIncomingError(undefined)); 
      }}
    >
            Clear
    </Button>
  )
  useEffect(() => {
    if( nextError !== undefined){
      
      if( incomingError !== undefined ){
        enqueueSnackbar(getMessage(incomingError)?.messages, 
          {   
            variant: 'error',
            autoHideDuration: 2000,
          }
        )
      }
      closeSnackbar(key)
      const newKey = enqueueSnackbar(getMessage(nextError)?.messages, 
          {   
            variant: 'error',
            persist: true,
            action
            
          }
        )
      setKey(newKey)
      
    } else {  
        closeSnackbar(key)
    }
  }, [nextError])
  
  const useStyles = useHomeStyles();
  return (
    <main>
      <Header
        btnTextPrimary={fetching ? "Stop" : "Start"}
        btnTextSecondary="Clear"
        title="nuffsaid.com Coding Challenge"
        handleFetching={handleFetching}
        handleClearAllMessage={handleClearAllMessage}
      />

      <Container className={useStyles.root}>
        <Grid container spacing={4}>
          <CardMessage
            c="#F56236"
            messages={errorMessages}
            title={"Error Type"}
            handleRemoveMessage={handleRemoveMessage}
          />
          <CardMessage
            c="#FCE788"
            messages={warningMessages}
            title={"Warning Type"}
            handleRemoveMessage={handleRemoveMessage}
          />
          <CardMessage
            c="#88FCA3"
            messages={infoMessages}
            title={"Info Type"}
            handleRemoveMessage={handleRemoveMessage}
          />
        </Grid>
      </Container>
    </main>
  );
}
