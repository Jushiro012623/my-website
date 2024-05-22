import './App.css';
import './css/media.css'
import Home from './Home';

import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
