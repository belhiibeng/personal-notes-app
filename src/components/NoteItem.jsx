import React from 'react';
import NoteItemContent from './NoteItemContent';
import NoteItemAction from './NoteItemAction';

function NoteItem({ note, onDelete, onArchive }) {
  return (
    <div className="note-item">
      <NoteItemContent
        title={note.title}
        createdAt={note.createdAt}
        body={note.body}
      />
      <NoteItemAction
        id={note.id}
        archived={note.archived}
        onDelete={onDelete}
        onArchive={onArchive}
      />
    </div>
  );
}

export default NoteItem;
