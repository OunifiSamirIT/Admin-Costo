// App.js
import ScrollToTop from "@/base-components/scroll-to-top/Main";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Provider } from 'react-redux'; // Import the Provider
import store from './redux/Store'; // Import your Redux store
import Router from "./router";

function App() {
  return (
    <RecoilRoot>
      <Provider store={store}>
        <BrowserRouter>
          <Router />
          <ScrollToTop />
        </BrowserRouter>
      </Provider>
    </RecoilRoot>
  );
}

export default App;
