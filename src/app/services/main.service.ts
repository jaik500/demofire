import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  isLoggedIn = false;

  constructor() { }
}
