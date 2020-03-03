webpackJsonp([1,4],{

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(138);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(formBuilder, angularFire) {
        this.formBuilder = formBuilder;
        this.angularFire = angularFire;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.angularFire.auth.subscribe(function (authState) {
            if (authState) {
                _this.currentUser = authState.auth.email;
            }
        });
        this.userForm = this.formBuilder.group({
            'email': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
            'password': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
        });
    };
    HomeComponent.prototype.onSubmit = function () {
        this.angularFire.auth.login({
            email: this.userForm.value.email,
            password: this.userForm.value.password
        }, {
            method: __WEBPACK_IMPORTED_MODULE_2_angularfire2__["c" /* AuthMethods */].Password,
            provider: __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AuthProviders */].Password
        })
            .then(function (authState) { return console.log("logged in", authState); })
            .catch(function (error) { return console.log("fuck", error); });
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: 'app-home',
            template: "\n    <div class=\"container\">\n      <div *ngIf=\"currentUser\">\n        <h1>Please Select A Notes List From The Navbar Or <a routerLink=\"notes/note/new\" >Add A New Page</a></h1>\n      </div>\n      <div *ngIf=\"!currentUser\">\n        <h1>Please Login</h1>\n        <form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"form-group\">\n            <label for=\"email\">E-Mail</label>\n            <input type=\"text\"\n                   class=\"form-control\"\n                   id=\"email\"\n                   formControlName=\"email\">\n            <div *ngIf=\"userForm.controls['email'].invalid && userForm.controls['email'].dirty && userForm.controls['email'].touched\">\n                <p>Invalid Email</p>\n            </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\"\n               class=\"form-control\"\n               id=\"password\"\n               formControlName=\"password\">\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"userForm.invalid\">Login</button>\n        </form>\n      </div>\n    </div>\n  ",
            styles: [
                "\n    body {\n      padding-top: 70px;\n    }\n  "
            ],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* AngularFire */]) === 'function' && _b) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/sean/ionic-projects/my-notes-beta/src/home.component.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_note_service__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteAddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NoteAddComponent = (function () {
    function NoteAddComponent(formBuilder, noteService, route, router) {
        this.formBuilder = formBuilder;
        this.noteService = noteService;
        this.route = route;
        this.router = router;
        this.noteSection = "";
        this.notePage = "";
        this.sections = [];
        this.headerTitle = "";
        this.sectionToggleButton = "";
        this.addingNewPage = false;
        this.showRadios = true;
    }
    NoteAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            if (params.hasOwnProperty('id1')) {
                _this.notePage = params['id1'];
                _this.sectionToggleButton = "Add New Section";
            }
            if (params.hasOwnProperty('id2')) {
                _this.noteSection = params['id2'];
                _this.sectionToggleButton = "Add New Section";
            }
            if (!params.hasOwnProperty('id1') && !params.hasOwnProperty('id2')) {
                _this.addingNewPage = true;
                _this.showRadios = false;
            }
        });
        this.getSections();
        this.initForm();
        this.noteService.startNotes();
        this.noteService.createArrays(this.notePage);
    };
    NoteAddComponent.prototype.initForm = function () {
        this.noteForm = this.formBuilder.group({
            section: [this.noteSection, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern("[a-z0-9]+")]],
            title: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            content: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            side: [''],
            important: [''],
            isEditable: false,
            page: [this.notePage, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern("[a-z0-9]+")]]
        });
    };
    NoteAddComponent.prototype.onSubmit = function () {
        this.notePage = this.noteForm.value.page;
        this.noteService.storeNote(this.noteForm.value);
        this.navigateBack();
    };
    NoteAddComponent.prototype.getSections = function () {
        this.sections = this.noteService.getSections();
    };
    NoteAddComponent.prototype.onCancel = function () {
        if (this.notePage) {
            this.navigateBack();
        }
        else {
            this.router.navigate(['']);
        }
    };
    NoteAddComponent.prototype.pasteString = function (section) {
        var destination = document.getElementById(section).focus();
        document.execCommand('insertText', false, '<pre><code> </code></pre>');
    };
    NoteAddComponent.prototype.navigateBack = function () {
        this.router.navigate(['/notes/list/' + this.notePage]);
    };
    NoteAddComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    NoteAddComponent.prototype.toggleRadios = function () {
        this.showRadios = !this.showRadios;
        if (this.showRadios) {
            this.sectionToggleButton = 'Add New Section';
        }
        else {
            this.sectionToggleButton = 'Show Existing Sections';
        }
    };
    NoteAddComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: 'app-note-add',
            template: __webpack_require__(559),
            styles: [__webpack_require__(553)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_note_service__["a" /* NoteService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__service_note_service__["a" /* NoteService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], NoteAddComponent);
    return NoteAddComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/sean/ionic-projects/my-notes-beta/src/note-add.component.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_note_service__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NoteEditComponent = (function () {
    function NoteEditComponent(formBuilder, noteService, route, router) {
        this.formBuilder = formBuilder;
        this.noteService = noteService;
        this.route = route;
        this.router = router;
        this.notePage = "";
        this.sections = [];
        this.headerTitle = "";
    }
    NoteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            if (params.hasOwnProperty('id1')) {
                _this.notePage = params['id1'];
            }
            if (params.hasOwnProperty('id2')) {
                _this.noteId = params['id2'];
                _this.noteService.getNote(_this.noteId)
                    .subscribe(function (note) { return _this.currentNote = note; });
            }
        });
        this.noteService.startNotes();
        this.noteService.createArrays(this.notePage);
        this.getSections();
        this.initForm();
        setTimeout(function () { _this.initForm(); }, 150);
    };
    NoteEditComponent.prototype.initForm = function () {
        var noteSection = '';
        var noteTitle = '';
        var noteContent = '';
        var noteSide = '';
        var noteImportant = '';
        var noteIsEditable = false;
        if (this.currentNote != null) {
            noteSection = this.currentNote.section;
            noteTitle = this.currentNote.title;
            noteContent = this.currentNote.content;
            noteSide = this.currentNote.side;
            noteImportant = this.currentNote.important;
            noteIsEditable = this.currentNote.isEditable;
        }
        this.noteForm = this.formBuilder.group({
            section: [noteSection, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            title: [noteTitle, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            content: [noteContent, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            side: [noteSide],
            important: [noteImportant]
        });
    };
    NoteEditComponent.prototype.onSubmit = function () {
        this.noteService.updateNote(this.noteForm.value, this.noteId);
        this.navigateBack();
    };
    NoteEditComponent.prototype.getSections = function () {
        this.sections = this.noteService.getSections();
    };
    NoteEditComponent.prototype.onCancel = function () {
        this.navigateBack();
    };
    NoteEditComponent.prototype.pasteString = function (section) {
        var destination = document.getElementById(section).focus();
        document.execCommand('insertText', false, '<pre><code> </code></pre>');
    };
    NoteEditComponent.prototype.navigateBack = function () {
        this.router.navigate(['/notes/list/' + this.notePage]);
    };
    NoteEditComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    NoteEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: 'git-note-edit',
            template: __webpack_require__(560),
            styles: [__webpack_require__(554)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_note_service__["a" /* NoteService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__service_note_service__["a" /* NoteService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], NoteEditComponent);
    return NoteEditComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/sean/ionic-projects/my-notes-beta/src/note-edit.component.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_note_service__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotesListComponent = (function () {
    function NotesListComponent(noteService, router, route) {
        this.noteService = noteService;
        this.router = router;
        this.route = route;
        this.notePage = '';
        this.currentPageSections = [];
        this.sectionArray = [];
    }
    NotesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.notePage = params['id'];
            _this.noteService.startNotes();
            _this.noteService.createArrays(_this.notePage);
            _this.currentPageSections = _this.noteService.getCurrentPageSections();
        });
        // setTimeout(() => { console.log(this.currentPageSections.length) }, 1000);
    };
    NotesListComponent.prototype.toAdd = function (sectionName) {
        this.router.navigate(['notes/note/' + this.notePage + '/new/' + sectionName]);
    };
    NotesListComponent.prototype.onCanEdit = function (note) {
        note.isEditable = !note.isEditable;
    };
    NotesListComponent.prototype.onDelete = function (note) {
        this.currentPageSections.forEach(function (array) {
            array.splice(array.indexOf(note), 1);
        });
    };
    NotesListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    NotesListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: 'app-notes',
            template: __webpack_require__(562),
            styles: [__webpack_require__(556)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_note_service__["a" /* NoteService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_note_service__["a" /* NoteService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], NotesListComponent);
    return NotesListComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/sean/ionic-projects/my-notes-beta/src/notes-list.component.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notes_list_component__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__note_edit_note_edit_component__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__note_add_note_add_component__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_note_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__notes_routing__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__note_item_component__ = __webpack_require__(478);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesModule", function() { return NotesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var NotesModule = (function () {
    function NotesModule() {
    }
    NotesModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__notes_routing__["a" /* notesRouting */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__notes_list_component__["a" /* NotesListComponent */], __WEBPACK_IMPORTED_MODULE_5__note_edit_note_edit_component__["a" /* NoteEditComponent */], __WEBPACK_IMPORTED_MODULE_6__note_add_note_add_component__["a" /* NoteAddComponent */], __WEBPACK_IMPORTED_MODULE_9__note_item_component__["a" /* NoteItemComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_7__service_note_service__["a" /* NoteService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], NotesModule);
    return NotesModule;
}());
//# sourceMappingURL=/Users/sean/ionic-projects/my-notes-beta/src/notes.module.js.map

/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/notes/notes.module": [
		323
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 357;


/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(475);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/sean/ionic-projects/my-notes-beta/src/main.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(557),
            styles: [__webpack_require__(551)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/sean/ionic-projects/my-notes-beta/src/app.component.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_component__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__notes_notes_module__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__notes_pipes_filter_pipe__ = __webpack_require__(481);
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var firebaseConfig = {
    apiKey: "AIzaSyBJUm2Qdj_jwCfgKKc1ImgaGzPzxmumtw4",
    authDomain: "my-notes-64d6a.firebaseapp.com",
    databaseURL: "https://my-notes-64d6a.firebaseio.com",
    storageBucket: "my-notes-64d6a.appspot.com",
    messagingSenderId: "921992896364"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__notes_pipes_filter_pipe__["a" /* FilterPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__notes_notes_module__["NotesModule"],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_9__app_routing__["a" /* routing */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/sean/ionic-projects/my-notes-beta/src/app.module.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_component__ = __webpack_require__(319);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });


var APP_ROUTES = [
    { path: 'notes', loadChildren: 'app/notes/notes.module#NotesModule' },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__home_component__["a" /* HomeComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=/Users/sean/ionic-projects/my-notes-beta/src/app.routing.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notes_service_note_service__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(noteService, router, angularFire) {
        this.noteService = noteService;
        this.router = router;
        this.angularFire = angularFire;
        this.pageNotesArray = [];
        this.pageNamesArray = [];
        this.routesArray = [];
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.angularFire.auth.subscribe(function (authState) {
            if (authState) {
                _this.currentUser = authState.auth.email;
                _this.notes = _this.noteService.getNotes();
                _this.notes.forEach(function (element) {
                    element.forEach(function (note) {
                        if (_this.pageNamesArray.indexOf(note.page) == -1) {
                            _this.pageNamesArray.push(note.page);
                        }
                    });
                    var _loop_1 = function(i) {
                        _this.pageNotesArray.push(element.filter(function (item) {
                            return item.page === _this.pageNamesArray[i];
                        }));
                    };
                    for (var i = 0; i < _this.pageNamesArray.length; i++) {
                        _loop_1(i);
                    }
                });
            }
        });
    };
    NavbarComponent.prototype.logout = function () {
        this.angularFire.auth.logout();
        this.currentUser = null;
        this.router.navigate(['/']);
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__(558),
            styles: [__webpack_require__(552)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__notes_service_note_service__["a" /* NoteService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__notes_service_note_service__["a" /* NoteService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/sean/ionic-projects/my-notes-beta/src/navbar.component.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__note__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_note_service__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NoteItemComponent = (function () {
    function NoteItemComponent(noteService, router, route) {
        this.noteService = noteService;
        this.router = router;
        this.route = route;
        this.deleteNote = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* EventEmitter */]();
    }
    NoteItemComponent.prototype.ngOnInit = function () {
    };
    NoteItemComponent.prototype.onEdit = function (id) {
        this.router.navigate(['/notes/note/' + this.page + '/' + id + '/edit']);
    };
    NoteItemComponent.prototype.onDelete = function (id) {
        this.noteService.removeNote(id);
    };
    NoteItemComponent.prototype.onRemoveFromArray = function () {
        this.deleteNote.emit(this.note);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(), 
        __metadata('design:type', String)
    ], NoteItemComponent.prototype, "page", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__note__["a" /* Note */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__note__["a" /* Note */]) === 'function' && _a) || Object)
    ], NoteItemComponent.prototype, "note", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(), 
        __metadata('design:type', Object)
    ], NoteItemComponent.prototype, "deleteNote", void 0);
    NoteItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: 'app-note-item',
            template: __webpack_require__(561),
            styles: [__webpack_require__(555)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_note_service__["a" /* NoteService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__service_note_service__["a" /* NoteService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _d) || Object])
    ], NoteItemComponent);
    return NoteItemComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/sean/ionic-projects/my-notes-beta/src/note-item.component.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Note; });
var Note = (function () {
    function Note(id, page, section, title, content, side, important, isEditable) {
        this.id = id;
        this.page = page;
        this.section = section;
        this.title = title;
        this.content = content;
        this.side = side;
        this.important = important;
        this.isEditable = isEditable;
    }
    return Note;
}());
//# sourceMappingURL=/Users/sean/ionic-projects/my-notes-beta/src/note.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notes_list_component__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__note_add_note_add_component__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__note_edit_note_edit_component__ = __webpack_require__(321);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return notesRouting; });




var NOTES_ROUTES = [
    { path: 'list/:id', component: __WEBPACK_IMPORTED_MODULE_1__notes_list_component__["a" /* NotesListComponent */] },
    { path: 'note/new', component: __WEBPACK_IMPORTED_MODULE_2__note_add_note_add_component__["a" /* NoteAddComponent */] },
    { path: 'note/:id1/new', component: __WEBPACK_IMPORTED_MODULE_2__note_add_note_add_component__["a" /* NoteAddComponent */] },
    { path: 'note/:id1/new/:id2', component: __WEBPACK_IMPORTED_MODULE_2__note_add_note_add_component__["a" /* NoteAddComponent */] },
    { path: 'note/:id1/:id2/edit', component: __WEBPACK_IMPORTED_MODULE_3__note_edit_note_edit_component__["a" /* NoteEditComponent */] }
];
var notesRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(NOTES_ROUTES);
//# sourceMappingURL=/Users/sean/ionic-projects/my-notes-beta/src/notes.routing.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, args) {
        if (!value) {
            return value;
        }
        if (value.length === 1) {
            var list_1 = [];
            value.forEach(function (note) {
                list_1.push(note.section);
            });
            return list_1;
        }
        var list = [];
        value.forEach(function (note) {
            if (list.indexOf(note.section) == -1) {
                list.push(note.section);
            }
        });
        return list;
    };
    FilterPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Pipe */])({
            name: 'filter'
        }), 
        __metadata('design:paramtypes', [])
    ], FilterPipe);
    return FilterPipe;
}());
//# sourceMappingURL=/Users/sean/ionic-projects/my-notes-beta/src/filter.pipe.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=/Users/sean/ionic-projects/my-notes-beta/src/environment.js.map

