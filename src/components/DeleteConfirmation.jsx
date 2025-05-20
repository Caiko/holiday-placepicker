import { useEffect } from "react";
import ProgressBar from "./ProgressBar";

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(() => {
    console.log("Timer started");
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);
    // If the user doesn't click on the button, the function will be called after 3 seconds
    return () => {
      clearTimeout(timer);
      console.log("Timer cleared");
      // This will clear the timer if the component is unmounted or if the effect is re-run
    };
  }, [onConfirm]);

  // Takes 2 arguements, a function and a duration in milliseconds

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar timer={TIMER} />
    </div>
  );
}
