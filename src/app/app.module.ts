import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home.component';
import { NotesModule } from './notes/notes.module';
import { routing } from './app.routing';
import { FilterPipe } from './notes/pipes/filter.pipe';

export const firebaseConfig = {
  apiKey: "AIzaSyBJUm2Qdj_jwCfgKKc1ImgaGzPzxmumtw4",
  authDomain: "my-notes-64d6a.firebaseapp.com",
  databaseURL: "https://my-notes-64d6a.firebaseio.com",
  storageBucket: "my-notes-64d6a.appspot.com",
  messagingSenderId: "921992896364"
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NotesModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
