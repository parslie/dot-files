import { App } from "astal/gtk4";
import Astal from "gi://Astal?version=4.0";
import Gdk from "gi://Gdk?version=4.0";

const START_MENU_NAME = "StartMenu";

export function getStartMenuName(monitor: Gdk.Monitor) {
  return `${START_MENU_NAME}-${monitor.connector}`;
}

export default function StartMenu(monitor: Gdk.Monitor) {
  return (
    <window
      name={getStartMenuName(monitor)}
      application={App}
      cssClasses={["start-menu"]}
      gdkmonitor={monitor}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      anchor={Astal.WindowAnchor.BOTTOM | Astal.WindowAnchor.LEFT}
    >
      <box>
        <label label={"asd"} />
      </box>
    </window>
  );
}
