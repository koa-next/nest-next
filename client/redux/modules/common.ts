import { createAction, handleActions } from 'redux-actions';
import { ofType } from 'redux-observable';
import { map } from 'rxjs/operators';

// state
export interface State {
  num: number;
}

const initialState: State = {
  num: 0,
};

// actionTypes
const GET_NUM: string = 'SET_NUM';
const GET_NUM_SUCCESS: string = 'SET_NUM_SUCCESS';

// actions
export const getNum = createAction(GET_NUM);
export const getNumSuccess = createAction(GET_NUM_SUCCESS);

// reducers
const common = handleActions(
  {
    [GET_NUM_SUCCESS]: (state: State, { payload }) => {
      return {
        ...state,
        ...payload,
      };
    },
  },
  initialState,
);

export const reducers = {
  common,
};

// epics
const getNumEpics = action$ =>
  action$.pipe(
    ofType(GET_NUM),
    map(() => {
      return getNumSuccess({
        num: 1,
      });
    }),
  );
export const epics = [getNumEpics];
