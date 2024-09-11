import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useCallback, useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ContactInfo from "../ContactInfo";

const variants = {
  open: { width: "200px", opacity: 1 },
  closed: { width: "55px", opacity: 0.9 },
  closedButton: { rotate: -90, scale: 0.8, y: 30 },
  openButton: { rotate: 0, scale: 1, y: 0 },
};

const imageVariants = {
  open: { opacity: 1, width: "120px", height: "180px" },
  closed: { opacity: 0.9, width: "45px", height: "90px" },
};

const transition = {
  type: "tween",
  duration: 0.5,
};

const SideNavigation = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const node = useRef();

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const openMenu = () => {
    setIsOpen(true);
  };

  const handleClickOutside = useCallback(
    (e) => {
      if (!node.current.contains(e.target)) {
        closeMenu();
      }
    },
    [node, closeMenu]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const toggleIsOpen = () => {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  function isPartOfCurrentPath(path) {
    return (
      (location.pathname === "/" && location.pathname === path) || (path !== "/" && location.pathname.startsWith(path))
    );
  }

  return (
    <div className={`flex fixed left-0 top-0 h-full ${isOpen && "w-full"} z-50 `}>
      <motion.header
        ref={node}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={transition}
        onClick={() => {
          if (!isOpen) openMenu();
        }}
        className="bg-gradient-to-b from-light-side-from to-light-side-to dark:from-dark-side-from dark:to-dark-side-to text-light-text dark:text-dark-text p-4 h-[550px] sm:h-4/5 my-auto flex flex-col justify-between items-center rounded-r-2xl"
      >
        <div className="flex flex-col items-center justify-start w-full h-full">
          <motion.div
            variants={imageVariants}
            transition={transition}
            className="flex flex-col items-center justify-center mb-2"
          >
            {isOpen && (
              <motion.p
                className=" whitespace-nowrap text-sm  md:text-xl font-bold select-none"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                key="name"
              >
                Zoltan Pozsonyi
              </motion.p>
            )}
            <img src="/profil.jpg" alt="profile" className={` rounded-full mb-4 mt-2`} />
          </motion.div>
          <motion.button
            className="bg-red-500 hover:bg-red-700 dark:bg-teal-500 dark:hover:bg-teal-700 dark:text-light-text font-bold py-1 px-4 rounded select-none text-dark-text"
            onClick={toggleIsOpen}
            variants={variants}
            initial="closedButton"
            transition={transition}
            animate={isOpen ? "openButton" : "closedButton"}
          >
            {isOpen ? "Close" : "Open"}
          </motion.button>
          <motion.nav
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            transition={transition}
            className={`${
              isOpen ? "mt-8 sm:mt-12" : "mt-12 sm:mt-16"
            } flex flex-col gap-0 xl:gap-2 justify-start w-full h-full overflow-hidden select-none items-start`}
          >
            {content.map((item) =>
              isOpen ? (
                <motion.div key={item.elements[0].key} className="relative w-full flex items-center justify-center">
                  <NavLink
                    to={item.to}
                    className={`flex items-center w-4/5 mx-3 gap-2 hover:scale-110 transition-all p-1 rounded-md z-10 ${
                      isPartOfCurrentPath(item.to) && "dark:text-light-text text-dark-text"
                    }`}
                    onClick={() => {
                      closeMenu();
                    }}
                  >
                    {item.elements[0]}
                    <motion.div className="text-xs sm:text-md cursor-pointer flex gap-1 ">
                      {item.elements[1]}
                    </motion.div>
                  </NavLink>
                  {isPartOfCurrentPath(item.to) && (
                    <span className="w-[90%] h-full bg-blue-800 dark:bg-blue-500 absolute left-0 rounded-r-xl z-0" />
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key={item.elements[1].key}
                  className="text-md relative w-full flex items-center justify-center z-10"
                >
                  {isPartOfCurrentPath(item.to) && (
                    <span className="w-full h-full bg-blue-800 dark:bg-blue-500 absolute left-0 z-0" />
                  )}
                  <span
                    className={`z-10 flex items-center justify-center ${
                      isPartOfCurrentPath(item.to) && "dark:text-light-text text-dark-text"
                    }`}
                  >
                    {item.elements[0]}
                  </span>
                </motion.div>
              )
            )}
          </motion.nav>
        </div>
        {isOpen ? (
          <motion.div
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            transition={transition}
            className="w-full flex flex-col items-center justify-center gap-2"
          >
            <ContactInfo />
          </motion.div>
        ) : (
          <span className="material-symbols-outlined cursor-pointer select-none text-sm sm:text-lg md:text-2xl">
            contacts
          </span>
        )}
      </motion.header>
      {isOpen && <div className="w-full h-full backdrop-blur-sm z-10" />}
    </div>
  );
};

SideNavigation.propTypes = {
  content: PropTypes.array.isRequired,
};

export default SideNavigation;
