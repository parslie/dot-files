import { App } from "astal/gtk4";
import Astal from "gi://Astal?version=4.0";
import Gdk from "gi://Gdk?version=4.0";
import Clock from "../widget/bar/Clock";

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
        <box></box>
        <box></box>
        <box>
          <Clock />
        </box>
      </centerbox>
    </window>
  );
}
