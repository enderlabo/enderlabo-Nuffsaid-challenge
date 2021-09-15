import { Reducer } from 'react';
import { INITIAL_STATE } from '../ObservableProvider';
import { addMessage, removeMessage } from '../../utils/index';
import { Actions, IMessage, INIT_STATE, Priority, TypeActions } from "../types";


//StreamReducer
const ObservableReducer: Reducer<INIT_STATE, TypeActions> = (state = INITIAL_STATE, { type, data }) => {
    switch (type) {
      case Actions.SET_MESSAGE: {
        // short circuit if we're not listening
        if (!state.fetching) {
          return state;
        }
  
        const { priority, id } = data as IMessage;
        return {
          ...state,
          messages: {
            ...state.messages,
            [id]: data as IMessage,
          },
          [priority]: addMessage(state[priority], id),
          incomingError: priority === Priority.Error ? state.nextError : state.incomingError,
          nextError: priority === Priority.Error ? (data as IMessage).id : state.nextError,      };
      }
      case Actions.ADD_INCOMING_ERROR: 
        return {
          ...state,
          incomingError: state.nextError,
          nextError: undefined
        };
      case Actions.CLEAR_MESSAGES:
        return {
          ...state,
          messages: {},
          [Priority.Info]: [],
          [Priority.Warning]: [],
          [Priority.Error]: [],
          nextError: undefined,
        };
      case Actions.CLEAR_MESSAGE: {
        const { [data as string]: removed, ...messages } = state.messages;
        const { priority, id } = removed;
  
        return {
          ...state,
          messages: messages,
          [priority]: removeMessage(state[priority], id),
          nextError: id === state.nextError ? undefined : state.nextError,
        };
      }
      case Actions.REMOVE_NEXT_ERROR: 
        return {
          ...state,
          incomingError: undefined
        }
      case Actions.SET_FETCHING:
        return { ...state, fetching: data as boolean };
      default:
        return state;
    }
  };

  export default ObservableReducer;