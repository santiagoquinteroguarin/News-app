import React from 'react';
import styles from './Form.module.css';
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';

const Form = ({setSavedCategory}) => {

    const OPTIONS = [
        {value: 'general', label: 'General'},
        {value: 'health', label: 'Salud'},
        {value: 'science', label: 'Ciencia'},
        {value: 'sports', label: 'Deportes'},
        {value: 'technology', label: 'Tecnología'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertainment', label: 'Entretenimiento'},
    ];

    // Utilizar custom hook
    const [category, SelectNews] = useSelect('technology', OPTIONS);

    // submit al form, pasar categoria a app.js
    const searchNews = e => {
        e.preventDefault();

        setSavedCategory(category);
    }

    return (
        <div className={`row ${styles.search}`}>
            <div className="col s12 m8 offset-m2">
                <form onSubmit={searchNews}>
                    <h2 className={styles.heading}>Encuentra Noticias por Categoría</h2>

                    <SelectNews />

                    <div className="input-field col s12">
                        <input 
                            type="submit"
                            className={`btn-large amber darken-2 ${styles['btn-block']}`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

Form.propTypes = {
    setSavedCategory: PropTypes.func.isRequired
}


export default Form;