import React from 'react';
import NoteItem from './NoteItem';

function NotesList({ notes, onDelete, onArchive }) {
  if (notes.length) {
    return (
      <div className="notes-list">
        {notes.map((note) => (
          <NoteItem
            note={note}
            key={note.id}
            id={note.id}
            title={note.title}
            body={note.body}
            createdAt={note.createdAt}
            archive={note.archive}
            onDelete={onDelete}
            onArchive={onArchive}
          />
        ))}
      </div>
    );
  }

  return <p className="notes-list__empty-message">Tidak Ada Catatan</p>;
}

export default NotesList;
