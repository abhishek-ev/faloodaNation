import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA3T1FD9F6S8Dxe6kVtoF3jwtbJ-m12A0U",
  authDomain: "falooda-nation-c1ee6.firebaseapp.com",
  projectId: "falooda-nation-c1ee6",
  storageBucket: "falooda-nation-c1ee6.firebasestorage.app",
  messagingSenderId: "1001357655451",
  appId: "1:1001357655451:web:e270609f24e77e2c58f53e",
  measurementId: "G-6EF2HD8FHQ"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled'
      })
    ),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
  ]
};
