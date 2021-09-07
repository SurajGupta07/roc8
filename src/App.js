import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Products } from './components/Products';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
