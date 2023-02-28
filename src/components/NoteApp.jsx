import React from 'react';
import autoBindReact from 'auto-bind/react';
import NoteAppHeader from './NoteAppHeader';
import NoteAppBody from './NoteAppBody';
import { getInitialData } from '../utils/index';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      notes: getInitialData(),
    };
    autoBindReact(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => ({
      notes: [
        ...prevState.notes,
        {
          id: +new Date(),
          title,
          body,
          createdAt: new Date().toISOString(),
          archived: false,
        },
      ],
    }));
  }

  onDeleteHandler(id) {
    this.setState((prevState) => ({
      ...prevState,
      notes: prevState.notes.filter((note) => note.id !== id),
    }));
  }

  onArchiveHandler(id) {
    const { notes } = this.state;
    const index = notes.findIndex((note) => note.id === id);
    notes[index].archived = !notes[index].archived;
    this.setState((prevState) => ({ ...prevState, notes }));
  }

  searchNoteHandler(event) {
    this.setState((prevState) => ({
      ...prevState,
      searchQuery: event.target.value,
    }));
  }

  shownNotes() {
    const { searchQuery } = this.state;
    const { notes } = this.state;
    if (searchQuery.trim().length) {
      return notes.filter((note) => note.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    return notes;
  }

  render() {
    return (
      <div className="contact-app">
        <NoteAppHeader onSearch={this.searchNoteHandler} />
        <NoteAppBody
          notes={this.shownNotes()}
          addNote={this.onAddNoteHandler}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        />
      </div>
    );
  }
}

export default NoteApp;
