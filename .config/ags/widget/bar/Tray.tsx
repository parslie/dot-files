import TrayAudio from "./tray/Audio";

export default function Tray() {
  return (
    <box cssClasses={["tray"]}>
      <TrayAudio />
    </box>
  );
}
