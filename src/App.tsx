import MenuBar from "./component/MenuBar";
import MenuRoutes from "./component/MenuRoutes";
import './App.css';

function App() {
  return (
    <div className="app text-center">
      <div className="w-full fixed">
        <MenuBar/>
      </div>
      <div>
        <MenuRoutes/>
      </div>
    </div>
  );
}

export default App;
