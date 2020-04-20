import React from 'react'
import SongListRow from './SongListRow'
import '../css/SongList.css'

export default function SongList({ songs }) {
    return (
        <React.Fragment>
            <div className='list-header'>
                <div>Song</div>
                <div>Artist</div>
                <div>Genre</div>
                <div>Rating</div>
            </div>
            {songs.map((song, index) => (
                <SongListRow 
                    key={index} 
                    index={index} 
                    song={song}
                />
            ))}
        </React.Fragment> 
    )
}
