import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useCallback, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
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

  return (
    <div className={`flex fixed left-0 top-0 h-full ${isOpen && "w-full"} z-50`}>
      <motion.header
        ref={node}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={transition}
        onClick={() => {
          if (!isOpen) openMenu();
        }}
        className="bg-gradient-to-b from-light-side-from to-light-side-to dark:from-dark-side-from dark:to-dark-side-to text-light-text dark:text-dark-text p-4  h-4/5 my-auto flex flex-col justify-between items-center rounded-r-2xl"
      >
        <div className="flex flex-col items-center justify-start w-full h-full">
          <motion.div
            variants={imageVariants}
            transition={transition}
            className="flex flex-col items-center justify-center mb-2"
          >
            {isOpen && (
              <motion.p
                className=" whitespace-nowrap text-xl font-bold"
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
            className="bg-red-500 hover:bg-red-700 font-bold py-2 px-4 rounded select-none text-stone-200"
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
            className={`mt-16 flex flex-col gap-2 justify-start w-full h-full overflow-hidden select-none ${
              isOpen ? "items-start pl-3" : "items-center"
            }`}
          >
            {content.map((item) =>
              isOpen ? (
                <NavLink
                  to={item.to}
                  key={item.elements[0].key}
                  className="flex items-center mx-3 gap-2 hover:scale-110 transition-all"
                  onClick={() => {
                    closeMenu();
                  }}
                >
                  {item.elements[0]}
                  <motion.div className="text-md cursor-pointer flex gap-1 ">{item.elements[1]}</motion.div>
                </NavLink>
              ) : (
                <motion.div key={item.elements[1].key} className="text-md">
                  {item.elements[0]}
                </motion.div>
              )
            )}
          </motion.nav>
        </div>
        {isOpen ? (
          <ContactInfo />
        ) : (
          <span className="material-symbols-outlined cursor-pointer select-none">contacts</span>
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
