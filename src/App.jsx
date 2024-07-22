import React from "react";
import { Provider } from "react-redux";
import Navigation from "./Navigation";
import Heading from "./components/Heading";
import Overview from "./pages/undeveloped/Home";
import Navbar from "./components/Navbar";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