/***/ }),

/***/ 551:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 552:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 553:
/***/ (function(module, exports) {

module.exports = ".radio{\n   display: inline;\n   margin-left: 2em;\n}\n\n#section-title {\n    margin-bottom: 2em;\n}"

/***/ }),

/***/ 554:
/***/ (function(module, exports) {

module.exports = ".radio{\n   display: inline;\n   margin-left: 2em;\n}\n\n#section-title {\n    margin-bottom: 2em;\n}"

/***/ }),

/***/ 555:
/***/ (function(module, exports) {

module.exports = ".important {\n    color: red;\n}\n\n.side {\n    color: orange;\n}\n"

/***/ }),

/***/ 556:
/***/ (function(module, exports) {

module.exports = "body {\n    padding-top: 70px;\n}\n\n.page-header {\n    color: #28a745;\n}\n\n.important {\n    color: red;\n}\n\n.side {\n    color: orange;\n}\n\n.section-header {\n    padding-top: 70px;\n}"

/***/ }),

/***/ 557:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>"

/***/ }),

/***/ 558:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\n        aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" routerLink=\"\">My Notes</a>\n    </div>\n    <div>\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n        <ul class=\"nav navbar-nav\" *ngFor=\"let name of pageNamesArray; let i = index\">\n          <li class=\"dropdown\">\n            <a routerLink=\"/notes/list/{{name}}\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">{{name}} notes <span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n              <div>\n                <li><a href=\"/notes/list/{{name}}#0\">top of page</a></li>\n                <li *ngFor=\"let note of pageNotesArray[i] | filter\"><a href=\"/notes/list/{{name}}#{{note}}\">{{note}}</a></li>\n              </div>\n            </ul>\n          </li>\n        </ul>\n         <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Logout? <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li (click)=\"logout()\" style=\"cursor: pointer\">Logout</li>\n          </ul>\n        </li>\n      </ul>\n      </div>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ 559:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3 id=\"section-title\">Choose a section for your {{notePage}} note</h3>\n  <div *ngIf=\"!addingNewPage\">\n    <button class=\"btn btn-info\" (click)=\"toggleRadios()\">{{sectionToggleButton}}</button>\n  </div>\n  <br>\n  <form [formGroup]=\"noteForm\" (ngSubmit)=\"onSubmit()\">\n    <div *ngIf=\"addingNewPage\">\n      <div class=\"form-group\">\n        <label for=\"page\">Page Name<small> must be all lowercase, no special symbols</small></label>\n        <input type=\"text\" formControlName=\"page\" id=\"page\" class=\"form-control\">\n      </div>\n    </div>\n    <div *ngIf=\"showRadios == false\">\n      <div class=\"form-group\">\n        <label for=\"section\">Section Name<small> must be all lowercase, no special symbols</small></label>\n        <input type=\"text\" formControlName=\"section\" id=\"section\" class=\"form-control\">\n      </div>\n    </div>\n    <div *ngIf=\"sections.length > 0 && showRadios == true\">\n      <div class=\"radio\" *ngFor=\"let section of sections\">\n        <label>\n            <input type=\"radio\" formControlName=\"section\" [value]=\"section\"><p>{{section}}</p>\n        </label>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"title\">Title</label>\n      <input formControlName=\"title\" type=\"text\" id=\"title\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"content\">Content</label>\n      <label (click)=\"pasteString('content')\"> [code wrap]</label>\n      <textarea rows=\"10\" formControlName=\"content\" type=\"text\" id=\"content\" class=\"form-control\" name=\"text-area\">\n      </textarea>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"side\">Optional Side Note</label>\n      <label (click)=\"pasteString('side')\"> [code wrap]</label>\n      <textarea rows=\"3\" formControlName=\"side\" type=\"text\" id=\"side\" class=\"form-control\"></textarea>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"important\">Optional Important Note</label>\n      <label (click)=\"pasteString('important')\"> [code wrap]</label>\n      <textarea rows=\"3\" formControlName=\"important\" type=\"text\" id=\"important\" class=\"form-control\"></textarea>\n    </div>\n    <button type=\"submit\" [disabled]=\"!noteForm.valid\" class=\"btn btn-primary\">Add Note</button>\n    <button class=\"btn\" type=\"button\" (click)=\"onCancel()\">Cancel</button>\n  </form>\n</div>"

