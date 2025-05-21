import PropTypes from 'prop-types';

import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );
    
    return (
        <>
            <h3 id='Category' className='pt-10'>{ category }</h3>
            {
                isLoading && ( <h2 className='text-l'>Cargando...</h2> )
            }
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-gray-300/10 backdrop-blur-xl border border-white/20 border-gray-400/40 shadow-xl rounded-lg p-7">
                {
                    Array.isArray(images) && images.slice(0, 12).map((image) => (
                    <div
                        key={image.id}
                    >
                        <GifItem {...image} />
                    </div>
                    ))
                }
            </div>

           

        </>
    )
}


GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}
