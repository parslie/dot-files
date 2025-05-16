import { GLib, Variable } from "astal";
import { Gtk } from "astal/gtk4";

export default function ClockModule() {
	const dateTime = Variable("").poll(
		1000,
		() => GLib.DateTime.new_now_local()!.format("%a %e %b  %H:%M")!
	);

	return (
		<menubutton cssClasses={["bar-module", "clock"]}>
			<box>
				<label label={dateTime()} />
			</box>
			<popover hasArrow={false}>
				<Gtk.Calendar />
			</popover>
		</menubutton>
	);
}
