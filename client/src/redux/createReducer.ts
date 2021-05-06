import { ActionTypesInterfaces } from './types';

function createReducer<T>(initialState: T, handlers: any) {
  return (state = initialState, action: ActionTypesInterfaces) => {
    const handler = handlers[action.type];
    if (!handler) {
      return { ...state };
    }
    return handler(state, action);
  };
}

export { createReducer };
