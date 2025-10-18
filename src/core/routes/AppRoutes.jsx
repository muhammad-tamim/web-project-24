import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../../pages/HomePage";
import BlogPage from "../../pages/BlogPage";
import BookmarksPage from "../../pages/BookmarksPage";
import BlogDetailsPage from "../../pages/BlogDetailsPage";
import Content from "../../features/blogs/components/Content";
import Author from "../../features/blogs/components/Author";

export const AppRoutes = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path: 'blogs',
                Component: BlogPage,
                loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7'),
            },
            {
                path: 'blog-details/:id',
                Component: BlogDetailsPage,
                loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
                children: [
                    {
                        index: true,
                        Component: Content,
                        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
                    },
                    {
                        path: 'author',
                        Component: Author,
                        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
                    }
                ]
            },
            {
                path: 'bookmarks',
                Component: BookmarksPage
            },
        ]
    },
])
