import { tick, TimeActions } from "../actions/time";
import { Epic } from "redux-observable";
import { ofType } from "redux-observable";
import { delay, map } from "rxjs/operators";
import { Action } from "redux";

export const tickEpic: Epic<Action, {}> = action$ =>
  action$.pipe(ofType(TimeActions.tick), delay(1000), map(tick));
