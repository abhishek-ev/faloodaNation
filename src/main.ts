import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATSlyB3ZxYh7TpkoprwDGTjU08vfKPyXM",
  authDomain: "feedback-crud-eead7.firebaseapp.com",
  databaseURL: "https://falooda-nation-6f2f6-default-rtdb.firebaseio.com",
  projectId: "feedback-crud-eead7",
  storageBucket: "feedback-crud-eead7.firebasestorage.app",
  messagingSenderId: "683191503080",
  appId: "1:683191503080:web:e7a782d362b9e43844a15d",
  measurementId: "G-TT29W4VY56"
};


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled'
      }),
    ),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
  ]
});
