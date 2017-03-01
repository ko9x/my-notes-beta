import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { GitNotesComponent } from './notes/git-notes/git-notes.component';

const APP_ROUTES: Routes = [
    {path: 'notes', children: [{path: 'git-notes', component: GitNotesComponent}]},
    {path: '', component: HomeComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);