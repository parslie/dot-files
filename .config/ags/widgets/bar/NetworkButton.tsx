import { bind, Variable } from "astal";
import AstalNetwork from "gi://AstalNetwork?version=0.1";

const network = AstalNetwork.get_default();

function UnknownNetworkButton() {
	return (
		<menubutton cssClasses={["network-button", "unknown"]}>
			<image iconName={"dialog-question-symbolic"} />
			<popover>
				<box vertical>
					<label label={"TODO: unknown info"} />
				</box>
			</popover>
		</menubutton>
	);
}

function WifiNetworkButton() {
	const wifi = network.wifi;

	return (
		<menubutton cssClasses={["network-button", "wifi"]}>
			<image iconName={bind(wifi, "iconName")} />
			<popover>
				<box vertical>
					<label label={"TODO: wifi info"} />
				</box>
			</popover>
		</menubutton>
	);
}

function WiredNetworkButton() {
	const wired = network.wired;

	return (
		<menubutton cssClasses={["network-button", "wired"]}>
			<image iconName={bind(wired, "iconName")} />
			<popover>
				<box vertical>
					<label label={"TODO: wired info"} />
				</box>
			</popover>
		</menubutton>
	);
}

export default function NetworkButton() {
	switch (network.primary) {
		case AstalNetwork.Primary.UNKNOWN:
			return <UnknownNetworkButton />;
		case AstalNetwork.Primary.WIFI:
			return <WifiNetworkButton />;
		case AstalNetwork.Primary.WIRED:
			return <WiredNetworkButton />;
	}

	return (
		<menubutton cssClasses={["network-button"]}>
			<image iconName={""} />
			<popover>
				<box vertical>
					<label label={"TODO: network info"} />
				</box>
			</popover>
		</menubutton>
	);
}
