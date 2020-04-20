import React, { useState } from 'react'
import '../css/SongInput.css';

export default function SongInput({ addSong }) {
    let [ values, setValues ] = useState(
        {
            song: '',
            artist: '',
            genre: '',
            rating: ''
        }
    )
    
    const onChange = (event) => {
        const inputName = event.target.getAttribute('name')
        const inputValue = event.target.value

        if(inputName === 'song'){
            values.song = inputValue
        }
        if(inputName === 'artist'){
            values.artist = inputValue
        }
        if(inputName === 'genre'){
            values.genre = inputValue
        }
        if(inputName === 'rating'){
            values.rating = inputValue
        }

        setValues( values )
      
    }

    const onSubmit  = (event) => {
        event.preventDefault()
        addSong( values )
    }

    /// Ik moest de value attrubutes van de inputfields, selects verwijderen anders werkte het niet....
    return (
        <div className='song-input'>
            <form className='song-input-form' onSubmit={onSubmit} >
                <input type='text' name='song' placeholder='Song Name' onChange={onChange} />
                <input type='text' name='artist' placeholder='Artist' onChange={onChange} />
                <select name='genre' onChange={onChange}>
                    <option value=''>Genre</option>
                    <option value='Rock'>Rock</option>
                    <option value='Pop'>Pop</option>
                    <option value='Blues'>Blues</option>
                    <option value='House'>House</option>
                    <option value='Reggea'>Reggea</option>
                    <option value='Rap-Hiphop'>Rap-Hiphop</option>
                </select>
                <select name='rating' onChange={onChange}>
                    <option value=''>Rating</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>
                <button type='submit'>Add Song</button>
            </form>
        </div>
    )
}
