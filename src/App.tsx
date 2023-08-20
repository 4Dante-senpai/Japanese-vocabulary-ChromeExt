import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import "./styles/index.css"
import Words from "./pages/words";
import Layout from "./components/Layout";
import Home from "./pages/home";
import Alerts from "./pages/alerts";
import Config from "./pages/config";
import Info from "./pages/info";

function App() {
  return (
    <div className="app">
      <Router >
        <Layout>
          <Routes >
            <Route path="/" element={ <Home /> } />
            <Route path="/words" element={ <Words /> } />
            <Route path="/alers" element={ <Alerts /> } />
            <Route path="/config" element={ <Config /> } />
            <Route path="/info" element={ <Info /> } />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
