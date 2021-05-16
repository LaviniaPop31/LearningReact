import React, { memo, useEffect } from 'react'
import PropTypes from 'prop-types'

function SearchButton({ onClick }) {

    //cand se schimba onClick sa afiseze mesajul. onCLick se schimba la fiecare rerandare pt ca e transmis prin o functie anonima 
    //pt ca noi dam ca parametru o functie anonima(nu are o referinta in memorie), de fiecare data e creata o noua referinta
    //e trasnmis prin props, fiind o functie se considera modificat props-ul cand se modifica referinta
    //pt ca se trasmite o noua referinta de fiecare data, acest efect se tot rerandeaza 
    // useEffect(() => {
    //     console.log('render SearchButton')
    // }, [onClick])

    console.log('render SearchButton')

  return (
    <button onClick={onClick}>Clear</button>
  );
}
 SearchButton.propTypes = {

}

// memo verifica daca onClick are aceeasi referinta
export default memo(SearchButton)
