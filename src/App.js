import logo from './logo.svg';
import './App.css';
import useGetFullName from './useGetName';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {useGetFullName('Abhay','','Maharjan')}
      </header>
    </div>
  );
}

export default App;
