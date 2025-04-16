import { App } from "astal/gtk4";
import { START_MENU_NAME } from "../../windows/StartMenu";

function toggleStartMenu() {
  App.toggle_window(START_MENU_NAME);
}

export default function StartButton() {
  return (
    <button onClicked={() => toggleStartMenu()}>
      <image iconName={"user-home-symbolic"} />
    </button>
  );
}
