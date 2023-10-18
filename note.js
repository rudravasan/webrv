const notesList = document.getElementById('notes-list');
const noteInput = document.getElementById('note-input');
const addNoteButton = document.getElementById('add-note');
const editNoteButton = document.getElementById('edit-note');
const deleteNoteButton = document.getElementById('delete-note');
let selectedNoteIndex = -1;

addNoteButton.addEventListener('click', addNote);
editNoteButton.addEventListener('click', editNote);
deleteNoteButton.addEventListener('click', deleteNote);
notesList.addEventListener('click', selectNote);

function addNote() {
    const noteText = noteInput.value.trim();
    if (noteText !== '') {
        const noteItem = document.createElement('li');
        noteItem.textContent = noteText;
        notesList.appendChild(noteItem);
        noteInput.value = '';
    }
}

function editNote() {
    if (selectedNoteIndex !== -1) {
        const noteText = noteInput.value.trim();
        if (noteText !== '') {
            notesList.children[selectedNoteIndex].textContent = noteText;
            noteInput.value = '';
        }
    }
}

function deleteNote() {
    if (selectedNoteIndex !== -1) {
        notesList.removeChild(notesList.children[selectedNoteIndex]);
        noteInput.value = '';
        selectedNoteIndex = -1;
    }
}

function selectNote(event) {
    const target = event.target;
    if (target.nodeName === 'LI') {
        noteInput.value = target.textContent;
        selectedNoteIndex = Array.from(notesList.children).indexOf(target);
    }
}
