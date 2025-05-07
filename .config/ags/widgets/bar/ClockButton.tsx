import { bind, Variable } from "astal";
import GLib from "gi://GLib?version=2.0";

export default function ClockButton() {
	const time = Variable("").poll(1000, () => GLib.DateTime.new_now_local().format("%-d %B %H:%M")!);

	return (
		<menubutton cssClasses={["clock-button"]}>
			<label label={bind(time)} />
			<popover>
				<label label={"TODO: put calendar here"} />
			</popover>
		</menubutton>
	);
}
