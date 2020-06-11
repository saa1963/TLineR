import { Action, Reducer } from 'redux';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface CurrentUserState {
  name: string;
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.
// Use @typeName and isActionType for type detection that works even after serialization/deserialization.

export interface ChangeCurrentUserAction { type: 'CHANGE_CURRENTUSER', name: string }

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
export type KnownAction = ChangeCurrentUserAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
  change: (pname: string) => ({ type: 'CHANGE_CURRENTUSER', name: pname } as ChangeCurrentUserAction)
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

export const reducer: Reducer<CurrentUserState> = (state: CurrentUserState | undefined, incomingAction: Action): CurrentUserState => {
  if (state === undefined) {
    return { name: '' };
  }

  const action = incomingAction as KnownAction;
  switch (action.type) {
    case 'CHANGE_CURRENTUSER':
      return { name: action.name };
    default:
      return state;
  }
};
