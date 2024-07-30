//components
import Routes from "./components/Routes/Routes";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <Sidebar />
        <Routes />
      </div>
    </div>
  );
};

export default App;
