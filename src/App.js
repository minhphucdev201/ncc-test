import { SideBar } from "./components/Common";
import ListPage from "./features/product/pages/ListPage";
import "./app.css";

function App() {
  return (
    <div className="App">
      <SideBar />
      <ListPage />
    </div>
  );
}

export default App;
