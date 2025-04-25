import Gtk from "gi://Gtk?version=4.0";
import { ButtonStyle } from "./enums";

export type ButtonProps = {
  iconName?: string;
  label?: string;
  onClicked?: (button: Gtk.Button) => void;
  style?: ButtonStyle;
  onScrolled?: (button: Gtk.Button, delta: number) => void;
};

export default function Button({
  iconName,
  label,
  onClicked,
  style = ButtonStyle.Transparent,
  onScrolled,
}: ButtonProps) {
  return (
    <button
      cssClasses={iconName ? ["regular", "icon", style] : ["regular", style]}
      onClicked={onClicked}
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
    </button>
  );
}
