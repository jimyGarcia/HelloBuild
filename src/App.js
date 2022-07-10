import AuthProvider from "../src/Auth/AuthProvider";
import AppRouter from "../src/routers/AppRouter";

const App = () => {
    return (
      <div>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>

      </div>
    );
}

export default App;