/***/ }),

/***/ 560:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"noteForm\" (ngSubmit)=\"onSubmit()\">\n    <h3 id=\"section-title\">Choose a section for your {{notePage}} note</h3>\n    <div class=\"radio\" *ngFor=\"let section of sections\">\n      <label>\n            <input type=\"radio\" formControlName=\"section\" [value]=\"section\"><p>{{section}}</p>\n      </label>\n    </div>\n    <br><br><br>\n    <div class=\"form-group\">\n      <label for=\"title\">Title</label>\n      <input formControlName=\"title\" type=\"text\" id=\"title\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"content\">Content</label>\n      <label (click)=\"pasteString('content')\"> [code wrap]</label>\n      <textarea rows=\"10\" formControlName=\"content\" type=\"text\" id=\"content\" class=\"form-control\"></textarea>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"side\">Optional Side Note</label>\n      <label (click)=\"pasteString('side')\"> [code wrap]</label>\n      <textarea rows=\"3\" formControlName=\"side\" type=\"text\" id=\"side\" class=\"form-control\"></textarea>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"important\">Optional Important Note</label>\n      <label (click)=\"pasteString('important')\"> [code wrap]</label>\n      <textarea rows=\"3\" formControlName=\"important\" type=\"text\" id=\"important\" class=\"form-control\"></textarea>\n    </div>\n    <button type=\"submit\" [disabled]=\"!noteForm.valid\" class=\"btn btn-success\">Save</button>\n    <button (click)=\"onCancel()\" class=\"btn\">Cancel</button>\n  </form>\n</div>"

