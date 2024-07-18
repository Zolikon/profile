import { Reorder } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";

const EMOJIS = {
  0: "😭",
  1: "😟",
  2: "😐",
  3: "🙂",
  4: "😁",
};

export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

export function randomBoolean() {
  return Math.random() < 0.5;
}

function NotARobotTest({ originalItemsOrder, isHappinessIncreasing, onSuccess }) {
  const [items, setItems] = useState(originalItemsOrder);

  function isCorrectOrder() {
    return isHappinessIncreasing
      ? items.every((item, index) => item === index)
      : items.every((item, index) => item === items.length - 1 - index);
  }

  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <p className="text-2xl sm:text-4xl text-center">Prove that you are not a 🤖 and understand 🧑‍💼/👩‍💼 emotions</p>
      <p className="text-2xl sm:text-2xl text-center">
        Drag them around and create increasing {isHappinessIncreasing ? "happiness" : "saddness"}
      </p>
      <Reorder.Group axis="x" values={items} onReorder={setItems} className="flex gap-2 sm:gap-6">
        {items.map((item) => (
          <Reorder.Item key={item} value={item}>
            <div className=" text-xl sm:text-6xl">{EMOJIS[item]}</div>
          </Reorder.Item>
        ))}
      </Reorder.Group>
      {isCorrectOrder() ? (
        <button className="p-2 text-md sm:text-2xl h-4" onClick={onSuccess}>
          Enter
        </button>
      ) : (
        <div className="h-4" />
      )}
    </div>
  );
}

NotARobotTest.propTypes = {
  originalItemsOrder: PropTypes.array.isRequired,
  isHappinessIncreasing: PropTypes.bool.isRequired,
  onSuccess: PropTypes.func.isRequired,
};

export default NotARobotTest;
