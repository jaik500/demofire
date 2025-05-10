import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.development';
import { provideMarkdown } from 'ngx-markdown'
import { provideStorage, getStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideAnimationsAsync(), 
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore (() => getFirestore()),
    provideStorage(() => getStorage()),
    provideMarkdown(),
    
  ]
};
