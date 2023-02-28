import React from 'react';
import ArchiveButton from './ArchiveButton';
import DeleteButton from './DeleteButton';

function NoteItemAction({
  id, archived, onArchive, onDelete,
}) {
  return (
    <div className="note-item__action">
      <DeleteButton id={id} onDelete={onDelete} />
      <ArchiveButton id={id} archived={archived} onArchive={onArchive} />
    </div>
  );
}

export default NoteItemAction;
