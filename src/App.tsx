import Draggable from "react-draggable";
import { type RootState } from "./store";

// hooks
import { useSelector } from "react-redux";
import { useRef } from "react";

// components
import Button from "./components/Button";

function App() {
  const ref = useRef<HTMLDivElement>(null);

  const display = useSelector(
    (state: RootState) => state.calculator.currentValue
  );

  return (
    <Draggable nodeRef={ref} handle=".body" cancel=".btn">
      <div className="p-4 w-64 bg-white rounded-2xl shadow-lg body" ref={ref}>
        {/* screen */}
        <div className="bg-black text-white text-right p-4 rounded mb-2 text-xl font-mono">
          {display}
        </div>

        {/* buttons layout */}
        <div className="grid grid-cols-4 gap-2">
          <Button type="number" value="7" />
          <Button type="number" value="8" />
          <Button type="number" value="9" />
          <Button type="operator" value="/" />

          <Button type="number" value="4" />
          <Button type="number" value="5" />
          <Button type="number" value="6" />
          <Button type="operator" value="*" />

          <Button type="number" value="1" />
          <Button type="number" value="2" />
          <Button type="number" value="3" />
          <Button type="operator" value="-" />

          <Button type="number" value="0" />
          <Button type="operator" value="." />
          <Button type="operator" value="=" />
          <Button type="operator" value="+" />
        </div>
      </div>
    </Draggable>
  );
}

export default App;
