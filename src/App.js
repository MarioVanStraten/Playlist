import React, { useState } from 'react';
import SongInput from './components/SongInput'
import SongList from './components/SongList'

function App() {
  const [ songs, setSongs ] = useState(
      [{
        song: 'Circles',
        artist: 'Post Malone',
        genre: 'Pop',
        rating: '5'
      },
      {
        song: 'Bohemian Rapsody',
        artist: 'Queen',
        genre: 'Rock',
        rating: '4'
      }]
    )

  const addSong = ( values ) => {
      const newSong = [...songs, values]
      setSongs( newSong )

  }

  return (
      <React.Fragment>
        <SongInput addSong={ addSong } />
        <SongList songs={ songs } />
      </React.Fragment>
  );
}

export default App;
