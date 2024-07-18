import PropTypes from "prop-types";
import { useLocalStorage } from "../useLocalStorage";
import NotARobotTest, { randomBoolean, shuffleArray } from "./NotARobotTest";
import { useState } from "react";

function ProtectedRoute({ children }) {
  const [isNotARobot, saveAsNotARobot] = useLocalStorage("verified");
  const [success, setSuccess] = useState(isNotARobot());

  if (!isNotARobot() || !success) {
    return (
      <NotARobotTest
        originalItemsOrder={shuffleArray([0, 1, 2, 3, 4])}
        isHappinessIncreasing={randomBoolean()}
        onSuccess={() => {
          saveAsNotARobot(true);
          setSuccess(true);
        }}
      />
    );
  }
  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.object.isRequired,
};

export default ProtectedRoute;
