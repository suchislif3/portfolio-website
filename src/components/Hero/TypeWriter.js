import { TypeWriterSpan } from "../../styles/GlobalComponents";
import { useTypeText } from "./useTypeText";

const TypeWriter = ({
  textArray,
  totalTypingMS,
  totalDeletingMS,
  pausingMS,
  phase,
  selectedIndex,
}) => {
  const currentText = useTypeText(
    textArray,
    totalTypingMS,
    totalDeletingMS,
    pausingMS,
    phase,
    selectedIndex
  );

  return <TypeWriterSpan>{currentText}</TypeWriterSpan>;
};

export default TypeWriter;
