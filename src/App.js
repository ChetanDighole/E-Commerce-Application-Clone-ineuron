import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import { Provider } from "react-redux";
import store from "./utils/store";


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <MainContainer />
      }
    ]
  }
])


function App() {
  return (
    <>
      <Provider store={store}>
        <Header />

        <RouterProvider router={appRouter} />
      </Provider>
    </>
  );
}

export default App;
