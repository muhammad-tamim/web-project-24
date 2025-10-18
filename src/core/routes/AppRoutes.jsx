import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../../pages/HomePage";
import BlogPage from "../../pages/BlogPage";
import BookmarksPage from "../../pages/BookmarksPage";
import BlogDetailsPage from "../../pages/BlogDetailsPage";

export const AppRoutes = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                path: '/',
                Component: HomePage
            },
            {
                path: 'blogs',
                Component: BlogPage
            },
            {
                path: 'blog-details',
                Component: BlogDetailsPage
            },
            {
                path: 'bookmarks',
                Component: BookmarksPage
            },
        ]
    },
])
