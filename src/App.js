import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <MainContainer />
      },
      {
        path: 'cart',
        element: <Cart />
      }
    ]
  }
])


function App() {
  return (
    <div className='bg-[#F1F3F6]'>

      <Provider store={store}>


        <RouterProvider router={router} />
      </Provider>
    </div>

  );
}

export default App;
