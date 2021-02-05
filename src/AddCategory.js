import { useState } from "react";
import PropTypes from 'prop-types';


const AddCategory = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState(''); //Eso no lo debo dejar en cero, si quiero un string vacio solo pongo ''

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length > 2) {
            setCategories( cat => [ inputValue, ...cat ]);
            setInputValue('');
        }

    }

    return ( 
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                placeholder="Ingresa una categoria"
                value = { inputValue }
                onChange= { handleInputChange }
                />
        </form> 
     );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
 
export default AddCategory;