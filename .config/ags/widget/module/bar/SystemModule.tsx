import { bind } from "astal";
import AstalNetwork from "gi://AstalNetwork?version=0.1";
import AstalWp from "gi://AstalWp?version=0.1";

const network = AstalNetwork.get_default();
const defaultSpeaker = AstalWp.get_default()!.audio.defaultSpeaker;

export default function SystemModule() {
	return (
		<menubutton cssClasses={["bar-module", "system"]}>
			<box spacing={8}>
				{bind(network, "primary").as((primary) =>
					primary === AstalNetwork.Primary.WIFI ? (
						<image iconName={bind(network.wifi, "iconName")} />
					) : primary === AstalNetwork.Primary.WIRED ? (
						<image iconName={bind(network.wired, "iconName")} />
					) : (
						<></>
					)
				)}
				<image iconName={bind(defaultSpeaker, "volumeIcon")} />
				<image iconName={"system-shutdown-symbolic"} />
			</box>
			<popover hasArrow={false}>
				<label label={"TODO: put stuff here"} />
			</popover>
		</menubutton>
	);
}
