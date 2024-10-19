import { useEffect, useState } from "react";
import { useChat } from "../ChatContext";
import PropTypes from "prop-types";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { Comment } from "react-loader-spinner";
import { NavLink } from "react-router-dom";

function RobotMe() {
  const { allMessages, waitingForAnswer, askQuestion, finishAnswerTyping, shouldTypeLastAnswer } = useChat();
  const [currentMessage, setCurrentMessage] = useState("");
  const [displayInput, setDisplayInput] = useState(true);

  function submitQuestion() {
    if (currentMessage.length > 0 && !waitingForAnswer) {
      askQuestion(currentMessage);
      setCurrentMessage("");
      setDisplayInput(false);
    }
  }

  return (
    <div className="flex flex-col justify-start gap-4 items-center text-xs w-full h-full xl:text-sm py-6 pr-10 xl:pr-0">
      <p className="text-6xl font-extrabold">RobotMe</p>
      <div className="flex flex-col justify-end h-3/5 overflow-hidden w-full xl:w-2/3  mt-10 px-4 gap-2 custom-scrollbar">
        <AnimatePresence>
          {allMessages.map((message, index) => (
            <ChatMessage
              key={message.id}
              message={message.message}
              links={message.links || []}
              typeMessage={index === allMessages.length - 1 && shouldTypeLastAnswer}
              isHuman={index % 2 === 0}
              onFinishTyping={() => {
                finishAnswerTyping(), setDisplayInput(true);
              }}
            />
          ))}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {displayInput && (
          <>
            <motion.div
              className="w-4/5 relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <textarea
                data-gramm="false"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                className="p-2 rounded-xl w-full bg-light-bg-from dark:bg-dark-bg-from dark:text-dark-text pr-[50px] resize-none"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    submitQuestion();
                  }
                }}
                autoFocus
              />
              {!waitingForAnswer && currentMessage.length > 0 && (
                <button
                  onClick={submitQuestion}
                  className="w-[24px] material-symbols-outlined text-black dark:text-dark-text absolute right-2 top-2 disabled:hover:scale-100 hover:scale-110"
                >
                  send
                </button>
              )}
            </motion.div>
          </>
        )}
        {displayInput && allMessages.length > 2 && currentMessage.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            Keep in mind that I might give smart answers but nothing replaces personal contact. You can find contact
            information on the side menu.
          </motion.p>
        )}
        {waitingForAnswer && (
          <div className="flex flex-col w-[120px]">
            <Comment className="mt-2 self-start " backgroundColor="green" color="white" />
            <p className="text-5xl self-end">🤖</p>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ChatMessage({ isHuman = false, message, links = [], typeMessage = false, onFinishTyping = () => {} }) {
  const [displayedMessage, setDisplayedMessage] = useState(typeMessage ? "" : message);

  useEffect(() => {
    if (typeMessage && displayedMessage !== message) {
      const interval = setInterval(() => {
        setDisplayedMessage((prev) => {
          if (prev.length === message.length) {
            clearInterval(interval);
            onFinishTyping();
            return prev;
          }
          return prev + message[prev.length];
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col gap-1 p-2 rounded-2xl w-2/3 font-bold ${
        isHuman
          ? " self-start bg-green-700 text-dark-text dark:text-light-text dark:bg-teal-600"
          : " self-end bg-light-side-from dark:bg-dark-bg-to"
      }`}
    >
      <div className="flex">
        <div className="text-3xl self-center">{isHuman ? "🧑‍💻" : "🤖"}</div>
        <div className=" break-words">{displayedMessage}</div>
      </div>
      {displayedMessage.length === message.length && links && links.length > 0 && (
        <div className="flex gap-1 w-full items-center justify-start px-10">
          <p>Links:</p>
          {links.map(({ name, link }) => (
            <NavLink
              key={link}
              to={link}
              className="text-stone-200 py-1 px-3 rounded-full bg-stone-500 hover:bg-stone-700"
            >
              {name}
            </NavLink>
          ))}
        </div>
      )}
    </motion.div>
  );
}

ChatMessage.propTypes = {
  isHuman: PropTypes.bool,
  message: PropTypes.string.isRequired,
  links: PropTypes.array,
  typeMessage: PropTypes.bool,
  onFinishTyping: PropTypes.func,
};

export default RobotMe;
