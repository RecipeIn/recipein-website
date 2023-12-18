import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./app.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./apps/store.js";
import Register from './pages/Register'
import Login from './pages/Login'
import ForgotPass from './pages/ForgotPass'
import Verification from './pages/Verification'
import NewPass from './pages/NewPass'
import Profile from './pages/Profile'
import EditProfile from './pages/EditProfile'
import DailyNutrition from './pages/DailyNutrition'
import Homepage from './pages/Homepage'
import Recipe from './pages/Recipe'
import Diet from './pages/Diet'
import PopularCategory from './pages/PopularCategory'
import ViewProfile from './pages/ViewProfile'
import DetailRecipe from './pages/DetailRecipe'
import AboutUs from './pages/AboutUs'
import SearchResult from './pages/SearchResult'
import AdvancedSearchResult from './pages/AdvancedSearchResult'
import MyRecipe from './pages/MyRecipe'
import Favorite from './pages/Favorite'
import Status from './pages/Status'
import AddRecipe from './pages/AddRecipe'
import EditRecipe from './pages/EditRecipe'
import ContactUs from './pages/ContactUs'
import FAQ from './pages/FAQ'
import TNC from './pages/TNC'
import PP from './pages/PP'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgotpass",
    element: <ForgotPass />,
  },
  {
    path: "/verification",
    element: <Verification />,
  },
  {
    path: "/newpass",
    element: <NewPass />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/editprofile",
    element: <EditProfile />,
  },
  {
    path: "/dnutrition",
    element: <DailyNutrition />,
  },
  {
    path: "/recipe",
    element: <Recipe />,
  },
  {
    path: "/diet",
    element: <Diet />,
  },
  {
    path: "/pcategory",
    element: <PopularCategory />,
  },
  {
    path: "/viewprofile",
    element: <ViewProfile />,
  },
  {
    path: "/detail",
    element: <DetailRecipe />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/sresult",
    element: <SearchResult />,
  },
  {
    path: "/saresult",
    element: <AdvancedSearchResult />,
  },
  {
    path: "/myrecipe",
    element: <MyRecipe />,
  },
  {
    path: "/favorite",
    element: <Favorite />,
  },
  {
    path: "/status",
    element: <Status />,
  },
  {
    path: "/addrecipe",
    element: <AddRecipe />,
  },
  {
    path: "/editrecipe",
    element: <EditRecipe />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/faq",
    element: <FAQ />,
  },
  {
    path: "/tnc",
    element: <TNC />,
  },
  {
    path: "/pp",
    element: <PP />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
