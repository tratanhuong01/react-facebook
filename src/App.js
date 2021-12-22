import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ModalProvider } from "./contexts/ModalContext/ModalContext";
import routes from "./routes/routes";
function showAllLinks(routes) {
  //

  let result = null;
  if (routes.length > 0) {
    result = routes.map((route, index) => {
      return (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          element={route.element}
        />
      );
    });
    return result;
  }
}
function App(props) {
  return (
    <ModalProvider>
      <Router>
        <Routes>{showAllLinks(routes)}</Routes>
      </Router>
    </ModalProvider>
  );
}

export default App;
