import { useDispatch, useSelector } from "../../redux/react-redux";

export default function Count() {
  return (
    <div>
      <View />
      <Controller />
    </div>
  );
}

const View = () => {
  const { value } = useSelector((state) => state.count);

  return <h3>{value}</h3>;
};

const Controller = () => {
  const dp = useDispatch();

  const onClick = (value: number, type: "increase" | "decrease") => {
    dp({ type, payload: value });
  };

  return (
    <div>
      <button onClick={() => onClick(1, "increase")}>Increase by 1</button>
      <button onClick={() => onClick(5, "increase")}>Increase by 5</button>
      <button onClick={() => onClick(5, "decrease")}>Decrease by 5</button>
      <button onClick={() => onClick(1, "decrease")}>Decrease by 1</button>
    </div>
  );
};
