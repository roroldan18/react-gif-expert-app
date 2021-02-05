import { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

const GifExpertApp = () => {

    /* const categories = ['One Punch', 'Dragon Ball', 'Samurai X']; */
    const initialState = ['One Punch'];
    const [categories, setCategories] = useState(initialState);

/*     const handleAdd = () => {
        setCategories([...categories, 'HunterXHunter']);
    }; */



    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />
            <ol>
                { 
                    categories.map( category => (
                        <GifGrid 
                            category={ category } 
                            key={ category }
                            />
                        ))
                }
            </ol>
        </>
      );
}
 
export default GifExpertApp; 