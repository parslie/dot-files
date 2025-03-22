import TrayBattery from "./tray/Battery";
import TrayMisc from "./tray/Misc";
import TrayNetwork from "./tray/Network";
import TrayNotifications from "./tray/Notifications";
import TrayVolume from "./tray/Volume";

export default function Tray() {
  return (
    <box cssClasses={["module", "tray"]}>
      <TrayMisc />
      <TrayNotifications />
      <TrayNetwork />
      <TrayVolume />
      <TrayBattery />
    </box>
  );
}
