import { BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';
import './App.css';
import MenuRoutes from './MenuRoutes';

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
