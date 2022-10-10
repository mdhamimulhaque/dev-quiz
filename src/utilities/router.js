import Main from "../layouts/Main";
import Topic from "../components/Topic/Topic";
import Statistics from "../components/Statistics/Statistics";
import Blog from "../components/Blog/Blog";
import Contact from "../components/Contact/Contact";
import Error from "../components/Error/Error";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Error />,
        children: [
            { path: "/", element: <Topic /> },
            { path: "/topic", element: <Topic /> },
            { path: "/statistics", element: <Statistics /> },
            { path: "/blog", element: <Blog /> },
            { path: "/contact", element: <Contact /> },
        ]
    }
])