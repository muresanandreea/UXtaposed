import './App.css';
import React,{useEffect,useState} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {Layout} from "./components/layout/Layout";
import {Loading} from "./components/utils/Loader";

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  return (
      <Router>
        {!loading ?
            (<div className="App">
              <Layout/>
            </div>)
            :
            (<Loading/>)
        }
      </Router>
  );
}

export default App;
