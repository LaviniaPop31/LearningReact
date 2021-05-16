import React, {useCallback, useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import SearchButton from './search-button'

export default function SearchView({search, setSearch}) {
    const searchRef = useRef(null)

    useEffect(() => {
        //sa se puna cursorul automat pe input
        searchRef.current.focus()
    }, [])

    // se randeaza de fiecare data cand introduc o valoare in input
    useEffect(() => {
        console.log('render SearchView')
    }, [search, setSearch])

    // folosim useCallback ca onClick sa nu mai fie o functie anonima si sa aiba o referinta in memorie
    // transforma o functie anonima in una cu referinta, astfel optimizam componenta
    const onClick = useCallback(() => setSearch(''), [setSearch])

  return (
    <div>
        <label htmlFor="searchInput">Search Post</label>
        <input 
            ref={searchRef}
            id="searchInput"
            onChange={({target: {value}}) => setSearch(value)}
            value={search}
        />
        {/* <SearchButton onClick={() => setSearch("")}/> */}
        <SearchButton onCLick={onClick} />
    </div>
  );
}

SearchView.propTypes = {
    search: PropTypes.string,
    setSearch: PropTypes.func,
}
