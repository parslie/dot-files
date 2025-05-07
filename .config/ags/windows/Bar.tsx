import { Astal, Gdk } from "astal/gtk4";
import app from "astal/gtk4/app";
import ClockButton from "../widgets/bar/ClockButton";
import VolumeButton from "../widgets/bar/VolumeButton";

/**
 * Adds a bar to the monitor.
 */
export default function Bar(monitor: Gdk.Monitor) {
	return (
		<window
			visible
			cssClasses={["bar"]}
			gdkmonitor={monitor}
			application={app}
			exclusivity={Astal.Exclusivity.EXCLUSIVE}
			anchor={Astal.WindowAnchor.TOP | Astal.WindowAnchor.LEFT | Astal.WindowAnchor.RIGHT}
		>
			<centerbox cssName="centerbox">
				<box>
					<label label={"[power menu]"} />
				</box>
				<box>
					<ClockButton />
				</box>
				<box>
					<label label={"[tray]"} />
					<label label={"[system info]"} />
					<VolumeButton />
				</box>
			</centerbox>
		</window>
	);
}
