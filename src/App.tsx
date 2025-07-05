import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return(
    <TaskProvider>
      <Router>
        <AppRoutes />
    </Router>
    </TaskProvider>
  )
}

export default App;
