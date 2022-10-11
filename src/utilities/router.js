import Main from "../layouts/Main";
import Topic from "../components/Topic/Topic";
import Statistics from "../components/Statistics/Statistics";
import Blog from "../components/Blog/Blog";
import Contact from "../components/Contact/Contact";
import Error from "../components/Error/Error";
import { createBrowserRouter } from "react-router-dom";
import Quizzes from "../components/Quizzes/Quizzes";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
                element: <Topic />
            },
            {
                path: "/test/:testId",
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.testId}`),
                element: <Quizzes />
            },
            {
                path: "/statistics",
                loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
                element: <Statistics />
            },
            { path: "/blog", element: <Blog /> },
            { path: "/contact", element: <Contact /> },
        ]
    }
])