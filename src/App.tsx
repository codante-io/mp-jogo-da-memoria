import { Routes, Route } from 'react-router-dom';
import Game from './pages/Game';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="/game" Component={Game} />
      <Route
        path="/"
        Component={Login}
      />
    </Routes>

  );
}

export default App;
