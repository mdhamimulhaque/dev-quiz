import Main from "../layouts/Main";
import Topic from "../components/Topic/Topic";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            { path: "/", element: <Topic /> }
        ]
    }
])