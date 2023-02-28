import React from 'react';
import autoBindReact from 'auto-bind/react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };
    autoBindReact(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => ({
      title:
        event.target.value.length > 50
          ? event.target.value.slice(0, 50)
          : event.target.value,
    }));
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => ({
      body: event.target.value,
    }));
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <h2>Buat Catatan</h2>
        <p className="note-input__title__char-limit">
          Sisa Karakter:
          {' '}
          {50 - this.state.title.length}
        </p>
        <input
          className="note-input__title"
          type="text"
          placeholder="Ini adalah judul ..."
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
          required
        />
        <textarea
          className="note-input__body"
          placeholder="Tuliskan catatanmu disini ..."
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
          required
        />
        <button type="submit">Buat</button>
      </form>
    );
  }
}

export default NoteInput;
