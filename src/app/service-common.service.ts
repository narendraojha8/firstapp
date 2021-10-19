import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ServiceCommonService {
  subject = new BehaviorSubject<string>(null);
  captureClick: Observable<string> = this.subject.asObservable();

  constructor() {}

  clickCapture(value) {
    this.subject.next(value);
    return this.captureClick;
  }
}
