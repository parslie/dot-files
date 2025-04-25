import Gtk from "gi://Gtk?version=4.0";
import { ButtonStyle } from "./enums";

export type MenuButtonProps = {
  child?: Gtk.Widget;
  iconName?: string;
  label?: string;
  style?: ButtonStyle;
  onScrolled?: (button: Gtk.MenuButton, delta: number) => void;
};

export default function MenuButton({
  child,
  iconName,
  label,
  style = ButtonStyle.Transparent,
  onScrolled,
}: MenuButtonProps) {
  return (
    <menubutton
      cssClasses={iconName ? ["icon", style] : [style]}
      onScroll={(button, _dx, dy) => {
        if (onScrolled) {
          onScrolled(button, dy);
        }
      }}
    >
      <box>
        {iconName && <image iconName={iconName} />}
        {label && <label label={label} />}
      </box>
      <popover>{child}</popover>
    </menubutton>
  );
}
