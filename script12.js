class TodoList {
    constructor() {
        this.notes = [];
    }

    addNote(noteContent) {
        if (noteContent.trim() !== '') {
            const currentDate = new Date();
            this.notes.push({
                content: noteContent,
                done: false,
                createdDate: currentDate,
                lastEdited: currentDate
            });
            console.log("Нова нотатка додана.");
        } else {
            console.log("Порожня нотатка не може бути додана.");
        }
    }

    deleteNoteByIndex(index) {
        if (index >= 0 && index < this.notes.length) {
            this.notes.splice(index, 1);
            console.log("Нотатка видалена.");
        } else {
            console.log("Нотатки з таким індексом не існує.");
        }
    }

    editNoteByIndex(index, newContent) {
        if (index >= 0 && index < this.notes.length && newContent.trim() !== '') {
            this.notes[index].content = newContent;
            this.notes[index].lastEdited = new Date();
            console.log("Нотатка відредагована.");
        } else {
            console.log("Нотатки з таким індексом не існує або новий вміст порожній.");
        }
    }

    getNoteByIndex(index) {
        if (index >= 0 && index < this.notes.length) {
            return this.notes[index];
        } else {
            return "Нотатки з таким індексом не існує.";
        }
    }

    getAllNotes() {
        return this.notes;
    }

    markAsDone(index) {
        if (index >= 0 && index < this.notes.length) {
            this.notes[index].done = true;
            console.log("Нотатка позначена як виконана.");
        } else {
            console.log("Нотатки з таким індексом не існує.");
        }
    }

    getTotalNotes() {
        return this.notes.length;
    }

    getPendingNotes() {
        return this.notes.filter(note => !note.done).length;
    }

    findNoteByContent(content) {
        return this.notes.filter(note => note.content.toLowerCase().includes(content.toLowerCase()));
    }

    sortByStatus() {
        this.notes.sort((a, b) => a.done - b.done);
    }

    sortByDateCreated(ascending = true) {
        this.notes.sort((a, b) => ascending ? a.createdDate - b.createdDate : b.createdDate - a.createdDate);
    }

    sortByDateEdited(ascending = true) {
        this.notes.sort((a, b) => ascending ? a.lastEdited - b.lastEdited : b.lastEdited - a.lastEdited);
    }
}

// Приклад використання класу TodoList:
const todo = new TodoList();

todo.addNote("Прибрати кухню");
todo.addNote("Відправити лист");
todo.addNote("Зробити покупки");

console.log(todo.getAllNotes());

todo.markAsDone(0);

console.log(todo.getNoteByIndex(0));
console.log(todo.getPendingNotes());
console.log(todo.getTotalNotes());

todo.editNoteByIndex(1, "Заплатити рахунки");

console.log(todo.getAllNotes());

console.log(todo.findNoteByContent("кухня"));
todo.sortByStatus();
console.log(todo.getAllNotes());

todo.sortByDateEdited();
console.log(todo.getAllNotes());
