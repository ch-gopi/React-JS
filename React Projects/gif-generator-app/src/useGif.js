import { useState, useEffect } from 'react';
import axios from 'axios';

const useGif = (tag) => {

    const url = `https://api.giphy.com/v1/gifs/random?api_key=paktpUBhblMzLJtWkYxpzN6LCuR4YWg3`;
    const[gif, setGif] = useState('');

    const response = async (tag) => {
        const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
        const image = data.data.images.downsized_large.url;
        setGif(image);
    }
    
    useEffect(() => {
        response(tag);
    },[tag]);

  return { gif, response };
}

export default useGif;