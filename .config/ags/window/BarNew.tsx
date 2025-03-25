import { App } from "astal/gtk4";
import Astal from "gi://Astal?version=4.0";
import Gdk from "gi://Gdk?version=4.0";
import Gtk from "gi://Gtk?version=4.0";
import Clock from "../widget/bar_new/Clock";
import Workspaces from "../widget/bar_new/Workspaces";
import Volume from "../widget/bar_new/Volume";
import Network from "../widget/bar_new/Network";
import Bluetooth from "../widget/bar_new/Bluetooth";

export const BAR_NEW_NAME = "Bar New";

export default function BarNew(monitor: Gdk.Monitor) {
  return (
    <window
      visible
      name={BAR_NEW_NAME}
      application={App}
      gdkmonitor={monitor}
      cssClasses={["bar-new"]}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      anchor={Astal.WindowAnchor.TOP | Astal.WindowAnchor.LEFT | Astal.WindowAnchor.RIGHT}
    >
      <centerbox cssName="centerbox">
        <box>
          <Workspaces monitor={monitor} />
        </box>
        <box>
          <Clock />
        </box>
        <box>
          <Bluetooth />
          <Network />
          <Volume />
        </box>
      </centerbox>
    </window>
  );
}
