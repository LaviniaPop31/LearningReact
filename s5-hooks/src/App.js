
import './App.css';
import Home from "./containers/Home/home"
import {PostProvider} from './context/PostsContext'

function App() {
  return (
    <div className="App">
      
      <Home/>
      
    </div>
  );
}

export default App;
