import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import PostsPage from '@/components/pages/Posts'
import DraftsPage from '@/components/pages/Drafts'
import AboutPage from '@/components/pages/About'
import { posts } from '@/posts'
import './App.css'
import './globals.css'

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import { ThemeProvider } from '@/components/theme-provider'

import ErrorPage from "@/components/pages/Error";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <App><ErrorPage /></App>,
    children: [
      {
        path: "/",
        element: <PostsPage />,
      },
      // About and Drafts pages only available in dev mode
      ...(import.meta.env.DEV ? [
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/drafts",
          element: <DraftsPage />,
        },
      ] : []),
      // Dynamically generate routes for all posts at build time
      ...posts.map(post => ({
        path: `/blog/${post.slug}`,
        element: React.createElement(post.component),
      })),
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
