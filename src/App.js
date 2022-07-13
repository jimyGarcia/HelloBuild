import { BrowserRouter as Router } from "react-router-dom";

import AuthProvider from "../src/Auth/AuthProvider";
import AppRouter from "../src/routers/AppRouter";
import Layout from "./components/Layouts/Layouts";

const App = () => {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Layout>
            <AppRouter />
          </Layout>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
