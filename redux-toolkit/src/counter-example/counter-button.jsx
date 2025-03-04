import { useDispatch } from "react-redux";
import { handleIncreaseCountAction } from "../store/slices/counter";

function CounterButton() {
  const dispatch = useDispatch();

  function handleClick(){
    dispatch(handleIncreaseCountAction({
        id: 1,
        name: "Rakshan CK"
    }));
  }

  return <button onClick={handleClick}>Increase Count</button>;
}
export default CounterButton;
