import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/filters/Filters";

function App() {
  return (
    <div className="App">
      <h1 className="text-center ubuntu my-1 ">
        Rick & Morty<span className="text-primary"> Wiki</span>
      </h1>
      <div className="container">
        <div className="row">
          <div class="col-3  ">
            <Filters></Filters>
          </div>
          <div className="col-8">call8</div>{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
