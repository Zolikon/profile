import { Reorder } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";

const EMOJIS = {
  0: "😭",
  1: "😟",
  2: "🫤",
  3: "😐",
  4: "🙂",
  5: "😁",
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

  function validateResult() {
    const isCorrect = isHappinessIncreasing
      ? items.every((item, index) => item === index)
      : items.every((item, index) => item === 5 - index);

    if (isCorrect) {
      onSuccess();
    } else {
      alert("Please try again");
    }
  }

  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <p className="text-2xl sm:text-4xl text-center">
        Create increasing {isHappinessIncreasing ? "happiness" : "saddness"}
      </p>
      <Reorder.Group axis="x" values={items} onReorder={setItems} className="flex gap-2 sm:gap-6">
        {items.map((item) => (
          <Reorder.Item key={item} value={item}>
            <div className=" text-xl sm:text-6xl">{EMOJIS[item]}</div>
          </Reorder.Item>
        ))}
      </Reorder.Group>
      <button className="p-2 text-md sm:text-2xl" onClick={validateResult}>
        Done
      </button>
    </div>
  );
}

NotARobotTest.propTypes = {
  originalItemsOrder: PropTypes.array.isRequired,
  isHappinessIncreasing: PropTypes.bool.isRequired,
  onSuccess: PropTypes.func.isRequired,
};

export default NotARobotTest;
