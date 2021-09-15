
//Priority of data from Streams.
export enum Priority {
    Error,
    Warning,
    Info,
}
//Initial  state
export type INIT_STATE = {
    messages: Record<string, IMessage>;
    fetching: Boolean;
    [Priority.Error]: Array<String>;
    [Priority.Warning]: Array<String>;
    [Priority.Info]: Array<String>;
    nextError?: String;
    incomingError?: String;
    };
//Message Interface
export interface IMessage {
    id: string,
    messages: string,
    priority: Priority
}
//Actions
  export enum Actions {
    SET_MESSAGE         = '[MESSAGES] add message',
    CLEAR_MESSAGES      = '[MESSAGES] remove all messages',
    CLEAR_MESSAGE       = '[MESSAGES] remove one message',
    SET_FETCHING        = '[MESSAGES] active fetching',
    ADD_INCOMING_ERROR  = '[MESSAGES] add incomingError',
    REMOVE_NEXT_ERROR   = '[MESSAGES] remove nextError',
  }

// createAtion(type, prepareAction?)
  type createAction<T, D> = (data: D) => { type: T; data: D };

export type SetMessage        = createAction<Actions.SET_MESSAGE, IMessage>;
export type ClearMessages     = createAction<Actions.CLEAR_MESSAGES, undefined>;
export type ClearMessage      = createAction<Actions.CLEAR_MESSAGE, string>;
export type SetFetching       = createAction<Actions.SET_FETCHING , boolean>;
export type AddIncomingError  = createAction<Actions.ADD_INCOMING_ERROR, undefined>;
export type RemoveNextError   = createAction<Actions.REMOVE_NEXT_ERROR, undefined>;

// ReturnType<Type>
export type TypeActions = ReturnType <
  | SetMessage
  | ClearMessages
  | ClearMessage
  | SetFetching
  | AddIncomingError
  | RemoveNextError
>;



