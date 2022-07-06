import { useSelector } from "react-redux/es/exports";

const Coin = () => {
  const coin = useSelector((state) => state.counter.count);
  const themeTextColor = useSelector((state) => state.theme.color);
  return (
    <>
      <span className="value" style={{ color: themeTextColor }}>
        Coin:{coin}
      </span>
    </>
  );
};

export default Coin;
