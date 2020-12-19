import { useRoutes } from "hookrouter";
import routes from "./Router";

function App() {
  const routeResult = useRoutes(routes);
  return routeResult;
}

export default App;
