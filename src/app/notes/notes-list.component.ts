import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { Router, ActivatedRoute } from '@angular/router';

import { NoteService } from './service/note.service';
import { Note } from './note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NotesListComponent implements OnInit, OnDestroy {

  private notePage: string;
  private currentPageSections = [];
  private subscription;
  private pageHeaderTitle: string;
  private sectionArray = [];

  constructor(private noteService: NoteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.notePage = params['id']
        this.noteService.getNotes();
        this.noteService.createArrays(this.notePage);
        this.currentPageSections = this.noteService.getCurrentPageSections();
      }
    );
    // setTimeout(() => { console.log(this.currentPageSections) }, 710);
  }

  toAdd(sectionName) {
    this.router.navigate(['notes/' + this.notePage + '-notes/' + this.notePage + '/new/' + sectionName]);
  }

  onCanEdit(note: Note) {
    note.isEditable = !note.isEditable;
  }

  onDelete(note: Note) {
    this.currentPageSections.forEach(array => {
      array.splice(array.indexOf(note), 1)
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
