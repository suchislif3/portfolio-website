import { useEffect, useState } from "react";

export const useTypeText = (
  textArray,
  totalTypingMS,
  totalDeletingMS,
  pausingMS = 5000,
  phase,
  selectedIndex
) => {
  const [typedText, setTypedText] = useState("");
  const [typingMS, setTypingMS] = useState(
    (totalTypingMS - 500) / textArray[selectedIndex].length || 5000
  );
  const [deletingMS, setDeletingMS] = useState(
    (totalDeletingMS - 500) / textArray[selectedIndex].length || 5000
  );
  useEffect(() => {
    setTypingMS((totalTypingMS - 500) / textArray[selectedIndex].length);
    setDeletingMS((totalDeletingMS - 500) / textArray[selectedIndex].length);
  }, [selectedIndex, textArray, totalTypingMS, totalDeletingMS]);

  useEffect(() => {
    switch (phase) {
      case "typing": {
        const nextTypedText = textArray[selectedIndex].slice(
          0,
          typedText.length + 1
        );

        if (nextTypedText === typedText) {
          return;
        }

        const timeout = setTimeout(() => {
          setTypedText(nextTypedText);
        }, typingMS);
        return () => clearTimeout(timeout);
      }

      case "deleting": {
        if (!typedText) {
          return;
        }

        const nextRemaining = textArray[selectedIndex].slice(
          0,
          typedText.length - 1
        );

        const timeout = setTimeout(() => {
          setTypedText(nextRemaining);
        }, deletingMS);
        return () => clearTimeout(timeout);
      }

      case "pausing":
      default:
        return;
    }
  }, [
    typedText,
    selectedIndex,
    typingMS,
    phase,
    deletingMS,
    textArray,
    pausingMS,
  ]);

  return typedText;
};
