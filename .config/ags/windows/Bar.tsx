import Astal from "gi://Astal?version=4.0";
import Gdk from "gi://Gdk?version=4.0";
import StartButton from "../widgets/bar/StartButton";
import { App } from "astal/gtk4";

export const BAR_NAME = "Bar";

export default function Bar(monitor: Gdk.Monitor) {
  return (
    <window
      visible
      application={App}
      name={BAR_NAME}
      cssClasses={["bar"]}
      gdkmonitor={monitor}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      anchor={Astal.WindowAnchor.BOTTOM | Astal.WindowAnchor.LEFT | Astal.WindowAnchor.RIGHT}
    >
      <centerbox cssName="centerbox">
        <box>
          <StartButton />
        </box>
        <box></box>
        <box></box>
      </centerbox>
    </window>
  );
}
