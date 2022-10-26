import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login/Login";
import Courses from "../../pages/Courses/Courses/Courses";
import Profile from "../../pages/Others/Profile/Profile";
import TermsAndConditions from "../../pages/Others/TermsAndConditions/TermsAndConditions";
import Register from "../../pages/Register/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Faq from "../../pages/Faq/Faq/Faq";
import Blog from "../../pages/Blog/Blog/Blog";
import Checkout from "../../pages/Checkout/Checkout/Checkout";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () =>
                    fetch(`https://news-wall-bd-server.vercel.app/news`),
            },
            {
                path: "/courses",
                element: <Courses></Courses>,
                // loader: ({ params }) =>
                //     fetch(
                //         `https://news-wall-bd-server.vercel.app/category/${params.id}`
                //     ),
            },
            {
                path: "/news/:id",
                element: <PrivateRoute>{/* <News></News> */}</PrivateRoute>,
                loader: ({ params }) =>
                    fetch(
                        `https://news-wall-bd-server.vercel.app/news/${params.id}`
                    ),
            },
            {
                path: "/blog",
                element: <Blog></Blog>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/faq",
                element: <Faq></Faq>,
            },
            {
                path: "/terms",
                element: <TermsAndConditions></TermsAndConditions>,
            },
            {
                path: "/profile",
                element: (
                    <PrivateRoute>
                        <Profile></Profile>
                    </PrivateRoute>
                ),
            },
            {
                path: "/checkout",
                element: (
                    <PrivateRoute>
                        <Checkout></Checkout>
                    </PrivateRoute>
                ),
            },
        ],
    },
]);
