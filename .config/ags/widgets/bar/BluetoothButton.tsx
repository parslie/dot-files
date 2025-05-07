import { bind, Variable } from "astal";
import AstalBluetooth from "gi://AstalBluetooth?version=0.1";

const bluetooth = AstalBluetooth.get_default();

export default function BluetoothButton() {
	const statusIconName = Variable("");

	function updateStatusIcon() {
		if (!bluetooth.isPowered) {
			statusIconName.set("bluetooth-disabled-symbolic");
		} else if (!bluetooth.isConnected) {
			statusIconName.set("bluetooth-disconnected-symbolic");
		} else {
			statusIconName.set("bluetooth-active-symbolic");
		}
	}

	setInterval(() => {
		updateStatusIcon();
	}, 1000);

	setTimeout(() => {
		updateStatusIcon();
	}, 0);

	return (
		<menubutton cssClasses={["bluetooth-button"]}>
			<image iconName={bind(statusIconName)} />
			<popover>
				<box vertical>
					<label label={"TODO: scan for and connect to devices"} />
				</box>
			</popover>
		</menubutton>
	);
}
