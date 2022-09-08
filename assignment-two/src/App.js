import Bradcrum from "./Components/Bradcrum";
import ShopProduct from "./Components/ShopProduct";
import Sidebar from "./Components/Sidebar";


function App() {
  return (
    <div className="container-fluid">
      <div className="row px-xl-5 mt-5">
        <h1 className="text-center mb-3 pb-5">Product Detail with filter</h1>
        <Sidebar />
        <ShopProduct />
      </div>
    </div>
  );
}

export default App;