/***/ }),

/***/ 561:
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3>{{note.title}}</h3>\n  <p [innerHtml]=note.content></p>\n  <div *ngIf=\"note.side\">\n    <h5 class=\"side\"><strong>SIDE NOTE</strong></h5>\n    <p [innerHtml]=note.side></p>\n  </div>\n  <div *ngIf=\"note.important\">\n    <h5 class=\"important\"><strong>IMPORTANT NOTE</strong></h5>\n    <p [innerHtml]=note.important></p>\n  </div>\n  <div *ngIf=\"note.isEditable\">\n    <button class=\"btn btn-info btn-xs\" (click)=\"onEdit(note.$key)\">Edit</button>\n    <button class=\"btn btn-danger btn-xs\" (click)=\"onDelete(note.$key)\" (click)=\"onRemoveFromArray()\" >Delete</button>\n  </div>\n</div>"

/***/ }),

/***/ 562:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"page-header section-header\" id=\"0\">\n    <h1>{{notePage | uppercase}} Notes <small> select a section from the {{notePage}} notes dropdown</small></h1>\n    <button class=\"btn btn-success\" routerLink=\"/notes/note/{{notePage}}/new\">Add A Note</button>\n  </div>\n  <div *ngFor=\"let sectionNote of currentPageSections; let i = index\" >\n    <div *ngFor=\"let sectionNote of currentPageSections[i]; let i = index; let first = first\">\n      <div id=\"{{sectionNote.section}}\">\n        <h2  class=\"section-header\" (click)=\"toAdd(sectionNote.section)\" *ngIf=\"first\">{{sectionNote.section | uppercase}}</h2>\n        <hr>\n          <app-note-item [note]=\"sectionNote\" [page]=\"sectionNote.page\" (click)=\"onCanEdit(sectionNote)\" (deleteNote)=\"onDelete($event)\"></app-note-item>\n      </div>\n    </div>\n  </div>\n  <br><br><br><br><br><br>\n</div>"

