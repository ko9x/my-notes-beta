import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

import { NoteService } from '../notes/service/note.service';
import { Note } from '../notes/note';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private notes: FirebaseListObservable<Note[]>;
  private pageNotesArray = [];
  private pageNamesArray = [];
  routesArray = []
  private currentUser;

  constructor(private noteService: NoteService, private router: Router, private angularFire: AngularFire) { }

  ngOnInit() {
    this.angularFire.auth.subscribe(authState => {
      if (authState) {
        this.currentUser = authState.auth.email
        this.noteService.getNotes().subscribe((response: any) => {
          if (response) {
            response.forEach(note => {
              if (this.pageNamesArray.indexOf(note.page) == -1) {
                this.pageNamesArray.push(note.page)
              }
            });
            for (let i = 0; i < this.pageNamesArray.length; i++) {
              this.pageNotesArray.push(response.filter(item => {
                return item.page === this.pageNamesArray[i]
              }));
            }
          }
        });
      }
    });

  }

  logout() {
    this.angularFire.auth.logout();
    this.currentUser = null;
    this.router.navigate(['/']);
  }

}
