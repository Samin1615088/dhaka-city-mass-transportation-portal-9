import logo from './logo.svg';
import './App.css';
import data  from './Data/fakeData';

function App() {
  const fakeData = data;
  return (
    <div>
      {
        fakeData.bike.map( item => <li>{item.key}</li>)
      }
    </div>
  );
}

export default App;
