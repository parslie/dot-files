import { exec } from "astal";
import { App } from "astal/gtk4";
import Gtk from "gi://Gtk?version=4.0";
import { getStartMenuName } from "../../windows/StartMenu";

export type PowerButtonProps = {
  iconName: string;
  label: string;
  command: string;
};

function runCommand(command: string) {
  exec(command);
  for (const monitor of App.get_monitors()) {
    // TODO: when clicking outside window has been fixed, this will not be needed
    App.get_window(getStartMenuName(monitor))?.set_visible(false);
  }
}

export default function PowerButton({ iconName, label, command }: PowerButtonProps) {
  return (
    <button cssClasses={["power-button"]} onClicked={() => runCommand(command)}>
      <box>
        <image iconName={iconName} />
        <label label={label} hexpand halign={Gtk.Align.START} />
      </box>
    </button>
  );
}
