
import './App.css';
import Home from "./containers/Home/home"
import {PostProvider} from './context/PostsContext'

function App() {
  return (
    <div className="App">
      <PostProvider>
        <Home/>
      </PostProvider>
    </div>
  );
}

export default App;
