/* Necesito recibir la categoríoa que me manda el padre e inmediatamente hacer una peticion HTTP */

import { useFetchGifs } from "./hooks/useFetchGifs";
import GifGridItem from './GifGridItem';



export const GifGrid = ({category}) => {

    const {data: images, loading}= useFetchGifs( category );

    return ( 
        <>
            <h3> { category }</h3>

            {loading && <p className="animate__animated animate__flash">Loading...</p>}

             <div className="card-grid">
                {
                    images.map( ( img ) => 
                    <GifGridItem 
                        { ...img } //De esta forma mando cada propiedad como independiente dentro del objeto IMG
                        key={img.id}
                    />
                    )
                }
            </div>
        </>
     );
}
 
export default GifGrid;