
import './App.css';
import Home from "./containers/Home/home"


function App() {
  return (
    <div className="App">
      <Home permissions={['READ_TODOS', 'ADMIN']}/>
    </div>
  );
}

export default App;
