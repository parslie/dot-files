import { App } from "astal/gtk4";
import Astal from "gi://Astal?version=4.0";
import Gdk from "gi://Gdk?version=4.0";
import Clock from "../widget/bar/Clock";
import Workspaces from "../widget/bar/Workspaces";

export const BAR_NAME = "Bar";

export default function Bar(monitor: Gdk.Monitor) {
  return (
    <window
      application={App}
      cssClasses={["bar"]}
      gdkmonitor={monitor}
      visible
      name={BAR_NAME}
      anchor={Astal.WindowAnchor.TOP | Astal.WindowAnchor.RIGHT | Astal.WindowAnchor.LEFT}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      layer={Astal.Layer.BOTTOM}
    >
      <centerbox cssName="centerbox">
        <box>
          <Workspaces monitor={monitor} />
        </box>
        <box>
          <Clock />
        </box>
        <box></box>
      </centerbox>
    </window>
  );
}
