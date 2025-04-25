import Astal from "gi://Astal?version=4.0";
import Gdk from "gi://Gdk?version=4.0";
import SectionBox, { SectionBorder } from "../widgets/SectionBox";
import { Brightness } from "../widgets/enums";

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
      <box vertical>
        <SectionBox brightness={Brightness.Dark}>
          <label label={"Widget Showcase"} />
        </SectionBox>
        <SectionBorder />
        <SectionBox>
          <label label={"asd"} />
        </SectionBox>
      </box>
    </window>
  );
}
