import { Routes, RouterModule } from '@angular/router';

import { AngularFireNotesListComponent } from './notes-lists/angular-fire-notes-list/angular-fire-notes-list.component';
import { GitNotesListComponent } from './notes-lists/git-notes-list/git-notes-list.component';
import { NoteAddComponent } from './note-add/note-add.component';
import { NoteEditComponent } from './note-edit/note-edit.component';


const NOTES_ROUTES: Routes = [
    
            { path: 'angular-fire-notes', component: AngularFireNotesListComponent},
            { path: 'git-notes', component: GitNotesListComponent },
            { path: 'angular-fire-notes/:id1/new', component: NoteAddComponent},
            { path: 'git-notes/:id1/new', component: NoteAddComponent },
            { path: 'angular-fire-notes/:id1/new/:id2', component: NoteAddComponent},
            { path: 'git-notes/:id1/new/:id2', component: NoteAddComponent },
            { path: 'angular-fire-notes/:id1/:id2/edit', component: NoteEditComponent},
            { path: 'git-notes/:id1/:id2/edit', component: NoteEditComponent }
        
    
] 

export const notesRouting = RouterModule.forChild(NOTES_ROUTES);