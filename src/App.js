import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main';
import ErrorPage from './components/ErrorPage/ErrorPage'
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';
import ReviewDetails from './components/ReviewDetails/ReviewDetails';
import Rechart from './components/Rechart/Rechart';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      loader: ()=> fetch('team.json'),
      children: [
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/reviews',
          element: <Reviews></Reviews>
        },
        {
          path:'/reviewDetails/:id',
          element:<ReviewDetails></ReviewDetails>
        },
        
        {
          path:'/rechart',
          element: <Rechart></Rechart>
        }
      ],
      errorElement: <ErrorPage></ErrorPage>
    }
    
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
