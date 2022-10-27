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
import CourseDetail from "../../pages/Shared/CourseDetail/CourseDetail";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/courses",
                element: <Courses></Courses>,
                loader: () => fetch(`http://localhost:5000/courses`),
            },
            {
                path: "/courses/:id",
                element: <CourseDetail></CourseDetail>,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/courses/${params.id}`),
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
                element: <Checkout></Checkout>,
            },
        ],
    },
]);
