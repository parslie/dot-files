import { App } from "astal/gtk4";
import Astal from "gi://Astal?version=4.0";
import Gdk from "gi://Gdk?version=4.0";
import PowerButton from "../widgets/start_menu/PowerButton";

const START_MENU_NAME = "StartMenu";

export function getStartMenuName(monitor: Gdk.Monitor) {
  return `${START_MENU_NAME}-${monitor.connector}`;
}

export default function StartMenu(monitor: Gdk.Monitor) {
  return (
    <window
      name={getStartMenuName(monitor)}
      application={App}
      cssClasses={["start-menu"]}
      gdkmonitor={monitor}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      anchor={Astal.WindowAnchor.BOTTOM | Astal.WindowAnchor.LEFT}
    >
      <box vertical>
        <PowerButton
          iconName="system-lock-screen-symbolic"
          label="Lock"
          command="loginctl lock-session"
        />
        <PowerButton iconName="system-log-out-symbolic" label="Log out" command="uwsm stop" />
        <PowerButton iconName="face-yawn-symbolic" label="Suspend" command="systemctl suspend" />
        <PowerButton iconName="system-reboot-symbolic" label="Reboot" command="systemctl reboot" />
        <PowerButton
          iconName="system-shutdown-symbolic"
          label="Power off"
          command="systemctl poweroff"
        />
      </box>
    </window>
  );
}
