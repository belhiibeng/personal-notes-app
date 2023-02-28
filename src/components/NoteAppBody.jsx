import React from 'react';
import NoteInput from './NoteInput';
import NotesList from './NotesList';

function NoteAppBody({
  notes, addNote, onDelete, onArchive,
}) {
  return (
    <div className="note-app__body">
      <NoteInput addNote={addNote} />
      <h2>Catatan Aktif</h2>
      <NotesList
        notes={notes.filter((note) => !note.archived)}
        onDelete={onDelete}
        onArchive={onArchive}
      />
      <h2>Arsip</h2>
      <NotesList
        notes={notes.filter((note) => note.archived)}
        onDelete={onDelete}
        onArchive={onArchive}
      />
    </div>
  );
}

export default NoteAppBody;
