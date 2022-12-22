import logo from './logo.svg';
import './App.css';
import useGetFullName from './useGetName';
import HookMemo from './hookMemo';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {useGetFullName('Abhay','','Maharjan')}
      </header>
      <HookMemo />
    </div>
  );
}

export default App;
