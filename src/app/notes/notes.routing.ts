import { Routes, RouterModule } from '@angular/router';

import { NotesComponent } from './notes.component';
import { NoteAddComponent } from './note-add/note-add.component';
import { NoteEditComponent } from './note-edit/note-edit.component';


const NOTES_ROUTES: Routes = [
    
        
            { path: 'git-notes', component: NotesComponent },
            { path: 'git-notes/new', component: NoteAddComponent },
            { path: 'git-notes/new/:id', component: NoteAddComponent },
            { path: 'git-notes/:id/edit', component: NoteEditComponent }
        
    
]

export const notesRouting = RouterModule.forChild(NOTES_ROUTES);