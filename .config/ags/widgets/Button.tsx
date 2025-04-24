import { Binding } from "astal";
import Gtk from "gi://Gtk?version=4.0";

export type ButtonProps = {
  iconName?: string | Binding<string>;
  label?: string | Binding<string>;
  onClicked?: () => void;
};

export default function Button({ iconName, label, onClicked }: ButtonProps) {
  let buttonContents: Gtk.Widget;
  if (iconName !== undefined && label !== undefined) {
    buttonContents = (
      <box>
        <image iconName={iconName} />
        <label label={label} hexpand />
      </box>
    );
  } else if (iconName !== undefined) {
    buttonContents = <image iconName={iconName} />;
  } else if (label !== undefined) {
    buttonContents = <label label={label} />;
  } else {
    buttonContents = <></>;
  }

  return <button onClicked={onClicked}>{buttonContents}</button>;
}
