import React from 'react'
import PropTypes from 'prop-types'
import appRoutes from '../../routes';
import { Link } from 'react-router-dom';

export default function Header({navigateTo, userPermissions}) {
  return (
    <header style={{
        display:'flex', 
        alignItems: 'center',
        justifyContent:'flex-start', 
        height: 50, 
        backgroundColor: 'grey'
        }}
        >
        <span style={{marginLeft: 20, marginRight: 20}}>Header</span>

        {appRoutes
        .filter(({ noHeader }) => !noHeader)
        .filter(
          ({ permissions }) =>
            permissions.some((permission) =>
              userPermissions.includes(permission)
            ) || permissions.length === 0
        )
        .map(({ path, title }) => (
          <Link to={path}>{title}</Link>
        ))}


        {/* {appRoutes.map(({ path, title }) => (
            <button key={path} onClick={navigateTo(path)}>{title}</button>
        ))} */}

        {/* <button onClick={navigateTo('/posts')}>Posts</button>
        <button onClick={navigateTo('/albums')}>Albums</button>
        <button onClick={navigateTo('/todos')}>Todos</button>
        <button onClick={navigateTo('/other-list')}>Other</button> */}
    </header>
  );
}

Header.propTypes = {

}
