import { useContext } from "react";
import { GlobalContext } from "../context";

function contextTextComponent() {
  const { theme } = useContext(GlobalContext);

  console.log(theme);

  return (
    <h1
      style={{
        fontSize: theme === "light" ? "50px" : "100px",
        backgroundColor: theme === "light" ? "#fff" : "#000",
        color: theme === "light" ? "blue" : "yellow",
      }}
    >
      Rakshan Chillana
    </h1>
  );
}

export default contextTextComponent;
