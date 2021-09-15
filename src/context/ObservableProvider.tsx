import { useReducer } from 'react';
import { AppCtx } from './context';
import ObservableReducer from './reducer/observableReducer';
import { INIT_STATE, Priority } from './types';

interface IProps {
    children: JSX.Element | JSX.Element[]
}

//initial State
export const INITIAL_STATE: INIT_STATE = {
    messages: {},
    fetching: true,
    nextError: undefined,
    [Priority.Error]: [],
    [Priority.Info]: [],
    [Priority.Warning]: [],
    incomingError: undefined,
}

export const ObservableProvider = ({ children }: IProps) => {

    const [observableState,] = useReducer(ObservableReducer, INITIAL_STATE);

    return(
        <AppCtx.Provider value={observableState}>
            { children }
        </AppCtx.Provider>
    )
}
