import { App, Astal, Gdk } from "astal/gtk4";
import ClockModule from "../widget/module/bar/ClockModule";
import SystemModule from "../widget/module/bar/SystemModule";

export default function Bar(monitor: Gdk.Monitor) {
	return (
		<window
			cssClasses={["bar"]}
			visible
			application={App}
			gdkmonitor={monitor}
			exclusivity={Astal.Exclusivity.EXCLUSIVE}
			anchor={Astal.WindowAnchor.TOP | Astal.WindowAnchor.RIGHT | Astal.WindowAnchor.LEFT}>
			<centerbox>
				<box></box>
				<box>
					<ClockModule />
				</box>
				<box>
					<SystemModule />
				</box>
			</centerbox>
		</window>
	);
}
