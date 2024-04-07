import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Analitic from './page/Analitic';

import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import RickAndMorty from "./page/rickAndMorty";
import {Menu} from "./page/Blank";
import ManyRequest from "./page/manyRequest/manyRequest";
import ManyRequest2 from "./page/manyRequest/manyRequest2";
import EventResize from "./page/evenResize";
import {Fib} from "./page/fib";
import Post from "./page/post/post";
import Post2 from "./page/post2/post2";
import Cats from "./page/cats/cats";

export const rootPath = '/memory_leaks'
const router = createBrowserRouter([
    {
        path: '/',
        element: <Menu/>,
    },
    {
        path: "/analytics",
        element: <Analitic />,
    },
    {
        path: "/listener",
        element: <RickAndMorty />,
    },
    {
        path: '/manyRequest',
        element: <ManyRequest />
    },
    {
        path: '/manyRequest2',
        element: <ManyRequest2 />
    },
    {
        path: "/eventResize",
        element: <EventResize />,
    },
    {
        path: "/fib",
        element: <Fib />,
    },
    {
        path: "/post",
        element: <Post />,
    },
    {
        path: "/post2",
        element: <Post2 />,
    },
    {
        path: "/cat",
        element: <Cats />,
    }
], {basename: rootPath});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <RouterProvider
        router={router}
    />
);
