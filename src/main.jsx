import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Portfolio from "./portfolio/Portfolio.jsx";
import AnimateComponent from "./components/AnimateComponent.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Home from "./aboutme/Home.jsx";
import Skills from "./skills/Skills.jsx";
import PageNotFound from "./components/PageNotFound.jsx";
import MusicProject from "./portfolio/projects/MusicProject.jsx";
import TextMageProject from "./portfolio/projects/TextMageProject.jsx";
import PdfMageProject from "./portfolio/projects/PdfMageProject.jsx";
import VoiceNoteProject from "./portfolio/projects/VoiceNoteProject.jsx";
import SnakeProject from "./portfolio/projects/SnakeProject.jsx";
import MinesweeperProject from "./portfolio/projects/MinesweeperProject.jsx";
import TalemageProject from "./portfolio/projects/TalemageProject.jsx";
import Certifications from "./certs/Certifications.jsx";
import CareerJourney from "./career/CareerJourney.jsx";
import RobotMe from "./chat/RobotMe.jsx";
import WorkdeskProject from "./portfolio/projects/WorkdeskProject.jsx";
import FlowGeneratorProject from "./portfolio/projects/FlowGeneratorProject.jsx";
import PythonFastskillingProject from "./portfolio/projects/PythonFastskillingProject.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <AnimateComponent key="home">
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          </AnimateComponent>
        ),
      },
      {
        path: "/career",
        element: (
          <AnimateComponent key="journey">
            <ProtectedRoute>
              <CareerJourney />
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
        path: "/robotme",
        element: (
          <AnimateComponent key="robot">
            <ProtectedRoute>
              <RobotMe />
            </ProtectedRoute>
          </AnimateComponent>
        ),
      },
      {
        path: "/certs",
        element: (
          <AnimateComponent key="certs">
            <ProtectedRoute>
              <Certifications />
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
        path: "/projects/workdesk",
        element: (
          <AnimateComponent key="workdesk_project">
            <ProtectedRoute>
              <WorkdeskProject />
            </ProtectedRoute>
          </AnimateComponent>
        ),
      },
      {
        path: "/projects/flowgenerator",
        element: (
          <AnimateComponent key="flowgenerator_project">
            <ProtectedRoute>
              <FlowGeneratorProject />
            </ProtectedRoute>
          </AnimateComponent>
        ),
      },
      {
        path: "/projects/python-fastskilling",
        element: (
          <AnimateComponent key="pythonfastskilling_project">
            <ProtectedRoute>
              <PythonFastskillingProject />
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
  </React.StrictMode>,
);
