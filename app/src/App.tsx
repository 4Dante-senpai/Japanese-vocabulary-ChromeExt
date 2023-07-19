import "./index.css"
import DisplayWord from "./components/DisplayWord";
import DisplayConfig from "./components/DisplayConfig";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="bg-slate-600 w-64 h-80 p-4 font-semibold">
        <Layout>
          <DisplayWord/>
          {/* <DisplayConfig/> */}
        </Layout>
    </div>
  );
}

export default App;
