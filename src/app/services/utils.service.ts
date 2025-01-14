import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  private globalStateSubject = new BehaviorSubject<string>('');
  globalState$ = this.globalStateSubject.asObservable();

  constructor(private router: Router) {}

  navigationUtil(route: string) {
    this.globalStateSubject.next(route);
  }

  getCurrentState() {
    return this.globalStateSubject.getValue();
  }
}



