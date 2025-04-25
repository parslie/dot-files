import Astal from "gi://Astal?version=4.0";
import Gdk from "gi://Gdk?version=4.0";
import Clock from "../widgets/bar/Clock";
import Volume from "../widgets/bar/Volume";
import Network from "../widgets/bar/Network";

export default function Bar(monitor: Gdk.Monitor) {
  return (
    <window
      gdkmonitor={monitor}
      keymode={Astal.Keymode.NONE}
      layer={Astal.Layer.TOP}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      anchor={Astal.WindowAnchor.RIGHT | Astal.WindowAnchor.BOTTOM | Astal.WindowAnchor.LEFT}
      namespace={"bar"}
      cssClasses={["bar"]}
      visible
    >
      <centerbox cssName="centerbox">
        <box>
          <label label="[Power]" />
          <label label="[Workspaces]" />
        </box>
        <box>
          <Clock />
        </box>
        <box>
          <label label="[Tray]" />
          <label label="[Bluetooth]" />
          <Network />
          <Volume />
          <label label="[Battery]" />
        </box>
      </centerbox>
    </window>
  );
}
