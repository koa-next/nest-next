import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import {
  epics as commonEpics,
  reducers as commonReducers,
  State as commonState,
} from './common';

export interface State {
  common: commonState;
}

export const rootReducers = combineReducers({
  ...commonReducers,
});

const allEpics = [...commonEpics];

export const rootEpics = combineEpics(...allEpics);
