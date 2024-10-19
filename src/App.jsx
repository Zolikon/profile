import { AnimatePresence } from "framer-motion";
import SideNavigation from "./components/SideMenu";
import { Outlet } from "react-router-dom";
import ColorThemeSelector from "./components/ColorThemeSelector";
import { ChatProvider } from "./ChatContext";

function App() {
  return (
    <ChatProvider>
      <div className="flex h-full w-full bg-gradient-to-b relative from-light-bg-from to-light-bg-to dark:from-dark-bg-from dark:to-dark-bg-to text-light-text dark:text-dark-text overflow-y-auto">
        <header className="h-full flex w-14 items-center justify-center">
          <SideNavigation
            content={[
              {
                elements: [
                  <span key={11} className="text-sm sm:text-lg material-symbols-outlined">
                    person
                  </span>,
                  <p key={12} className="text-sm sm:text-lg font-bold">
                    About
                  </p>,
                ],
                to: "/",
              },
              {
                elements: [
                  <span key={91} className="text-sm sm:text-lg material-symbols-outlined">
                    forum
                  </span>,
                  <p key={92} className="text-sm sm:text-lg font-bold">
                    RobotMe
                  </p>,
                ],
                to: "/robotme",
              },
              {
                elements: [
                  <span key={"career1"} className="text-sm sm:text-lg material-symbols-outlined">
                    route
                  </span>,
                  <p key={"career2"} className="text-sm sm:text-lg font-bold">
                    Career
                  </p>,
                ],
                to: "/career",
              },
              {
                elements: [
                  <span key={21} className="text-sm sm:text-lg material-symbols-outlined">
                    computer
                  </span>,
                  <p key={22} className="text-sm sm:text-lg font-bold">
                    Skills
                  </p>,
                ],
                to: "/skills",
              },
              {
                elements: [
                  <span key={31} className="text-sm sm:text-lg material-symbols-outlined">
                    license
                  </span>,
                  <p key={32} className="text-sm sm:text-lg font-bold">
                    Certs
                  </p>,
                ],
                to: "/certs",
              },
              {
                elements: [
                  <span key={41} className="text-sm sm:text-lg material-symbols-outlined">
                    code_blocks
                  </span>,
                  <p key={42} className="text-sm sm:text-lg font-bold">
                    Projects
                  </p>,
                ],
                to: "/projects",
              },
            ]}
          />
        </header>
        <main className=" flex items-center justify-center mx-[45px] sm:mx-[60px] w-full">
          <AnimatePresence>
            <Outlet />
          </AnimatePresence>
        </main>
      </div>
      <ColorThemeSelector />
    </ChatProvider>
  );
}

export default App;
