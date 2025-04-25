import Gtk from "gi://Gtk?version=4.0";
import { Brightness } from "./enums";

export function SectionBorder() {
  return <Gtk.Separator cssClasses={["section-border"]} />;
}

export type SectionBoxProps = {
  child?: Gtk.Widget;
  children?: Gtk.Widget[];
  vertical?: boolean;
  brightness?: Brightness;
  hexpand?: boolean;
  vexpand?: boolean;
};

export default function SectionBox({
  child,
  children,
  vertical,
  brightness = Brightness.Light,
  hexpand,
  vexpand,
}: SectionBoxProps) {
  return (
    <box
      cssClasses={["section", brightness]}
      vertical={vertical}
      hexpand={hexpand}
      vexpand={vexpand}
    >
      {child !== undefined ? child : children}
    </box>
  );
}
