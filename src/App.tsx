import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Details from "./Pages/Details/Details";
import EditFormEmployee from "./Pages/EditEmplooyer/EditEmplooyer";
import Employee from "./Pages/Employeer/Employee";
import ListEmployee from "./Pages/ListEmployee/ListEmployee";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Employee />} />
          <Route path="/employee" element={<ListEmployee />} />
          <Route path="/employee/:id" element={<EditFormEmployee />} />
          <Route path="/employeee/:id" element={<Details />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
