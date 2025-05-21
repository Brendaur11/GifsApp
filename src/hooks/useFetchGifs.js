import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
 
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const fetchGifs = async () => {
        try {
          const response = await fetch(url);
          if (!response.ok) throw new Error('Error en la API');
          const { data } = await response.json();
          return data;
        } catch (error) {
          console.error('Falló la carga de gifs:', error);
          return [];
        }
      };
      

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    }
    
    useEffect( () => {
        getImages();
    }, []);



    return {
        images,
        isLoading
    }

}
