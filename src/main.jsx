import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Meals from './components/Meals/Meals.jsx';
import MealDetail from './components/MealDetail/MealDetail.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "meals",
        element: <Meals></Meals>,
        loader: () => fetch(`https://www.themealdb.com/api/json/v1/1/search.php?${'f=b'}`)
      },
      {
        path: 'meal/:mealName',
        element: <MealDetail></MealDetail>,
        loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/search.php?${`s=${params.mealName}`}`)
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
