import { bind, Variable } from "astal";
import GLib from "gi://GLib?version=2.0";
import Calendar from "../Calendar";

export default function ClockButton() {
	const time = Variable("").poll(1000, () => GLib.DateTime.new_now_local().format("%-d %B %H:%M")!);

	return (
		<menubutton cssClasses={["clock-button"]}>
			<label label={bind(time)} />
			<popover>
				<Calendar />
			</popover>
		</menubutton>
	);
}
