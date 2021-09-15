import { subscribe as observableMessage } from '../api/Api'

import { createContext, Dispatch } from 'react'
import {
  Actions,
  AddIncomingError,
  RemoveNextError,
  SetFetching,
  ClearMessage,
  ClearMessages,
  SetMessage,
  TypeActions,
  INIT_STATE,
  IMessage,
} from "./types";


//create context
export const AppCtx = createContext<INIT_STATE | null>({} as INIT_STATE);

//Actions
export const setMessage: SetMessage = (data) => ({
    type: Actions.SET_MESSAGE,
    data,
  });
  
  export const clearMessages: ClearMessages = (data) => ({
    type: Actions.CLEAR_MESSAGES,
    data,
  });
  
  export const clearMessage: ClearMessage = (data) => ({
    type: Actions.CLEAR_MESSAGE,
    data,
  });
  
  export const setFetching: SetFetching = (data) => ({
    type: Actions.SET_FETCHING,
    data,
  });
  
  export const addIncomingError: AddIncomingError = (data) => ({
    type: Actions.ADD_INCOMING_ERROR,
    data,
  });
  
  export const removeNextError: RemoveNextError = (data) => ({
    type: Actions.REMOVE_NEXT_ERROR,
    data,
  });
  
  export const subscribe = (dispatch: Dispatch<TypeActions>) =>
  observableMessage((message: IMessage) => dispatch(setMessage(message)));





