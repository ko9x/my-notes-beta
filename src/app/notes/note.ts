export class Note {
    constructor 
    (
        public id: string,
        public page: string,
        public section: string,
        public title: string,
        public content: string,
        public side: string,
        public important: string,
        public isEditable: boolean
    ) { }
}
