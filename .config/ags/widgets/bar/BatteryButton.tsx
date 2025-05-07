import { bind } from "astal";
import AstalBattery from "gi://AstalBattery?version=0.1";

const battery = AstalBattery.get_default();

export default function BatteryButton() {
	if (!battery.isBattery) {
		return <></>;
	} else {
		return (
			<menubutton cssClasses={["battery-button"]}>
				<image iconName={bind(battery, "batteryIconName")} />
				<popover>
					<label label={"TODO: battery info"} />
				</popover>
			</menubutton>
		);
	}
}
