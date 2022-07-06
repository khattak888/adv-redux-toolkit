import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const themeTextColor = useSelector((state) => state.theme.color);
  const dispatch = useDispatch();

  return (
    <>
      <button
        className="button"
        aria-label="Increment Value"
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>

      <span className="value" style={{ color: themeTextColor }}>
        Count:{count}
      </span>

      <button
        className="button"
        aria-label="Decrement Value"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <button
        className="button"
        onClick={() => {
          dispatch(incrementByAmount(10));
        }}
      >
        amount increse by 10
      </button>
    </>
  );
};

export default Counter;
