/* eslint-disable no-unused-vars */
import React from "react";
import {
    CATEGORY_ROUTE,
    ERROR_ROUTE,
    HELLOPAGE_ROUTE,
    JAVASCRIPT_ROUTE,
    SEARCH_ROUTE,
    STARTPAGE_ROUTE,
    TEXTMD_ROUTE,
} from "./consts";
import Start from "../pages/Start";
import TextMDPage from "../pages/TextMDPage";
import ErrorPage from "../pages/ErrorPage";
import CategoryID from "../pages/CategoryID";
import SearchPage from "../pages/SearchPage";
import HelloPage from "../pages/HelloPage";

export const publicRoutes = [
    {
        path: STARTPAGE_ROUTE,
        Component: <Start />,
    },
    {
        path: ERROR_ROUTE,
        Component: <ErrorPage />,
    },
    {
        path: TEXTMD_ROUTE,
        Component: <TextMDPage />,
    },
    {
        path: CATEGORY_ROUTE,
        Component: <CategoryID />,
    },
    // {
    //     path: JAVASCRIPT_ROUTE,
    //     Component: <CategoryID category={JAVASCRIPT_ROUTE} />,
    // },
    {
        path: SEARCH_ROUTE,
        Component: <SearchPage />,
    },
    {
        path: HELLOPAGE_ROUTE,
        Component: <HelloPage />,
    },
];
