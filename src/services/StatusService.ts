import { Observable, BehaviorSubject, Subject } from "rxjs";
export type TStatus = "ready" | "in progress" | "done";

export interface IState {
  status: TStatus;
}

export default class StatusService {
  initialState = {
    status: "in progress",
  } as IState;

  private _status$: BehaviorSubject<TStatus> = new BehaviorSubject(
    this.initialState.status
  );

  get status$() {
    return this._status$.asObservable();
  }

  //   changeStatus() {}
}
