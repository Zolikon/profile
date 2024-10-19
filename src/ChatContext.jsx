import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";
import { ENDPOINT } from "./environment";

const ChatContext = createContext();

const initialState = {
  questions: [],
  answers: [],
  waitingForAnswer: false,
  shouldTypeLastAnswer: false,
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "addQuestion":
      return { ...state, questions: [...state.questions, { ...payload, id: Date.now() }], waitingForAnswer: true };
    case "addAnswer":
      if (state.questions.length > 2) {
        state.questions.shift();
        state.answers.shift();
      }

      return {
        ...state,
        answers: [...state.answers, { ...payload, id: Date.now() }],
        waitingForAnswer: false,
        shouldTypeLastAnswer: true,
      };
    case "finishTyping":
      return { ...state, shouldTypeLastAnswer: false };
    default:
      throw new Error();
  }
}

function ChatProvider({ children }) {
  const [{ questions, answers, waitingForAnswer, shouldTypeLastAnswer }, dispatcher] = useReducer(
    reducer,
    initialState
  );

  const askQuestion = function (value) {
    dispatcher({ type: "addQuestion", payload: { message: value } });
    fetch(ENDPOINT, { method: "POST", body: JSON.stringify({ question: value }) })
      .then((response) => response.json())
      .then((data) => {
        dispatcher({ type: "addAnswer", payload: { message: data.answer, links: data.links } });
      })
      .catch((e) => {
        console.error(e);
        dispatcher({
          type: "addAnswer",
          payload: {
            message: "I'm not feeling well, try again later.",
          },
        });
      });
  };

  const mergeMessages = () => {
    const result = [];
    for (let i = 0; i < questions.length; i++) {
      result.push(questions[i]);
      if (answers[i]) {
        result.push(answers[i]);
      }
    }
    return result;
  };

  const finishAnswerTyping = () => {
    dispatcher({ type: "finishTyping" });
  };

  return (
    <ChatContext.Provider
      value={{
        questions,
        answers,
        allMessages: mergeMessages(),
        waitingForAnswer,
        shouldTypeLastAnswer,
        finishAnswerTyping,
        askQuestion,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

ChatProvider.propTypes = {
  children: PropTypes.array.isRequired,
};

function useChat() {
  return useContext(ChatContext);
}

export { ChatProvider, useChat };
