import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { GitNotesComponent } from './notes/git-notes/git-notes.component';

const APP_ROUTES: Routes = [
    {path: 'notes', loadChildren: 'app/notes/notes.module#NotesModule'},
    {path: '', component: HomeComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);