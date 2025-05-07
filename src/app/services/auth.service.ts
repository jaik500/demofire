import { inject, Injectable, signal } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, user } from '@angular/fire/auth'
import { from, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  firebaseAuth = inject(Auth);
  user$ = user(this.firebaseAuth) // if user is logged in, it will allow access to user data
  currentUserSig = signal< User | null | undefined> (undefined)

  constructor() { }

  register(email: string, username: string, password: string) : Observable<void> {
    const promise = createUserWithEmailAndPassword(
      this.firebaseAuth, 
      email, 
      password).then(response => updateProfile(response.user, {displayName: username}),
    );

    return from(promise);
  }

  login(email: string, password: string):  Observable<void> {
    const promise = signInWithEmailAndPassword(this.firebaseAuth, email, password).then(() => {});
    return from (promise);
  }

  logout() {
    const promise = signOut(this.firebaseAuth);
    return from (promise);
  }

}
