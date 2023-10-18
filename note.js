const noteInput = document.getElementById('note-input');
const saveButton = document.getElementById('save-button');

saveButton.addEventListener('click', saveNote);

function saveNote() {
    const noteText = noteInput.value.trim();
    if (noteText !== '') {
        // Create a Blob containing the text
        const blob = new Blob([noteText], { type: 'text/plain' });

        // Create a URL for the Blob
        const url = URL.createObjectURL(blob);

        // Create a download link
        const a = document.createElement('a');
        a.href = url;
        a.download = 'note.txt';
        a.textContent = 'Download Note';

        // Append the link to the page
        document.body.appendChild(a);
    }
}

