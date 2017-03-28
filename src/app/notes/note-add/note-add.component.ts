import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';

import { NoteService } from '../service/note.service';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css']
})
export class NoteAddComponent implements OnInit, OnDestroy {

  private subscription;
  private noteSection: string = "";
  private notePage: string = "";
  private noteForm: FormGroup;
  private sections: string[] = [];
  private headerTitle: string = "";
  private sectionToggleButton = "";
  private addingNewPage = false;
  private showRadios = true

  constructor(private formBuilder: FormBuilder, private noteService: NoteService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id1')) {
          this.notePage = params['id1']
          this.sectionToggleButton = "Add New Section"
        }
        if (params.hasOwnProperty('id2')) {
          this.noteSection = params['id2']
          this.sectionToggleButton = "Add New Section"
        } 
        if (!params.hasOwnProperty('id1') && !params.hasOwnProperty('id2')) {
          this.addingNewPage = true
          this.showRadios = false
        }

      }
    )
    this.getSections();
    this.initForm();
    this.noteService.startNotes();
    this.noteService.createArrays(this.notePage)
  }

  initForm() {
    this.noteForm = this.formBuilder.group({
      section: [this.noteSection, [Validators.required, Validators.pattern("[a-z0-9]+")]],
      title: ['', Validators.required],
      content: ['', Validators.required],
      side: [''],
      important: [''],
      isEditable: false,
      page: [this.notePage, [Validators.required, Validators.pattern("[a-z0-9]+")]]
    })
  }


  onSubmit() {
    this.notePage = this.noteForm.value.page
    this.noteService.storeNote(this.noteForm.value)
    this.navigateBack();
  }

  getSections() {
    this.sections = this.noteService.getSections();
  }

  onCancel() {
    if(this.notePage) {
      this.navigateBack()
    } else {
      this.router.navigate([''])
    }

  }

  navigateBack() {
    this.router.navigate(['/notes/list/' + this.notePage]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  toggleRadios() {
    this.showRadios = !this.showRadios;
    if(this.showRadios) {
      this.sectionToggleButton = 'Add New Section'
    } else {
      this.sectionToggleButton = 'Show Existing Sections'
    }
  }


}
