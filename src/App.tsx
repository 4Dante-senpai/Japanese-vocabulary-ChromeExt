import "./styles/index.css"
import DisplayWord from "./components/DisplayWord";
import DisplayConfig from "./components/DisplayConfig";
import Layout from "./components/Layout";
import Home from "./pages/home";
import Alerts from "./pages/alerts";
import Config from "./pages/config";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/words" element={ <DisplayWord /> } />
            <Route path="/alers" element={ <Alerts /> } />
            <Route path="/config" element={ <Config /> } />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
