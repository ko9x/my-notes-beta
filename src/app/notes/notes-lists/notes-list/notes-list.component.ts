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
  private currentPagesectionTitles: string[] = []
  private sectionArray = [];

  constructor(private noteService: NoteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.notePage = params['id']
        this.getNotes();
        this.getCurrentPageNotes();
        this.getHeaderTitle();
      }
    );
    setTimeout(() => {
      this.currentPageSections.push(this.currentPageNotes.filter(item => {
        return item.section === 'general'
      }))
    }, 600);
    setTimeout(() => {
      this.currentPageSections.push(this.currentPageNotes.filter(item => {
        return item.section === 'misc'
      }))
    }, 600)
    setTimeout(() => {
      this.currentPageSections.push(this.currentPageNotes.filter(item => {
        return item.section === 'commit'
      }))
    }, 600)




    setTimeout(() => { console.log(this.sectionArray); }, 710);
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

  getNotes() {
    let array1 = [];
    this.notes = this.noteService.getNotes();
    this.notes.forEach(element => {
      array1.push(element)
      array1.forEach(note => {
        note.forEach(item => {
          if(item.page === this.notePage) {
            if(this.sectionArray.indexOf(item.section) == -1) {
            this.sectionArray.push(item.section);
          }
          this.sectionArray.slice((this.sectionArray.length -1), (this.sectionArray.length))
          }
          
        })
      })
    })
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
