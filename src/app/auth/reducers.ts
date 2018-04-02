import { Action } from '@ngrx/store';


export interface State {

}

export const initialState: State = {

};

export function reducers(state = initialState, action: Action): State {
  switch (action.type) {

    default:
      return state;
  }
}
