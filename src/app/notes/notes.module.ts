import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';


import { NotesComponent } from './notes.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { NoteAddComponent } from './note-add/note-add.component';
import { NoteService } from './service/note.service';
import { notesRouting } from './notes.routing';
import { NoteItemComponent } from './note-item.component';
import { KeysPipe } from './pipes/keys.pipe';

export const firebaseConfig = {
  apiKey: "AIzaSyBJUm2Qdj_jwCfgKKc1ImgaGzPzxmumtw4",
  authDomain: "my-notes-64d6a.firebaseapp.com",
  databaseURL: "https://my-notes-64d6a.firebaseio.com",
  storageBucket: "my-notes-64d6a.appspot.com",
  messagingSenderId: "921992896364"
}

// EXPERIMENTAL DATABASE CONFIG

// export const firebaseConfig = {
//   apiKey: "AIzaSyDB_swZVnTlvXHxVqpESfq0R3D5SeizvuU",
//   authDomain: "test-notes-d325b.firebaseapp.com",
//   databaseURL: "https://test-notes-d325b.firebaseio.com",
//   storageBucket: "test-notes-d325b.appspot.com",
//   messagingSenderId: "313019058433"
// }

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    notesRouting
  ],
  declarations: [NotesComponent, NoteEditComponent, NoteAddComponent, NoteItemComponent, KeysPipe],
  providers: [NoteService]
})
export class NotesModule { }
