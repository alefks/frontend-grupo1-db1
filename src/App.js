import { BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';
import MenuRoutes from './MenuRoutes';
import './App.css';

function App() {
  return (
    <div className="App">

      <Router >
        <MenuRoutes />
        <Routes/>
      </Router>
    </div>
  );
}

export default App;
