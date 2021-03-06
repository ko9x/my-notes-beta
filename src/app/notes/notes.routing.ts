import { Routes, RouterModule } from '@angular/router';

import { NotesListComponent } from './notes-list.component';
import { NoteAddComponent } from './note-add/note-add.component';
import { NoteEditComponent } from './note-edit/note-edit.component';

const NOTES_ROUTES: Routes = [
    
            { path: 'list/:id', component: NotesListComponent},
            { path: 'note/new', component: NoteAddComponent},
            { path: 'note/:id1/new', component: NoteAddComponent},
            { path: 'note/:id1/new/:id2', component: NoteAddComponent},
            { path: 'note/:id1/:id2/edit', component: NoteEditComponent}
] 

export const notesRouting = RouterModule.forChild(NOTES_ROUTES);