import { App } from "astal/gtk4";
import { getStartMenuName } from "../../windows/StartMenu";
import Gdk from "gi://Gdk?version=4.0";

function toggleStartMenu(monitor: Gdk.Monitor) {
  App.toggle_window(getStartMenuName(monitor));
}

export default function StartButton({ monitor }: { monitor: Gdk.Monitor }) {
  return (
    <button onClicked={() => toggleStartMenu(monitor)}>
      <image iconName={"user-home-symbolic"} />
    </button>
  );
}
