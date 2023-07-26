import "./styles/index.css"
import DisplayWord from "./components/DisplayWord";
import DisplayConfig from "./components/DisplayConfig";
import Layout from "./components/Layout";
import Home from "./pages/home";

function App() {
  return (
    <div className="app">
        <Layout>
          <DisplayWord/>
          {/* <DisplayConfig/> */}
          {/* <Home /> */}
        </Layout>
    </div>
  );
}

export default App;
