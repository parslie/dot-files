import TrayAudio from "./tray/Audio";
import TrayMisc from "./tray/Misc";

export default function Tray() {
  return (
    <box cssClasses={["tray"]}>
      <TrayMisc />
      <TrayAudio />
    </box>
  );
}
