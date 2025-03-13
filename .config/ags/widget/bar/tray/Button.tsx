import { Binding } from "astal";
import Gtk from "gi://Gtk?version=4.0";

export default function TrayButton({
  child,
  iconName,
}: {
  child?: Gtk.Widget;
  iconName: string | Binding<string>;
}) {
  return (
    <menubutton>
      <image iconName={iconName} />
      <popover>{child}</popover>
    </menubutton>
  );
}
