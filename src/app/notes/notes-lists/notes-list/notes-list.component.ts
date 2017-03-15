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
  private notes: FirebaseListObservable<Note[]>;
  private currentPageNotes: Note[] = [];
  private currentPageSections = [];
  private subscription;
  private pageHeaderTitle: string;
  private currentPagesectionTitles: string[] = [];
  private sectionArray = [];

  constructor(private noteService: NoteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.notePage = params['id']
        this.getNotes();
        this.getHeaderTitle();
      }
    );
    // setTimeout(() => { console.log(''); }, 710);
  }

  getNotes() {
    let array1 = [];
    this.notes = this.noteService.getNotes();
    this.notes.forEach(element => {
      array1.push(element);
      array1.forEach(note => {
        note.forEach(item => {
          if (item.page === this.notePage) {
            this.currentPageNotes.push(item)

            if (this.sectionArray.indexOf(item.section) == -1) {
              this.sectionArray.push(item.section);
            }
            this.sectionArray.slice((this.sectionArray.length - 1), (this.sectionArray.length));
          }
        });
      });
    });
    setTimeout(() => {
      for (let i = 0; i < this.sectionArray.length; i++) {
        this.currentPageSections.push(this.currentPageNotes.filter(item => {
          return item.section === this.sectionArray[i]
        }));
      }
    }, 800);
  }

  getHeaderTitle() {
    this.pageHeaderTitle = this.noteService.getHeaderTitle(this.notePage);
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
