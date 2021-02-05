/* El nombre del archivo USE  significa que es un HOOK, personalizado */
/* Se usa para cargales tareas independientes */

import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGifs( category ).then( imgs => {
            setState(
                {
                    data: imgs,
                    loading: false
                })
            });

    }, [ category ])


    return state;
}
 
