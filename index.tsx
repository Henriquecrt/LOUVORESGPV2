import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './src/app.component'; 
import { provideRouter } from '@angular/router';
import { routes } from './src/app.routes'; 
import { provideHttpClient, withJsonpSupport } from '@angular/common/http';

// Importações do Firebase
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
// 👇 NOVA IMPORTAÇÃO DO AUTH 👇
import { getAuth, provideAuth } from '@angular/fire/auth'; 

// Configuração Direta
const firebaseConfig = {
  apiKey: "AIzaSyCb4xuxWrCGNuFM8yAFVPXvI7K35LX9WCE",
  authDomain: "louvores-gpv.firebaseapp.com",
  projectId: "louvores-gpv",
  storageBucket: "louvores-gpv.firebasestorage.app",
  messagingSenderId: "876395905450",
  appId: "1:876395905450:web:deba8f7763c562aec42bd3"
};

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withJsonpSupport()), 
    
    // Inicializa Firebase + Banco + Auth
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    // 👇 LIGANDO O SISTEMA DE LOGIN 👇
    provideAuth(() => getAuth()) 
  ]
}).catch((err) => console.error(err));