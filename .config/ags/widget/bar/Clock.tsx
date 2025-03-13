import { Variable } from "astal";
import GLib from "gi://GLib?version=2.0";

export default function Clock() {
  const time = Variable("").poll(1000, () => GLib.DateTime.new_now_local().format("%H:%M")!);
  const date = Variable("").poll(1000, () => GLib.DateTime.new_now_local().format("%-d %B")!);

  return (
    <box cssClasses={["clock"]}>
      <label cssClasses={["date"]} label={date()} />
      <label cssClasses={["time"]} label={time()} />
    </box>
  );
}
