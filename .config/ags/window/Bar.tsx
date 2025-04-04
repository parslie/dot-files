import { App } from "astal/gtk4";
import Astal from "gi://Astal?version=4.0";
import Gdk from "gi://Gdk?version=4.0";
import Clock from "../widget/bar/Clock";
import Workspaces from "../widget/bar/Workspaces";
import Tray from "../widget/bar/Tray";
import PowerButton from "../widget/bar/PowerButton";

export const BAR_NAME = "Bar";

export default function Bar(monitor: Gdk.Monitor) {
  return (
    <window
      visible
      name={BAR_NAME}
      application={App}
      gdkmonitor={monitor}
      cssClasses={["bar"]}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      anchor={Astal.WindowAnchor.TOP | Astal.WindowAnchor.LEFT | Astal.WindowAnchor.RIGHT}
    >
      <centerbox cssName="centerbox">
        <box spacing={4}>
          <PowerButton />
          <Workspaces monitor={monitor} />
        </box>
        <box></box>
        <box spacing={4}>
          <Tray />
          <Clock />
        </box>
      </centerbox>
    </window>
  );
}
