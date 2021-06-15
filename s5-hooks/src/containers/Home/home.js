import React, { useState, createContext } from "react";
import Posts from "../Posts/posts";
import Header from "../Header/header"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { PostProvider } from "../../context/PostsContext"
import Albums from "../Albums/albums";
import appRoutes from "../../routes";
import Todos from "../Todos/todos";

export const NavigationContext = createContext();

function Home({permissions}) {
  const [route, setRoute] = useState({ path: "", args: null });

  const [path, setPath] = useState('');

  // scrierea asta permite ca in onClick sa nu mai scriem functie sa apelam doar, deoarece onClick = () =>{}
  const navigateTo = (to) => () => setPath(to)

  // //for manualy routing
  // const renderBasedOnPath = () => {
  //   const activeRoute = appRoutes.find((route) => route.path === path);
  //   //trebuie sa ma asigur ca exista activeRoute, ar fi la fel ca si cu if (activeRoute)
  //   // return (activeRoute &&  activeRoute.render()) || 'Not found'
  //   // or optional chaining
  //   return (activeRoute?.render()) || 'Not found'
  // }

  //without appRoutes will be like this
  //   if(path === 'Albums') {
  //     return <Albums/>
  //   }
  //   if(path === 'Posts') {
  //     return (
  //       <PostProvider>
  //         <Posts />
  //       </PostProvider>
  //     )
  //   }
  //   return 'Not found!'
  // }

  return (
    <NavigationContext.Provider value={{ path: route.path, navigateTo }}>
      
      <BrowserRouter> 
        <Header userPermissions={permissions} navigateTo={navigateTo} />
        {/* {renderBasedOnPath()} */}
        <Switch>
          {appRoutes.map(route => (
            <Route key={route.title} path={route.path} render={route.render} exact={route.exact}></Route>
          ))}
        </Switch>
      </BrowserRouter>
    </NavigationContext.Provider>
      );
}
      export default Home;