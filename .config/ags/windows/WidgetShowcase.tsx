import Astal from "gi://Astal?version=4.0";
import Gdk from "gi://Gdk?version=4.0";

export default function WidgetShowcase(monitor: Gdk.Monitor) {
  return (
    <window
      gdkmonitor={monitor}
      keymode={Astal.Keymode.ON_DEMAND}
      layer={Astal.Layer.TOP}
      exclusivity={Astal.Exclusivity.IGNORE}
      anchor={Astal.WindowAnchor.RIGHT}
      namespace={"widget-showcase"}
      visible
    >
      <box>
        <label label={"asd"} />
      </box>
    </window>
  );
}
