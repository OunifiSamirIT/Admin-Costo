import ScrollToTop from "@/base-components/scroll-to-top/Main";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Router from "./router";
import { Provider } from 'react-redux';
import store from './redux/Store';
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
