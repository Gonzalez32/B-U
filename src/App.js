import Navbar from "./Navbar";
import Home from "./Home";


function App() {
  const title = "Welcome to your new blog";

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        {/* <h1>App Component</h1> */}
        <h1>{ title }</h1><br /><br />
        <Home />
      </div>
    </div>
  );
}

export default App;
