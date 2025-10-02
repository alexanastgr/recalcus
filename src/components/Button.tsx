import { type AppDispatch } from "../store";
import { calculatorActions } from "../store/calcSlice";

// hooks
import { useDispatch } from "react-redux";

type BtnType = "number" | "operator";

interface BtnProps {
  type: BtnType;
  value: string;
}

function Button({ type, value }: BtnProps) {
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = () => {
    if (type === "number") {
      dispatch(calculatorActions.inputNumber(value));
    } else if (type === "operator") {
      dispatch(calculatorActions.inputOperator(value));
    }
  };

  const isNumber = "bg-gradient-to-b from-gray-200 to-gray-300";
  const isOperat = "bg-gradient-to-b from-orange-300 to-orange-500";
  const btnClass = type === "number" ? isNumber : isOperat;

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 ${btnClass} m-1 btn hover:opacity-80 rounded-lg cursor-pointer text-lg font-semibold`}
    >
      {value}
    </button>
  );
}

export default Button;
