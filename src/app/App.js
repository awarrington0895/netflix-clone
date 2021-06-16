import { Provider } from "react-redux";

import "./App.css";
import Layout from "./Layout";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
};

export default App;
