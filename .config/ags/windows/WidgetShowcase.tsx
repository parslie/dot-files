import Astal from "gi://Astal?version=4.0";
import Gdk from "gi://Gdk?version=4.0";

export default function WidgetShowcase(monitor: Gdk.Monitor) {
  return (
    <window
      visible
      cssClasses={["widget-showcase"]}
      gdkmonitor={monitor}
      anchor={Astal.WindowAnchor.LEFT | Astal.WindowAnchor.BOTTOM}
    >
      <label label="I will use this window to design different widgets." />
    </window>
  );
}
