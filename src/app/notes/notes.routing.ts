import { Routes, RouterModule } from '@angular/router';

import { GitNotesComponent } from './git-notes/git-notes.component';
import { GitNoteAddComponent } from './git-notes/git-note-add.component';
import { GitNoteEditComponent } from './git-notes/git-note-edit.component';


const NOTES_ROUTES: Routes = [
    
        
            { path: 'git-notes', component: GitNotesComponent },
            { path: 'git-notes/new', component: GitNoteAddComponent },
            { path: 'git-notes/:id/edit', component: GitNoteEditComponent }
        
    
]

export const notesRouting = RouterModule.forChild(NOTES_ROUTES);