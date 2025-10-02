import { type AppDispatch } from "../../store";
import { calculatorActions } from "../../store/calcSlice";
import { type BtnType } from "../../types";
import { styles } from "./style";
// hooks
import { useDispatch } from "react-redux";

interface BtnProps {
  type: BtnType;
  value: string;
}

function Button({ type, value }: BtnProps) {
  const dispatch = useDispatch<AppDispatch>();

  const btnClass = styles[type];

  const handleClick = () => {
    if (type === "number") {
      dispatch(calculatorActions.inputNumber(value));
    } else if (type === "operat") {
      if (value === "=") {
        dispatch(calculatorActions.calculate());
      } else {
        dispatch(calculatorActions.inputOperator(value));
      }
    }

    if (type === "clear") {
      dispatch(calculatorActions.clear());
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 ${btnClass} m-1 w-1/1 btn hover:opacity-80 rounded-lg cursor-pointer text-lg font-semibold`}
    >
      {value}
    </button>
  );
}

export default Button;
