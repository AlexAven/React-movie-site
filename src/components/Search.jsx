import React, { useState } from 'react';

const Search = (props) => {
    const {
        searchMovies = Function.prototype,
    } = props; 

    const [search, setSearch] = useState('');
    const [type, setType] = useState('all');


    const handleKey = (event) => {
        if (event.key === 'Enter') {
            searchMovies(search, type);
        }
    }

    const handleRadioChange = (event) => {
        setType(event.target.dataset.type);
        searchMovies(search, event.target.dataset.type);
    };

        return <div className='row'>
            <div className='input-field'>
                <input
                    placeholder='search'
                    id='email_inline'
                    type='search'
                    className='validate'
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    onKeyDown={handleKey}
                />
                <button className='btn search-btn' onClick={() => searchMovies(search, type)}>Find</button>
            </div>
            <div>
                <label>
                <input className='with-gap' type='radio' name='type' data-type='all' onChange={handleRadioChange} checked={type === 'all'} />
                    <span>All</span>
                </label>
                <label>
                <input className='with-gap' type='radio' name='type' data-type='movie' onChange={handleRadioChange} checked={type === 'movie'} />
                    <span>Movies</span>
                </label>
                <label>
                <input className='with-gap' type='radio' name='type' data-type='series' onChange={handleRadioChange} checked={type === 'series'} />
                    <span>Series</span>
                </label>
            </div>
        </div>
}

export {Search}