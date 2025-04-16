import { App } from "astal/gtk4";
import Astal from "gi://Astal?version=4.0";
import Gdk from "gi://Gdk?version=4.0";

export const START_MENU_NAME = "StartMenu";

export default function StartMenu(monitor: Gdk.Monitor) {
  return (
    <window
      name={START_MENU_NAME}
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
