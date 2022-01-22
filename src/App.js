import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import Home from './Components/Home/Home'
import Header from './Components/Header/Header'

function App() {
  return (
    <Router className="App">

          <Header />
          <Routes>
            <Route exact path="/" element={<Home/>} />
          </Routes>

        {/* Footer Goes Here */}

    </Router>
  );
}

export default App;
