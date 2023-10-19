import React from 'react'
import { useState } from 'react';
import useGif from './useGif';

const Tag = () => {
    const[tag, setTag] = useState('dogs');
    const{gif, response} = useGif(tag);

  return (
    <div className='tag'>
        <h1>Random {tag} GIF</h1>
        <img width="500" height ="400" src={gif} alt="gif"/>
        <div className='tag-input'>
        <input value={tag} onChange={(e) => setTag(e.target.value)} />
        </div>
        <div className='tagB'>
        <button onClick={() => response(tag)}>Click for new GIF</button>
        </div>
    </div>
  )
}

export default Tag;