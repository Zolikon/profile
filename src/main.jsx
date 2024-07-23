import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Portfolio from "./portfolio/Portfolio.jsx";
import AnimateComponent from "./components/AnimateComponent.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import AboutMe from "./aboutme/AboutMe.jsx";
import Skills from "./skills/Skills.jsx";
import PageNotFound from "./components/PageNotFound.jsx";
import MusicProject from "./portfolio/projects/MusicProject.jsx";
import TextMageProject from "./portfolio/projects/TextMageProject.jsx";
import PdfMageProject from "./portfolio/projects/PdfMageProject.jsx";
import VoiceNoteProject from "./portfolio/projects/VoiceNoteProject.jsx";
import SnakeProject from "./portfolio/projects/SnakeProject.jsx";
import MinesweeperProject from "./portfolio/projects/MinesweeperProject.jsx";
import TalemageProject from "./portfolio/projects/TalemageProject.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <AnimateComponent key="home">
            <ProtectedRoute>
              <AboutMe />
            </ProtectedRoute>
          </AnimateComponent>
        ),
      },
      {
        path: "/skills",
        element: (
          <AnimateComponent key="exp">
            <ProtectedRoute>
              <Skills />
            </ProtectedRoute>
          </AnimateComponent>
        ),
      },
      {
        path: "/projects",
        element: (
          <AnimateComponent key="projects">
            <ProtectedRoute>
              <Portfolio />
            </ProtectedRoute>
          </AnimateComponent>
        ),
      },
      {
        path: "/projects/music",
        element: (
          <AnimateComponent key="music_project">
            <ProtectedRoute>
              <MusicProject />
            </ProtectedRoute>
          </AnimateComponent>
        ),
      },
      {
        path: "/projects/textmage",
        element: (
          <AnimateComponent key="textmage_project">
            <ProtectedRoute>
              <TextMageProject />
            </ProtectedRoute>
          </AnimateComponent>
        ),
      },
      {
        path: "/projects/talemage",
        element: (
          <AnimateComponent key="talemage_project">
            <ProtectedRoute>
              <TalemageProject />
            </ProtectedRoute>
          </AnimateComponent>
        ),
      },
      {
        path: "/projects/pdfmage",
        element: (
          <AnimateComponent key="pdfmage_project">
            <ProtectedRoute>
              <PdfMageProject />
            </ProtectedRoute>
          </AnimateComponent>
        ),
      },
      {
        path: "/projects/voicenote",
        element: (
          <AnimateComponent key="voicenote_project">
            <ProtectedRoute>
              <VoiceNoteProject />
            </ProtectedRoute>
          </AnimateComponent>
        ),
      },
      {
        path: "/projects/snake",
        element: (
          <AnimateComponent key="snake_project">
            <ProtectedRoute>
              <SnakeProject />
            </ProtectedRoute>
          </AnimateComponent>
        ),
      },
      {
        path: "/projects/minesweeper",
        element: (
          <AnimateComponent key="minesweeper_project">
            <ProtectedRoute>
              <MinesweeperProject />
            </ProtectedRoute>
          </AnimateComponent>
        ),
      },
      {
        path: "*",
        element: (
          <AnimateComponent key="portfolio">
            <ProtectedRoute>
              <PageNotFound />
            </ProtectedRoute>
          </AnimateComponent>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
