import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { Router, ActivatedRoute } from '@angular/router';

import { NoteService } from '../../service/note.service';
import { Note } from '../../note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NotesListComponent implements OnInit, OnDestroy {

  private notePage: string;
  notes: FirebaseListObservable<Note[]>;
  private currentPageNotes: Note[] = [];
  private currentPageSections = [];
  private subscription;

  constructor(private noteService: NoteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.notePage = params['id']
        this.getNotes();
        this.getCurrentPageNotes();
        this.getCurrentPageSections();
      }
    );

    console.log(this.notes)
    console.log(this.currentPageNotes)
    console.log(this.currentPageSections)
  }

  getCurrentPageNotes() {
    this.notes.forEach(element => {
      element.forEach(note => {
        if (note.page === this.notePage) {
          this.currentPageNotes.push(note)
        }
      });
    });
  }

  getCurrentPageSections() {
    console.log('from getCurrentPageSections', this.currentPageNotes)

  }

  //    if (this.sectionArray.indexOf(item.section) == -1) {
  //  +            this.sectionArray.push(item.section);
  //  +          }
  //  +          this.sectionArray.slice((this.sectionArray.length - 1), 

  getNotes() {
    let array1 = [];
    this.notes = this.noteService.getNotes();
    this.notes.forEach(element => {
      array1.push(element)
      element.forEach(note => {
        if (this.currentPageSections.indexOf(note.section) == -1) {
          this.currentPageSections.push(note.section);
        }
        this.currentPageSections.slice((this.currentPageSections.length - 1), this.currentPageSections.length)
      })
    })
  }

  toAdd(sectionName) {
    this.router.navigate(['notes/' + this.notePage + '-notes/' + this.notePage + '/new/' + sectionName]);
  }

  onCanEdit(note: Note) {
    note.isEditable = !note.isEditable;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
