import { Variable } from "astal";
import GLib from "gi://GLib?version=2.0";

export default function Clock() {
  const dateTime = Variable("").poll(
    1000,
    () => GLib.DateTime.new_now_local().format("%-d %B %H:%M")!,
  );

  return <label label={dateTime()} />;
}
