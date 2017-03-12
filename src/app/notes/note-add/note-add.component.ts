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

  constructor(private formBuilder: FormBuilder, private noteService: NoteService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id1')) {
          this.notePage = params['id1']
        }
        if (params.hasOwnProperty('id2')) {
          this.noteSection = params['id2']
        }
      }
    )
    this.getSections();
    this.getHeaderTitle();
    this.initForm();
  }

  initForm() {
    this.noteForm = this.formBuilder.group({
      section: [this.noteSection, Validators.required],
      title: ['', Validators.required],
      content: ['', Validators.required],
      side: [''],
      important: [''],
      isEditable: false,
      page: this.notePage
    })
  }


  onSubmit() {
    this.noteService.storeNote(this.noteForm.value)
    this.navigateBack();
  }

  getSections() {
    this.sections = this.noteService.getSections(this.notePage);
  }

  getHeaderTitle() {
    this.headerTitle = this.noteService.getHeaderTitle(this.notePage);
  }

  onCancel() {
    this.navigateBack();
  }

  navigateBack() {
    this.router.navigate(['/' + this.notePage + '-notes']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
