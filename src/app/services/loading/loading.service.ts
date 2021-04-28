import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public isLoading: boolean = false;

  loadSubject = new Subject<boolean>();

  constructor() { }

  load(isOk: boolean) {
    if (!isOk) {
      setTimeout(() => {
        this.isLoading = isOk;
        this.loadSubject.next(this.isLoading);
      }, 1500);
    } else {
      this.isLoading = isOk;
      this.loadSubject.next(this.isLoading);
    }
  }
}
