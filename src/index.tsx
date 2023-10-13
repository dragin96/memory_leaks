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
    }
], {basename: rootPath});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <RouterProvider
        router={router}
    />
);
