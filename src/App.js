import React from 'react';
import {NotesTable} from './components/NotesTable'
import './App.css';
import { NewNoteModal } from './components/NoteModal';

const App=()=> {
  return (
    <div className="App">
    <h3>My notes</h3>
      <div style={{maxWidth:'70%',margin:'auto'}}>
      <div style={{textAlign:'right'}}>
        <NewNoteModal/>
      </div>
        <NotesTable/>
      </div>
    </div>
  );
}

export default App;
