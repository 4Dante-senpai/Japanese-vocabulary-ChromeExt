import "./styles/index.css"
import DisplayWord from "./components/DisplayWord";
import DisplayConfig from "./components/DisplayConfig";
import Layout from "./components/Layout";
import Home from "./pages/home";
import Alerts from "./pages/alerts";


function App() {
  return (
    <div className="app">
        <Layout>
          <DisplayWord/>
          {/* <DisplayConfig/> */}
          {/* <Home /> */}
          {/* <Alerts /> */}
        </Layout>
    </div>
  );
}

export default App;
