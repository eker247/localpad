const NOTES_NAMES = 'notes';

class StorageService {
  getNotes() {
    return JSON.parse(localStorage.getItem(NOTES_NAMES)) || [];
  }

  saveNotes(notes) {
    localStorage.setItem(NOTES_NAMES, JSON.stringify(notes));
  }

  rmNote(name) {
    const notesNames = this.getNotes().filter(n => n !== name);
    this.saveNotes(notesNames);
    localStorage.removeItem(name);
    localStorage.removeItem(`np-${name}`);
  }
}

const storage = new StorageService();
export default storage;