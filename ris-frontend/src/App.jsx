import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";

function App() {
  return (
    <DashboardLayout>
      {/* <Dashboard /> */}
      <Products />
    </DashboardLayout>
  );
}

export default App;