/***/ }),

/***/ 603:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(358);


/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(138);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NoteService = (function () {
    function NoteService(http, angularFire) {
        this.http = http;
        this.angularFire = angularFire;
        this.currentPageNotes = [];
        this.sectionArray = [];
        this.currentPageSections = [];
    }
    NoteService.prototype.startNotes = function () {
        this.notes = this.angularFire.database.list('notes');
    };
    NoteService.prototype.getNotes = function () {
        return this.angularFire.database.list('notes');
    };
    NoteService.prototype.getCurrentPageSections = function () {
        return this.currentPageSections;
    };
    NoteService.prototype.storeNote = function (note) {
        this.angularFire.database.list('notes').push(note);
    };
    NoteService.prototype.getNote = function (id) {
        return this.angularFire.database.object('/notes/' + id);
    };
    NoteService.prototype.updateNote = function (note, id) {
        this.angularFire.database.object('/notes/' + id).update(note);
    };
    NoteService.prototype.removeNote = function (id) {
        this.angularFire.database.object('/notes/' + id).remove();
    };
    NoteService.prototype.getSections = function () {
        return this.sectionArray;
    };
    NoteService.prototype.createArrays = function (page) {
        var _this = this;
        var array1 = [];
        this.currentPageNotes = [];
        this.currentPageSections = [];
        this.notes.forEach(function (element) {
            array1.push(element);
            array1.forEach(function (note) {
                note.forEach(function (item) {
                    if (item.page === page) {
                        _this.currentPageNotes.push(item);
                        if (_this.sectionArray.indexOf(item.section) == -1) {
                            _this.sectionArray.push(item.section);
                        }
                        _this.sectionArray.slice((_this.sectionArray.length - 1), (_this.sectionArray.length));
                    }
                });
            });
        });
        setTimeout(function () {
            var _loop_1 = function(i) {
                _this.currentPageSections.push(_this.currentPageNotes.filter(function (item) {
                    return item.section === _this.sectionArray[i];
                }));
            };
            for (var i = 0; i < _this.sectionArray.length; i++) {
                _loop_1(i);
            }
        }, 800);
    };
    NoteService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* AngularFire */]) === 'function' && _b) || Object])
    ], NoteService);
    return NoteService;
    var _a, _b;
}());
//# sourceMappingURL=/Users/sean/ionic-projects/my-notes-beta/src/note.service.js.map

/***/ })

},[603]);
//# sourceMappingURL=main.bundle.map