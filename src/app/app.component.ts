import { RouterModule } from '@angular/router';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { environment } from '../environments/environment';
import { MainService } from './services/main.service';


@Component({
    selector: 'app-root',
    imports: [
    RouterModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatIconModule,
    MatMenuModule,
  
],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  isProd = environment.prod;

  authService = inject(AuthService);
  mainService = inject(MainService);
  readonly dialog = inject(MatDialog);
  title = signal('Hotspot Strats');
  showmenu = false;
  hideUserMenu = signal(true);

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      if (user) {
        this.authService.currentUserSig.set({
          email: user.email!,
          username: user.displayName!,
          id: 0,
          password: '',
          name: '',
          roles: [],
          gender: '',
          createDate: undefined,
          status: false
        });
      } else {
        this.authService.currentUserSig.set(null);
      }
      console.log(this.authService.currentUserSig())
    })
  }

  logout(){
    const uLoggingOut = confirm("Are you sure you want to logout?");
    if (uLoggingOut) {
      this.authService.logout();
    }
  }


}
