import { Astal, Gdk } from "astal/gtk4";
import app from "astal/gtk4/app";

enum CornerPosition {
	TOP_LEFT = "top-left",
	TOP_RIGHT = "top-right",
	BOTTOM_LEFT = "bottom-left",
	BOTTOM_RIGHT = "bottom-right"
}

function MonitorCorner({ monitor, position }: { monitor: Gdk.Monitor; position: CornerPosition }) {
	let anchor: Astal.WindowAnchor;
	switch (position) {
		case CornerPosition.TOP_LEFT:
			anchor = Astal.WindowAnchor.TOP | Astal.WindowAnchor.LEFT;
			break;
		case CornerPosition.TOP_RIGHT:
			anchor = Astal.WindowAnchor.TOP | Astal.WindowAnchor.RIGHT;
			break;
		case CornerPosition.BOTTOM_LEFT:
			anchor = Astal.WindowAnchor.BOTTOM | Astal.WindowAnchor.LEFT;
			break;
		case CornerPosition.BOTTOM_RIGHT:
			anchor = Astal.WindowAnchor.BOTTOM | Astal.WindowAnchor.RIGHT;
			break;
	}

	return (
		<window
			visible
			cssClasses={["monitor-corner", position]}
			gdkmonitor={monitor}
			application={app}
			exclusivity={Astal.Exclusivity.EXCLUSIVE}
			anchor={anchor}
		></window>
	);
}

/**
 * Simulates rounding of the monitor's corners.
 */
export default function MonitorCorners(monitor: Gdk.Monitor) {
	return (
		<>
			<MonitorCorner monitor={monitor} position={CornerPosition.TOP_LEFT} />
			<MonitorCorner monitor={monitor} position={CornerPosition.TOP_RIGHT} />
			<MonitorCorner monitor={monitor} position={CornerPosition.BOTTOM_LEFT} />
			<MonitorCorner monitor={monitor} position={CornerPosition.BOTTOM_RIGHT} />
		</>
	);
}
