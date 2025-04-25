import Astal from "gi://Astal?version=4.0";
import Gdk from "gi://Gdk?version=4.0";
import Button from "../widgets/Button";
import Gtk from "gi://Gtk?version=4.0";
import DropdownInput from "../widgets/DropdownInput";

export default function WidgetShowcase(monitor: Gdk.Monitor) {
  return (
    <window
      visible
      cssClasses={["widget-showcase"]}
      gdkmonitor={monitor}
      anchor={Astal.WindowAnchor.LEFT | Astal.WindowAnchor.BOTTOM}
      keymode={Astal.Keymode.ON_DEMAND}
    >
      <box vertical>
        <label label="Different types of buttons:" halign={Gtk.Align.START} />
        <box>
          <Button iconName="system-lock-screen-symbolic" />
          <Button iconName="system-lock-screen-symbolic" label="Icon Button" />
          <Button label="Label Button" />
          <Button />
        </box>
        <Gtk.Separator />
        <label label="Input fields:" halign={Gtk.Align.START} />
        <box>
          <DropdownInput options={[1, 2, 3]} />
          <DropdownInput options={["Test", "Not", "Asd"]} />
        </box>
        <box vertical>
          <entry />
          <slider value={0.5} />
          <slider drawValue valuePos={Gtk.PositionType.LEFT} />
        </box>
      </box>
    </window>
  );
}
